<template>
  <div class="chat__room--top">
    <div class="chat__room--user">{{ user?.name }}</div>
    <div class="chat__room--timestamp">Онлайн</div>
  </div>
  <div class="chat__room">
    <div class="chat__room--inner" ref="chatRoom">
      <div class="chat__room--day">Сегодня</div>
      <div
        class="chat__room--text"
        v-for="chat in user?.chat"
        :key="chat.chat_id"
        :class="chat.isRecieved ? 'recive' : 'send'"
      >
        {{ chat.message }}
        <span
          >{{ new Date(chat.timestamp).getHours() }}:
          {{ new Date(chat.timestamp).getMinutes() }}
          <img v-if="!chat.isRecieved" src="@/assets/icons/doubletick.svg" alt="doubletick" />
        </span>
      </div>
    </div>
  </div>
  <form class="chat__room--form" @submit.prevent.enter="submitHandler">
    <input type="text" class="chat__input" placeholder="Сообщение" v-model="message" />
    <button type="submit" class="chat__room--submit" :disabled="checkMessageLength">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.0833 2H31.9167C33.5301 2 35.0774 2.64092 36.2182 3.78176C37.3591 4.9226 38 6.46991 38 8.0833V32.19C38 32.953 37.8497 33.7085 37.5577 34.4134C37.2658 35.1183 36.8378 35.7588 36.2983 36.2983C35.7588 36.8378 35.1183 37.2658 34.4134 37.5577C33.7085 37.8497 32.953 38 32.19 38H7.81C7.04702 38 6.29151 37.8497 5.58661 37.5577C4.88171 37.2658 4.24122 36.8378 3.70171 36.2983C3.1622 35.7588 2.73424 35.1183 2.44226 34.4134C2.15028 33.7085 2 32.953 2 32.19V8.0833C2 6.46991 2.64092 4.9226 3.78176 3.78176C4.9226 2.64092 6.46991 2 8.0833 2Z"
          fill="#00CD69"
        />
        <path
          d="M31.4316 9.02829C31.2985 8.89514 31.1305 8.80228 30.9469 8.76039C30.7634 8.7185 30.5717 8.72928 30.394 8.79149L7.5581 16.7842C7.38333 16.8454 7.22898 16.9539 7.11226 17.0977C6.99554 17.2415 6.92103 17.4148 6.89704 17.5984C6.87305 17.7821 6.90051 17.9687 6.97638 18.1377C7.05224 18.3066 7.17352 18.4511 7.3267 18.5552L16.0049 24.4552L21.9043 33.1329C21.996 33.2678 22.1193 33.3783 22.2634 33.4546C22.4076 33.531 22.5683 33.5709 22.7314 33.5709C22.7749 33.5708 22.8183 33.568 22.8614 33.5626C23.045 33.5385 23.2183 33.464 23.362 33.3473C23.5057 33.2306 23.6142 33.0762 23.6754 32.9015L31.6686 10.066C31.7308 9.88825 31.7416 9.69656 31.6996 9.51298C31.6577 9.32941 31.5648 9.16139 31.4316 9.02829ZM22.4429 30.3683L18.0167 23.8574L22.9367 18.9374C23.1203 18.7491 23.2223 18.496 23.2207 18.233C23.219 17.9699 23.1138 17.7182 22.9278 17.5322C22.7418 17.3462 22.49 17.241 22.227 17.2393C21.964 17.2377 21.7109 17.3397 21.5226 17.5233L16.6026 22.4433L10.0917 18.0167L29.0946 11.3653L22.4429 30.3683Z"
          fill="white"
        />
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, onBeforeUpdate, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useChatStore } from '@/stores/chat'
import type { IChatUsers } from '@/types'

const route = useRoute()
const store = useChatStore()
let paramId = +route.params.id
const user = ref<IChatUsers | undefined>(store.getDetailedChat(paramId))
const chatRoom = ref()
const message = ref('')

const updateScrollView = () => {
  chatRoom.value.scrollIntoView({ block: 'end', inline: 'nearest' })
}

const checkMessageLength = computed(() => {
  return message.value.length < 1 || message.value.length > 1024
})

const submitHandler = () => {
  if (!checkMessageLength) return
  store.addMessage({
    id: paramId,
    chat_id: Math.floor(Math.random() * 1000) + 1,
    message: message.value,
    timestamp: new Date().toISOString(),
    isRecieved: false
  })

  message.value = ''
}

onBeforeUpdate(() => {
  paramId = +route.params.id
  user.value = store.getDetailedChat(paramId)
})
onUpdated(() => {
  updateScrollView()
})
</script>
