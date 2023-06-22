<template>
  <div class="chat">
    <div class="chat__wrapper">
      <div class="chat__left">
        <input class="chat__input" type="search" v-model="searchedName" placeholder="Поиск" />
        <div class="chat__menu">
          <RouterLink
            v-for="user in users"
            class="chat__menu--list"
            :key="user.id"
            :to="`/chat/${user.id}`"
          >
            <img class="chat__menu--img" :src="`/images/users/${user.avatar}`" alt="munisa" />
            <div class="chat__menu--content">
              <div class="chat__menu--top">
                <p class="chat__menu--name">{{ user.name }}</p>
                <span class="chat__menu--timestamp"
                  >{{ new Date(user.chat[user.chat.length - 1].timestamp).getHours() }}:{{
                    new Date(user.chat[user.chat.length - 1].timestamp).getMinutes()
                  }}</span
                >
              </div>
              <p class="chat__menu--text">
                {{ user.chat[user.chat.length - 1].message }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="chat__right">
        <RouterView />
        <span class="chat__empty">Выберите, кому хотели написать</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useChatStore } from '@/stores/chat'
import { computed, ref } from 'vue'
const store = useChatStore()
const searchedName = ref('')

const users = computed(() => {
  if (searchedName.value.length) {
    return store.chatUsers.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchedName.value.toLowerCase())
    )
  }
  return store.chatUsers
})
</script>
