import { sleep } from '@/helpers/sleep'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'
import { ref, useTemplateRef } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      message: 'Hola, cómo estás?',
      itsMine: true,
    },
    {
      id: crypto.randomUUID(),
      message: 'Bien y tú cómo estás?',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif',
    },
  ])

  const getResponse = async () => {
    const resp = await fetch(`https://yesno.wtf/api`)
    const data = (await resp.json()) as YesNoResponse

    return data
  }

  const addMessage = async (message: string) => {
    if (message.length === 0) return

    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      message,
      itsMine: true,
    }

    messages.value.push(newMessage)

    if (!message.endsWith('?')) return

    await sleep(1000)
    const { answer, image } = await getResponse()

    const responseMessage: ChatMessage = {
      id: crypto.randomUUID(),
      message: answer,
      itsMine: false,
      image: image,
    }

    messages.value.push(responseMessage)
  }

  return {
    //Properties
    messages,

    //Methods
    addMessage,
  }
}
