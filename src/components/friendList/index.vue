<script lang="ts" setup>
interface optionItem {
  icon?: string
  title: string
  id: number
  avatar?: string
  status?: number
  name?: string
  list?: Array<optionItem>
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

const onOpen = (friend: any) => {
  emits('open', friend)
}

onMounted(() => {
  nextTick(() => {
    props.options.forEach((_, index: number) => {
      expands.value[index] = false
    })
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
        <slot
          name="extra"
          :data="item"
        ></slot>
      </div>

      <div>
        <var-collapse-transition :expand="expands[index]">
          <div
            v-for="i of item.list"
            :key="i.id"
            class="h-60px px-20px flex flex-items-center cursor-pointer hover:bg-#ebebeb"
            @click="onOpen(i)"
          >
            <var-avatar
              :src="i.avatar"
              :size="40"
            ></var-avatar>
            <div class="ml-10px flex flex-col justify-start pt-5px">
              <p
                :class="[
                  'font-size-12px',
                  i.status === 1 ? 'color-black' : 'color-gray',
                ]"
              >
                {{ i.name }}
              </p>
              <p
                class="flex flex-items-center font-size-10px color-gray mt-10px"
              >
                [<i
                  :class="[
                    'inline-block w-10px h-10px mx-2px rounded-50%',
                    i.status === 1 ? ' bg-#6be192' : 'bg-gray/50',
                  ]"
                ></i
                >{{ i.status === 1 ? '在线' : '离线' }}]
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
