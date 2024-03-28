<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'

const show: Ref<boolean> = ref(false)
const drawer: Ref<Element | undefined> = ref()
const isTop: Ref<boolean> = ref(false)
const isNotice: Ref<boolean> = ref(false)
const isShield: Ref<boolean> = ref(false)

const openDrawer = () => {
  show.value = true
}
</script>
<template>
  <div class="chat h-screen w-full pt-30px">
    <div
      class="box-border h-30px flex flex-items-center justify-between p-[0px_20px]"
    >
      <div>
        <p class="font-size-14px font-bold">{{ 'Windy' }}</p>
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
          <div></div>
        </pane>
        <pane
          min-size="25"
          max-size="45"
        >
          <div>
            <div
              class="h-40px p-[0_10px] flex flex-items-center justify-between"
            >
              <div>
                <var-space :size="[0, 0]">
                  <var-tooltip content="表情">
                    <var-button
                      text
                      size="small"
                    >
                      <var-icon
                        namespace="icon-font"
                        name="biaoqing"
                        :size="20"
                      ></var-icon>
                    </var-button>
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
                class="w-full h-full bg-transparent border-none outline-none resize-none"
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
