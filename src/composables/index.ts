type Fn = (...args: any[]) => void

export const useThrottle = (fn: Fn, wait: number = 500): Fn => {
  let timeout: NodeJS.Timeout | null = null

  // 返回新的函数
  return function (this: any, ...args: any[]) {
    if (timeout !== null) return // 如果已经在计时，则直接返回

    // 设置计时器，在指定时间后执行函数
    timeout = setTimeout(() => {
      fn.apply(this, args) // 使用 apply 来保持 this 指向
      timeout = null // 计时器执行完毕后，清空计时器
    }, wait)
  }
}

export const useDebounce = (fn: Fn, wait: number = 500): Fn => {
  let timeout: NodeJS.Timeout | null = null

  // 返回一个新的函数，用于处理延迟调用
  const debounced = function (this: any, ...args: any[]) {
    // 如果已经有一个定时器，清除它
    if (timeout !== null) {
      clearTimeout(timeout)
    }

    // 设置新的定时器
    timeout = setTimeout(() => {
      fn.apply(this, args)
      // 在定时器执行完毕后，清空引用
      timeout = null
    }, wait)
  }

  // 返回包装后的函数
  return debounced
}
