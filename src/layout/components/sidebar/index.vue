<script lang="ts" setup>
import router from '@/router'
import UserModal from '@/components/userModal/index.vue'
import { RouteRecordRaw } from 'vue-router'

const _router = useRouter()

const routes = router.options.routes.filter((i) => !i?.meta?.hidden)[0]
  ?.children

const settings = [
  {
    key: 1,
    icon: 'youxiang',
  },
  {
    key: 2,
    icon: 'wenjianjia',
  },
  {
    key: 3,
    icon: 'shoucang',
  },
  {
    key: 4,
    icon: 'caidan',
  },
]

const handleClick = (route: RouteRecordRaw) => {
  const { path, meta } = route
  const { trigger } = meta || {}
  if (trigger === 'router') {
    _router.push(path)
  }
}
</script>
<template>
  <div
    class="h-screen w-full bg-#e8e8e9 pt-50px flex flex-col flex-items-center"
  >
    <user-modal></user-modal>
    <var-space
      direction="column"
      size="large"
      class="mt-10px"
    >
      <var-button
        v-for="item of routes"
        :key="item.path"
        text
        @click="handleClick(item)"
      >
        <var-icon
          :size="23"
          namespace="icon-font"
          :name="item.meta?.icon"
        ></var-icon>
      </var-button>
    </var-space>
    <var-space
      direction="column"
      class="mt-90px"
    >
      <var-button
        v-for="item of settings"
        :key="item.key"
        text
      >
        <var-icon
          :size="18"
          namespace="icon-font"
          :name="item.icon"
        ></var-icon>
      </var-button>
    </var-space>
  </div>
</template>
