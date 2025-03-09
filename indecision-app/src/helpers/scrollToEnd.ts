import type { Ref, ShallowRef } from 'vue'

export const scrollToEnd = (
  ref: Readonly<ShallowRef<HTMLDivElement | HTMLElement | null>>,
): void => {
  ref.value?.scrollTo({
    top: ref.value.scrollHeight,
    behavior: 'smooth',
  })
}
