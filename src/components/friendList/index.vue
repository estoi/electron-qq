<script lang="ts" setup>
interface optionItem {
  icon?: string
  title: string
  children?: Array<optionItem>
}
interface Props {
  options: Array<optionItem>
}

const props = defineProps<Props>()

const emits = defineEmits(['open'])

const expands: Ref<boolean[]> = ref([])

const openList = (_: any, index: number) => {
  expands.value[index] = !expands.value[index]
}

const onOpen = (_: number) => {
  emits('open', _)
}

onMounted(() => {
  props.options.forEach((_, index: number) => {
    expands.value[index] = false
  })
})
</script>
<template>
  <div class="">
    <div
      v-for="(item, index) of props.options"
      :key="index"
    >
      <div
        class="px-20px flex flex-items-center h-30px cursor-pointer"
        @click="openList(item, index)"
      >
        <var-icon
          name="chevron-right"
          :size="20"
          :class="[expands[index] ? 'open' : '']"
        />
        <p class="flex-1 font-size-14px ml-10px">{{ item.title }}</p>
        <slot name="extra"></slot>
      </div>

      <div>
        <var-collapse-transition :expand="expands[index]">
          <div
            v-for="i of 10"
            :key="i"
            class="h-60px px-20px flex flex-items-center cursor-pointer hover:bg-#ebebeb"
            @click="onOpen(i)"
          >
            <var-avatar :size="40"></var-avatar>
            <div class="ml-10px flex flex-col justify-start pt-5px">
              <p class="font-size-12px">Windy</p>
              <p
                class="flex flex-items-center font-size-10px color-gray mt-10px"
              >
                [<i
                  class="inline-block w-10px h-10px mx-2px rounded-50% bg-#6be192"
                ></i
                >在线]
              </p>
            </div>
          </div>
        </var-collapse-transition>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.var-icon {
  transition: transform linear 0.2s !important;
  &.open {
    transform: rotate(90deg);
  }
}
</style>
