<script lang="ts" setup>
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

const props = defineProps({
  target: {
    required: true,
    type: HTMLElement,
  },
})

const emits = defineEmits(['selectEmoji'])

const emoji = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    new Picker({
      data,
      parent: emoji.value,
      searchPosition: 'none',
      locale: 'zh',
      set: 'native',
      theme: 'light',
      previewPosition: 'none',
      emojiSize: 20,
      perLine: 14,
      onEmojiSelect: (e: any) => emits('selectEmoji', e),
    })
  })
})
</script>
<template>
  <var-tooltip
    trigger="click"
    placement="top-end"
    :teleport="props.target"
  >
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
    <template #content>
      <div class="w535px h400px bg-white overflow-y-scroll">
        <div ref="emoji"></div>
      </div>
    </template>
  </var-tooltip>
</template>
<style lang="scss">
.chat-emoji-parent {
  .var-tooltip__content-container {
    box-shadow:
      rgba(0, 0, 0, 0.07) 0px 1px 2px,
      rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px,
      rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px,
      rgba(0, 0, 0, 0.07) 0px 32px 64px;
    padding: 0 !important;
    opacity: 1;
    border-radius: 10px !important;
  }
}
</style>
