<script setup lang="ts">
import { useHttp } from '@/utils/http'
import { useSidebarStore } from '@/store/modules/sidebar'
import { useMessagesStore } from '@/store/modules/messages'
import { format } from 'date-fns'

const router = useRouter()
const messages = ref()
const sidebarStore = useSidebarStore()
const messagesStore = useMessagesStore()

const openChat = async (item: any, index: number) => {
  const { isFinished } = await useHttp('/readMessage', {
    method: 'POST',
    params: {
      id: item.id,
    },
  })
  if (isFinished.value) {
    await getList()
    const id = messages.value[index].id
    messagesStore.setActive(id)
    router.push({
      name: 'Chat',
    })
  }
}

const getList = async () => {
  const { data, isFinished } = await useHttp('/messages', {
    method: 'GET',
  })
  if (isFinished.value) {
    const { data: res } = data.value
    messages.value = [...res.messages]
    messages.value.forEach((item: any) => {
      item.list.sort(
        (a: any, b: any) =>
          (new Date(a.time) as any) - (new Date(b.time) as any)
      )
    })
    sidebarStore.setCount(res.allCounts)
  }
}

onMounted(() => {
  getList()
})
</script>
<template>
  <div
    class="h-screen w-full absolute top-0"
    style="width: calc(100% - 8.33333333%)"
  >
    <var-row class="h-full">
      <var-col
        class="h-full bg-white"
        :span="6"
        direction="column"
      >
        <div class="flex flex-items-start flex-gap-10px p-[30px_20px_0]">
          <var-input
            :hint="false"
            size="small"
            variant="outlined"
            placeholder="搜索"
            style="
              --input-input-height: 15px;
              --field-decorator-outlined-small-padding-left: 5px;
              --field-decorator-outlined-small-padding-right: 5px;
              --field-decorator-outlined-small-padding-top: 5px;
              --field-decorator-outlined-small-padding-bottom: 5px;
              --field-decorator-outlined-small-margin-top: 2px;
              --field-decorator-outlined-small-margin-bottom: 2px;
              --field-decorator-outlined-small-icon-margin-top: 5px;
              --field-decorator-outlined-small-icon-margin-bottom: 5px;
              --input-input-font-size: 14px;
            "
          >
            <template #prepend-icon>
              <var-icon
                class="prepend-icon"
                name="magnify"
              />
            </template>
          </var-input>
          <var-button
            size="small"
            text
            outline
          >
            <var-icon name="plus" />
          </var-button>
        </div>
        <div
          class="mt-30px overflow-y-scroll"
          style="height: calc(100% - 30px - 30px - 50px)"
        >
          <div
            v-for="(item, index) of messages"
            :key="item.id"
            v-hover="{
              background: '#f2f2f2',
            }"
            :class="[
              'message-item h-70px p-[0_20px] flex flex-items-center cursor-pointer',
              messagesStore.active === item.id ? 'active' : '',
            ]"
            @click="openChat(item, index)"
          >
            <var-avatar
              :size="42"
              :src="item.otherAvatar"
            ></var-avatar>
            <div class="h-42px ml-5px flex flex-col justify-center">
              <p class="mb-8px font-size-15px font-100">
                {{ item.otherName }}
              </p>
              <var-ellipsis
                :class="[
                  'font-size-10px',
                  messagesStore.active === item.id
                    ? 'color-white'
                    : 'color-gray',
                ]"
                style="width: 110px"
                :tooltip="false"
              >
                {{ item.list[item.list.length - 1].text }}
              </var-ellipsis>
            </div>
            <div class="h-42px pt-5px text-center">
              <p class="color-gray font-size-8px mb-5px">
                {{ format(item.list[item.list.length - 1]?.time, 'HH:mm') }}
              </p>
              <var-badge
                :max-value="99"
                type="danger"
                style="--badge-content-font-size: 8px"
                :hidden="!(item.unreadCount > 0)"
                :value="item.unreadCount"
              ></var-badge>
            </div>
          </div>
        </div>
      </var-col>
      <var-col :span="18">
        <router-view></router-view>
      </var-col>
    </var-row>
  </div>
</template>
<style lang="scss" scoped>
.message-item {
  &.active {
    background-color: var(--color-primary) !important;
    color: #fff !important;
    p {
      color: #fff !important;
    }
  }
}
</style>
