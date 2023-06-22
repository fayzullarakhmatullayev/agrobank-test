<template>
  <aside class="side__block">
    <div class="profile">
      <img src="/images/users/ivan.png" alt="ivan" class="profile__img" />
      <p class="profile__name">Анатолий Викторович</p>
    </div>
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__menu--list">
          <RouterLink class="nav__menu--link" to="/">
            <img src="@/assets/icons/home.svg" alt="home" />
            <span>Главный экран</span>
          </RouterLink>
        </li>
        <li class="nav__menu--list">
          <RouterLink class="nav__menu--link" to="/chat">
            <img src="@/assets/icons/chat.svg" alt="chat" />
            <span>Чат</span>
          </RouterLink>
        </li>
        <li class="nav__menu--list">
          <RouterLink class="nav__menu--link" to="/settings">
            <img src="@/assets/icons/settings.svg" alt="settings" />
            <span>Настройки</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <button class="side__block--quit">Выйти</button>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
