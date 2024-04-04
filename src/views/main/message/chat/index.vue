<script lang="ts" setup>
import Mock from 'mockjs'
import { Splitpanes, Pane } from 'splitpanes'
import { useUserStore } from '@/store/modules/user'
import { useMessagesStore } from '@/store/modules/messages'
import { useDebounce } from '@/composables'
import EmojiPicker from '@/components/emojiPicker/index.vue'

const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
})

const userStore = useUserStore()
const messagesStore = useMessagesStore()

const id = ref()
const arr = ref()
const content: Ref<string> = ref('')
const otherName: Ref<string> = ref('')
const otherAvatar: Ref<string> = ref('')
const show: Ref<boolean> = ref(false)
const drawer: Ref<Element | undefined> = ref()
const isTop: Ref<boolean> = ref(false)
const isNotice: Ref<boolean> = ref(false)
const isShield: Ref<boolean> = ref(false)
const scrollEl = ref<HTMLElement | null>(null)
const chatRef = ref<HTMLElement | null>()
const { y } = useScroll(scrollEl, { behavior: 'smooth' })

onUpdated(() => {
  if (props?.chat) {
    otherName.value = props.chat.otherName
    otherAvatar.value = props.chat.otherAvatar
    id.value = props.chat.id
    arr.value = [...props?.chat.list]
  }
  y.value = 0
})

watch(messagesStore.dataSource.list, (v) => {
  const index = v.findIndex((i) => i.id === id.value)
  arr.value = [...v[index].list]
})

const openDrawer = () => {
  show.value = true
}

const onEnter = (e: any) => {
  e.preventDefault()
  useDebounce(() => {
    const lastEl = <HTMLElement>(
      document.querySelectorAll('.item')[
        document.querySelectorAll('.item').length - 1
      ]
    )
    !!content.value &&
      messagesStore.sendMessage({
        id: id.value,
        text: content.value,
        time: Mock.mock('@now'),
        read: true,
        isMe: true,
      })
    content.value = ''
    nextTick(() => {
      y.value = lastEl.offsetTop - 320
    })
  })()
}

