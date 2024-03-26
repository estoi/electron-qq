<script setup lang="ts">
import { useMessagesStore } from '@/store/modules/messages'

const messagesStore = useMessagesStore()
</script>
<template>
  <div class="h-screen w-full absolute top-0">
    <var-row class="h-full">
      <var-col
        class="h-full bg-white"
        :span="8"
        direction="column"
      >
        <div class="flex flex-items-start flex-gap-10px p-[30px_20px_0]">
          <var-input
            :hint="false"
            size="small"
            variant="outlined"
            placeholder="搜索"
            style="
              --input-input-height: 15px;
              --field-decorator-outlined-small-padding-left: 5px;
              --field-decorator-outlined-small-padding-right: 5px;
              --field-decorator-outlined-small-padding-top: 5px;
              --field-decorator-outlined-small-padding-bottom: 5px;
              --field-decorator-outlined-small-margin-top: 2px;
              --field-decorator-outlined-small-margin-bottom: 2px;
              --field-decorator-outlined-small-icon-margin-top: 5px;
              --field-decorator-outlined-small-icon-margin-bottom: 5px;
            "
          >
            <template #prepend-icon>
              <var-icon
                class="prepend-icon"
                name="magnify"
              />
            </template>
          </var-input>
          <var-button
            size="small"
            text
            outline
          >
            <var-icon name="plus" />
          </var-button>
        </div>
        <div>
          <div
            v-for="item of messagesStore.list"
            :key="item.name"
          >
            <!-- <var-avatar :src="item.avatar"></var-avatar> -->
          </div>
        </div>
      </var-col>
      <var-col :span="16"> </var-col>
    </var-row>
  </div>
</template>
