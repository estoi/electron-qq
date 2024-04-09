<script lang="ts" setup>
import { format } from 'date-fns'

import crown from '@/assets/images/crown.png'
import sun from '@/assets/images/sun.png'
import moon from '@/assets/images/moon.png'
import star from '@/assets/images/star.png'
// import svip from '@/assets/images/svip.png'

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

onMounted(() => {
  console.log(props.profile)
})
</script>

<template>
  <div
    class="w-full h-screen bg-white p-[70px_100px]"
    style="border-left: 1px solid #ebebeb"
  >
    <div class="flex flex-items-center justify-between">
      <div class="flex flex-items-center">
        <var-avatar :size="90"></var-avatar>
        <div class="ml-10px">
          <p class="font-bold">{{ profile.name }}</p>
          <p class="color-gray font-size-12px my-8px">QQ {{ profile.qq }}</p>
          <p class="flex flex-items-center font-size-14px color-gray">
            <i
              :class="[
                'inline-block w-10px h-10px mx-2px rounded-50%',
                profile.status === 1 ? ' bg-#6be192' : 'bg-gray/50',
              ]"
            ></i
            >{{ profile.status === 1 ? '在线' : '离线' }}
          </p>
        </div>
      </div>
      <div>
        <var-button text>
          <div>
            <var-icon
              :size="15"
              namespace="icon-font"
              name="dianzan"
              color="#333"
            ></var-icon>
            <p class="font-size-10px color-#333">{{ profile.likes }}</p>
          </div>
        </var-button>
      </div>
    </div>
    <var-divider margin="20px 0"></var-divider>
    <div class="flex flex-items-center font-size-12px">
      <p>
        <var-icon
          :size="12"
          namespace="icon-font"
          name="nan"
          color="#3e99f7"
        ></var-icon>
        <span class="ml-3px">{{ profile.gender === 1 ? '男' : '女' }}</span>
      </p>
      <var-divider vertical />
      <p>{{ profile.age }}岁</p>
      <var-divider vertical />
      <p>{{ format(profile.birthday, 'MM月dd日') }} 射手座</p>
      <var-divider vertical />
      <p>现居 {{ profile.location?.replace(' ', '·') }}</p>
    </div>
    <div class="my-15px">
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
    <div class="flex flex-items-center justify-between font-size-14px">
      <p>
        <var-icon
          :size="14"
          namespace="icon-font"
          name="beizhu"
          color="#333"
        ></var-icon>
        备注
      </p>
      <div class="w-100px">
        <var-input
          :hint="false"
          :line="false"
          size="small"
          placeholder="设置好友备注"
        />
      </div>
    </div>
    <div class="flex flex-items-center justify-between font-size-14px">
      <p>
        <var-icon
          :size="14"
          namespace="icon-font"
          name="haoyou"
          color="#333"
        ></var-icon>
        好友分组
      </p>
      <div class="w-100px">
        <var-select
          :hint="false"
          size="small"
          variant="outlined"
          placeholder="请选择"
          style=""
        >
          <var-option
            style="--option-font-size: 14px"
            label="吃饭"
          />
          <var-option
            style="--option-font-size: 14px"
            label="睡觉"
          />
        </var-select>
      </div>
    </div>
    <var-divider margin="20px 0"></var-divider>
    <div class="flex flex-items-center justify-between font-size-14px">
      <p>
        <var-icon
          :size="14"
          namespace="icon-font"
          name="qzone"
          color="#333"
        ></var-icon>
        QQ空间
      </p>
      <div>
        <var-icon name="chevron-right" />
      </div>
    </div>
    <div class="my-40px">
      <var-space justify="center">
        <var-button
          class="w-100px"
          text
          outline
          size="small"
          >分享</var-button
        >
        <var-button
          class="w-100px"
          text
          outline
          size="small"
          >音视频通话</var-button
        >
        <var-button
          class="w-100px"
          size="small"
          type="primary"
          >发消息</var-button
        >
      </var-space>
    </div>
  </div>
</template>
