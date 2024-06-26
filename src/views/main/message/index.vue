<script setup lang="ts">
import { useMessagesStore } from '@/store/modules/messages'
import { format } from 'date-fns'

const router = useRouter()
const chat = ref()
const showDefault: Ref<boolean> = ref(true)
const messagesStore = useMessagesStore()

const openChat = async (item: any) => {
  await messagesStore.readMessage(item.id)
  showDefault.value = false
  messagesStore.setActive(item.id)
  chat.value = {
    list: [...item.list],
    id: item.id,
    otherName: item.otherName,
    otherAvatar: item.otherAvatar,
  }
  router.push({
    name: 'Chat',
  })
}

const handleCount = (list: any) => {
  let count = 0
  list.forEach((item: any) => {
    if (!item.isMe && !item.read) {
      count++
    }
  })
  return count
}
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
            v-for="item of messagesStore.dataSource.list"
            :key="item.id"
            v-hover="{
              background: '#f2f2f2',
            }"
            :class="[
              'message-item h-70px p-[0_20px] flex flex-items-center cursor-pointer',
              messagesStore.active === item.id ? 'active' : '',
            ]"
            @click="openChat(item)"
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
                :hidden="!(handleCount(item.list) > 0)"
                :value="handleCount(item.list)"
              ></var-badge>
            </div>
          </div>
        </div>
      </var-col>
      <var-col :span="18">
        <div
          v-if="showDefault"
          class="h-screen w-full flex flex-items-center justify-center"
        >
          <var-icon
            :size="100"
            namespace="icon-font"
            name="qq"
            color="#e9e9e9"
          ></var-icon>
        </div>
        <router-view
          v-else
          v-slot="{ Component }"
        >
          <component
            :is="Component"
            :chat="chat"
          ></component>
        </router-view>
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
