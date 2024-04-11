<script setup lang="ts">
import FriendList from '@/components/friendList/index.vue'
import { useHttp } from '@/utils/http'

const router = useRouter()
const profile: Ref<any> = ref()
const showDefault: Ref<boolean> = ref(true)
const dataSource: any = reactive({
  list: [],
})

const openProfile = (data: any) => {
  showDefault.value = false
  profile.value = { ...data }
  router.push({
    name: 'Profile',
  })
}

const getList = async () => {
  const { data } = await useHttp('/friends', {
    method: 'GET',
  })
  const { data: res } = data.value
  const { groups } = res
  dataSource.list = [...groups]
}

const getCount = (data: any): string => {
  let count = 0
  const allCount = data.list.length
  data.list.forEach((item: any) => {
    if (item.status === 1) {
      count += 1
    }
  })

  return `${count}/${allCount}`
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
            v-temporary
            size="small"
            text
            outline
          >
            <var-icon name="plus" />
          </var-button>
        </div>
        <div class="px-20px mt-15px">
          <var-button
            v-temporary
            block
            text
            outline
            size="small"
          >
            <var-icon
              namespace="icon-font"
              name="haoyouguanli"
            />
            好友管理器
          </var-button>
        </div>
        <div class="px-10px mt-15px">
          <var-cell
            v-temporary
            ripple
            title="好友通知"
          >
            <template #extra>
              <var-icon name="chevron-right" />
            </template>
          </var-cell>
          <var-cell
            v-temporary
            ripple
            title="群通知"
          >
            <template #extra>
              <var-icon name="chevron-right" />
            </template>
          </var-cell>
        </div>
        <var-divider hairline />
        <div
          class="overflow-y-scroll"
          style="height: 100%"
        >
          <friend-list
            :options="dataSource.list"
            @open="openProfile"
          >
            <template #extra="{ data }">
              <span class="font-size-10px color-gray">{{
                getCount(data)
              }}</span>
            </template>
          </friend-list>
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
            :profile="profile"
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
