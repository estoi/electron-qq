type Fn = (...args: any[]) => void

export const useThrottle = (fn: Fn, wait: number = 150): Fn => {
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

export const useDebounce = (fn: Fn, wait: number = 150): Fn => {
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

export const useConstellation = (birthday: string = ''): string => {
  const [month, day] = birthday.split('-')
  const constellations = [
    { name: '水瓶', start: [1, 20], end: [2, 18] },
    { name: '双鱼', start: [2, 19], end: [3, 20] },
    { name: '白羊', start: [3, 21], end: [4, 19] },
    { name: '金牛', start: [4, 20], end: [5, 20] },
    { name: '双子', start: [5, 21], end: [6, 21] },
    { name: '巨蟹', start: [6, 22], end: [7, 22] },
    { name: '狮子', start: [7, 23], end: [8, 22] },
    { name: '处女', start: [8, 23], end: [9, 22] },
    { name: '天秤', start: [9, 23], end: [10, 23] },
    { name: '天蝎', start: [10, 24], end: [11, 22] },
    { name: '射手', start: [11, 23], end: [12, 21] },
    { name: '摩羯', start: [12, 22], end: [1, 19] },
  ]
  for (let i = 0; i < constellations.length; i++) {
    const constellation = constellations[i]
    const _m = Number(month)
    const _d = Number(day)
    if (_m === constellation.start[0]) {
      if (_d < constellation.start[1]) {
        return `${(constellations[i - 1] || constellations[constellations.length - 1]).name}座`
      } else {
        return `${constellation.name}座`
      }
    }
  }

  return '未知星座'
}
