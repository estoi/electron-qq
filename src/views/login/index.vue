<script setup lang="ts">
import { useIpcRenderer } from '@vueuse/electron'

const ipcRenderer = useIpcRenderer()

const formRef = ref(null)
const disabled = ref(true)
const loading = ref(false)
const formData = reactive({
  qq: '',
  password: '',
  agree: false,
})

watch(formData, () => {
  disabled.value = !formData.qq || !formData.password || !formData.agree
})

const onLogin = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    ipcRenderer.invoke('open-win', '/main')
  }, 2000)
  // window.open('/home')
}
</script>
<template>
  <div class="h-screen w-screen relative">
    <img
      class="h-full w-full absolute object-fill"
      src="@/assets/images/bg.png"
      alt=""
    />
    <div class="absolute left-0 top-0 right-0 bottom-0 z-1">
      <h1
        class="pt-40px text-center color-transparent flex flex-items-center justify-center linear-gradient bg-clip-text"
      >
        <span class="qq-title font-size-40px font-400">QQ</span>
        <span class="font-bold font-size-32px">9</span>
      </h1>
      <div class="p-40px">
        <var-form
          ref="formRef"
          scroll-to-error="start"
        >
          <var-space
            direction="column"
            :size="[14, 0]"
          >
            <var-input
              v-model="formData.qq"
              clearable
              placeholder="输入QQ号码"
              type="number"
            ></var-input>
            <var-input
              v-model="formData.password"
              clearable
              placeholder="输入QQ密码"
              type="password"
            ></var-input>
            <var-radio
              v-model="formData.agree"
              :ripple="false"
            >
              <template #unchecked-icon>
                <div class="i-mdi-circle-outline font-size-18px" />
              </template>
              <template #checked-icon>
                <div class="i-mdi-check-circle-outline font-size-18px" />
              </template>
              <p class="font-size-10px">
                已阅读并同意<a class="color-#3a7afe">服务协议</a>和<a
                  class="color-#3a7afe"
                  >QQ隐私保护协议</a
                >
              </p>
            </var-radio>
            <var-button
              :disabled="disabled"
              :loading="loading"
              block
              type="primary"
              @click="onLogin"
              >登录</var-button
            >
          </var-space>
        </var-form>
      </div>
    </div>
  </div>
</template>