const onSelect = (e: any) => {
  const { native } = e
  content.value += native
}
</script>
<template>
  <div class="chat h-screen w-full pt-30px">
    <div
      class="box-border h-30px flex flex-items-center justify-between p-[0px_20px]"
    >
      <div>
        <p class="font-size-14px font-bold">{{ otherName }}</p>
      </div>
      <div>
        <var-space :size="[0, 0]">
          <var-tooltip content="语音通话">
            <var-button
              text
              size="small"
            >
              <var-icon
                namespace="icon-font"
                name="yuyintonghua"
                :size="20"
              ></var-icon>
            </var-button>
          </var-tooltip>
          <var-tooltip content="视频通话">
            <var-button
              text
              size="small"
            >
              <var-icon
                namespace="icon-font"
                name="shipintonghua"
                :size="20"
              ></var-icon>
            </var-button>
          </var-tooltip>
          <var-tooltip content="屏幕共享">
            <var-button
              text
              size="small"
            >
              <var-icon
                namespace="icon-font"
                name="gongxiang"
                :size="20"
              ></var-icon>
            </var-button>
          </var-tooltip>
          <var-tooltip content="发起群聊">
            <var-button
              text
              size="small"
            >
              <var-icon
                namespace="icon-font"
                name="chuangjianqunliao"
                :size="20"
              ></var-icon>
            </var-button>
          </var-tooltip>
          <var-button
            text
            size="small"
            @click="openDrawer()"
          >
            <var-icon
              namespace="icon-font"
              name="ellipsis"
              :size="20"
            ></var-icon>
          </var-button>
        </var-space>
      </div>
    </div>
    <var-divider />
    <div
      ref="drawer"
      style="height: calc(100vh - 80px)"
    >
      <splitpanes
        horizontal
        class="h-full default-theme"
      >
        <pane>
          <div
            ref="scrollEl"
            class="h-full overflow-y-scroll p-[10px_20px]"
          >
            <div
              v-for="(item, index) of arr"
              :key="index"
              :class="[
                'item mb-10px flex flex-items-start',
                item.isMe ? 'justify-end' : '',
              ]"
            >
              <template v-if="!item.isMe">
                <var-avatar
                  :size="30"
                  :src="otherAvatar"
                ></var-avatar>
                <div class="ml-10px">
                  <p class="font-size-10px color-gray mb-5px">
                    {{ otherName }}
                  </p>
                  <p class="bg-white p-[10px_8px] rounded-15px font-size-12px">
                    {{ item.text }}
                  </p>
                </div>
              </template>
              <template v-if="item.isMe">
                <div class="mr-10px">
                  <p
                    class="color-white bg-primary p-[10px_8px] rounded-15px font-size-12px"
                  >
                    {{ item.text }}
                  </p>
                </div>
                <var-avatar
                  :size="30"
                  :src="userStore.user.avatar"
                ></var-avatar>
              </template>
            </div>
          </div>
        </pane>
        <pane
          min-size="25"
          max-size="45"
        >
          <div class="chat-emoji-parent">
            <div
              class="h-40px p-[0_10px] flex flex-items-center justify-between"
            >
              <div ref="chatRef">
                <var-space :size="[0, 0]">
                  <var-tooltip content="表情">
                    <emoji-picker
                      :target="chatRef"
                      @select-emoji="onSelect"
                    ></emoji-picker>
                  </var-tooltip>
                  <var-tooltip content="截图">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="jietu"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                  <var-tooltip content="文件">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="wenjian"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                  <var-tooltip content="图片">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="tupian"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                  <var-tooltip content="窗口抖动">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="doudong"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                  <var-tooltip content="红包">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="hongbao"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                  <var-tooltip content="语音">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="yuyin"
                        :size="20"
                      ></var-icon>
                    </var-button>
                  </var-tooltip>
                </var-space>
              </div>
              <div>
                <var-tooltip
                  content="聊天记录"
                  placement="bottom-start"
                >
                  <var-button
                    text
                    size="small"
                  >
                    <var-icon
                      namespace="icon-font"
                      name="liaotianjilu"
                      :size="20"
                    ></var-icon>
                  </var-button>
                </var-tooltip>
              </div>
            </div>
            <div class="h-130px p-15px">
              <textarea
                v-model="content"
                class="w-full h-full bg-transparent border-none outline-none resize-none"
                @keydown.enter="onEnter"
              ></textarea>
            </div>
          </div>
        </pane>
      </splitpanes>
    </div>
    <var-popup
      v-model:show="show"
      position="right"
      :overlay-style="{
        backgroundColor: 'transparent',
      }"
      class="w-300px"
      close-on-key-escape
      :teleport="drawer"
    >
      <div class="bg-#f2f2f2 h-full p-15px">
        <div class="bg-white rounded-10px p-[10px_15px]">
          <div class="h-30px flex flex-items-center justify-between">
            <p class="font-size-14px">设为置顶</p>
            <var-switch
              v-model="isTop"
              size="15"
            />
          </div>
          <var-divider />
          <div class="h-40px flex flex-items-center justify-between">
            <p class="font-size-14px">消息免打扰</p>
            <var-switch
              v-model="isNotice"
              size="15"
            />
          </div>
        </div>
        <div class="bg-white mt-25px rounded-10px p-[10px_15px]">
          <div class="h-30px flex flex-items-center justify-between">
            <p class="font-size-14px">屏蔽此人</p>
            <var-switch
              v-model="isShield"
              size="15"
            />
          </div>
        </div>
        <div class="bg-white mt-25px rounded-10px p-[10px_15px]">
          <div class="h-30px flex flex-items-center justify-between">
            <p class="font-size-14px">删除聊天记录</p>
          </div>
        </div>
        <div class="bg-white mt-25px rounded-10px p-[10px_15px]">
          <div class="h-30px flex flex-items-center justify-center">
            <p class="font-size-14px color-red">删除好友</p>
          </div>
        </div>
        <p class="pt-30px color-primary font-size-10px text-center">
          被骚扰了？举报该用户
        </p>
      </div>
    </var-popup>
  </div>
</template>
<style lang="scss">
.chat {
  .var-popup__content {
    height: calc(100vh - 30px - 30px - 8px);
    top: 68px;
  }
}
</style>
