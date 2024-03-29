<script lang="ts" setup>
import router from '@/router'
import UserModal from '@/components/userModal/index.vue'
import { useSidebarStore } from '@/store/modules/sidebar'
import { useMessagesStore } from '@/store/modules/messages'
import type { RouteRecordRaw } from 'vue-router'

const tooltip = ref()
const _router = useRouter()
const sidebarStore = useSidebarStore()
const messageStore = useMessagesStore()

let routes = router.options.routes.filter((i) => !i?.meta?.hidden)[0]?.children

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
  const { name, meta } = route
  const { trigger } = meta || {}
  messageStore.setActive('')
  if (trigger === 'router') {
    _router.push({
      name,
    })
  }
}
</script>
<template>
  <div
    ref="tooltip"
    class="custom-tooltip h-screen w-full bg-#e8e8e9 pt-50px flex flex-col flex-items-center"
  >
    <user-modal :target="tooltip"></user-modal>
    <var-space
      direction="column"
      size="large"
      class="mt-10px"
    >
      <template
        v-for="item of routes"
        :key="item.path"
      >
        <var-button
          v-if="item.meta?.icon !== 'gengduo'"
          text
          @click="handleClick(item)"
        >
          <var-badge
            type="danger"
            :max-value="99"
            :value="sidebarStore.count"
            :hidden="!item.meta?.badge || !sidebarStore.count"
            :offset-x="-2"
            :offset-y="2"
            style="--badge-content-font-size: 8px"
          >
            <var-icon
              :size="23"
              namespace="icon-font"
              :name="item.meta?.icon"
              :color="
                sidebarStore.selectedSidebar === item.name
                  ? 'var(--color-primary)'
                  : '#000'
              "
            ></var-icon>
          </var-badge>
        </var-button>
        <var-menu
          v-else
          placement="right"
          trigger="hover"
          :offset-x="10"
        >
          <var-button
            text
            @click="handleClick(item)"
          >
            <var-icon
              :size="23"
              namespace="icon-font"
              :name="item.meta?.icon"
              :color="
                sidebarStore.selectedSidebar === item.name
                  ? 'var(--color-primary)'
                  : '#000'
              "
            ></var-icon>
          </var-button>

          <template #menu>
            <div class="p-[5px_10px]">
              <var-button
                text
                size="small"
              >
                <var-icon
                  size="14"
                  namespace="icon-font"
                  name="guanli"
                ></var-icon>
                <span class="ml-5px">管理</span>
              </var-button>
            </div>
          </template>
        </var-menu>
      </template>
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
<style lang="scss">
.custom-tooltip {
  .var-tooltip__content-container {
    border-radius: 10px !important;
    overflow: hidden;
    box-shadow:
      rgba(0, 0, 0, 0.07) 0px 1px 2px,
      rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px,
      rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px,
      rgba(0, 0, 0, 0.07) 0px 32px 64px;
    padding: 0 !important;
    opacity: 1;
  }
}
</style>
