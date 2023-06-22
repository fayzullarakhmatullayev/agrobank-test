import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IChatUsers, IMessage } from '@/types'
import { users } from '@/db'

export const useChatStore = defineStore(
  'chat',
  () => {
    const chatUsers = ref<IChatUsers[]>(users)

    const getDetailedChat = (id: number): IChatUsers | undefined => {
      if (!id) return

      return chatUsers.value.find((user) => user.id === id)
    }

    const addMessage = (payload: IMessage): void => {
      const { id, ...rest } = payload
      const index = chatUsers.value.findIndex((user) => user.id === id)
      chatUsers.value[index].chat.push(rest)
    }

    return { chatUsers, getDetailedChat, addMessage }
  },
  { persist: true }
)
