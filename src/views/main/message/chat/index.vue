<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
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
    <div style="height: calc(100vh - 80px)">
      <splitpanes
        horizontal
        class="h-full default-theme"
      >
        <pane></pane>
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
          </div>
        </pane>
      </splitpanes>
    </div>
  </div>
</template>
