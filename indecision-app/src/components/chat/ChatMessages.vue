<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'
import { scrollToEnd } from '@/helpers/scrollToEnd'

interface Props {
  messages: ChatMessage[]
}

const { messages } = defineProps<Props>()

const chatRef = useTemplateRef<HTMLDivElement>('chatContainer')

watch(
  [messages],
  () => {
    nextTick(() => scrollToEnd(chatRef))
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chatContainer">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
