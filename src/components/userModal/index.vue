<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'

import crown from '@/assets/images/crown.png'
import sun from '@/assets/images/sun.png'
import moon from '@/assets/images/moon.png'
import star from '@/assets/images/star.png'
import svip from '@/assets/images/svip.png'

const props = defineProps({
  target: {
    required: true,
    type: Element,
  },
})

const userStore = useUserStore()
const show = ref(false)
const images = ['https://varlet.gitee.io/varlet-ui/cat.jpg']

const openImage = () => {
  show.value = true
}
</script>

<template>
  <var-tooltip
    placement="right-end"
    trigger="click"
    color="#fff"
    :teleport="props.target"
  >
    <var-badge
      style="--badge-dot-width: 12px; --badge-dot-height: 12px"
      type="success"
      position="right-bottom"
      dot
      :offset-x="-8"
      :offset-y="-12"
    >
      <var-avatar
        class="cursor-pointer"
        :src="userStore.user.avatar"
        :size="40"
      />
    </var-badge>
    <template #content>
      <div class="user-modal w-300px h-350px relative">
        <img
          class="w-full h-full object-fill absolute top-0 left-0"
          src="/src/assets/images/bg.png"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full z-1 p-[40px_20px] box-border"
        >
          <div class="flex flex-items-center">
            <var-avatar
              class="cursor-pointer"
              :src="userStore.user.avatar"
              :size="60"
              @click="openImage"
            />
            <div
              class="h-60px color-black ml-15px flex flex-col justify-between"
            >
              <div class="flex flex-items-center">
                <span class="mr-10px">Windy</span>
                <var-icon
                  :size="18"
                  namespace="icon-font"
                  name="nan"
                  color="#3e99f7"
                ></var-icon>
              </div>
              <p class="font-size-12px color-gray">QQ 861624449</p>
              <div class="flex flex-items-center">
                <i
                  class="inline-block w-12px h-12px rounded-50% bg-#6be192"
                ></i>
                <span class="ml-5px font-size-12px">在线</span>
              </div>
            </div>
            <div class="ml-30px">
              <var-button text>
                <div>
                  <var-icon
                    :size="15"
                    namespace="icon-font"
                    name="dianzan"
                    color="#333"
                  ></var-icon>
                  <p class="font-size-10px color-#333">9999+</p>
                </div>
              </var-button>
            </div>
          </div>
          <div>
            <div class="flex flex-items-center h-40px mt-30px">
              <div class="w-70px color-#999 font-size-14px text-right">
                等级
              </div>
              <div class="ml-10px">
                <var-avatar
                  color="transparent"
                  :src="crown"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="sun"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="sun"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="sun"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="moon"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="moon"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="moon"
                  :size="20"
                />
                <var-avatar
                  color="transparent"
                  :src="star"
                  :size="20"
                />
              </div>
            </div>
            <div class="flex flex-items-center h-40px">
              <div class="w-70px color-#999 font-size-14px text-right">
                特权
              </div>
              <div class="ml-10px">
                <img
                  class="w-45px"
                  :src="svip"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-items-center h-40px">
              <div class="w-70px color-#999 font-size-14px text-right">
                所在地
              </div>
              <div class="ml-10px">
                <p class="color-black/80">中国</p>
              </div>
            </div>
            <div class="flex flex-items-center h-40px">
              <div class="w-70px color-#999 font-size-14px text-right">
                QQ空间
              </div>
              <div class="ml-10px">
                <p class="color-black/80">查看我的QQ空间</p>
              </div>
            </div>
          </div>
          <div class="mt-10px flex flex-items-center flex-gap-10px">
            <var-button
              block
              size="small"
              >编辑资料</var-button
            >
            <var-button
              block
              size="small"
              type="primary"
              >发消息</var-button
            >
          </div>
        </div>
      </div>
    </template>
  </var-tooltip>
  <var-image-preview
    v-model:show="show"
    :images="images"
  />
</template>
<style lang="scss"></style>
