<template>
  <div class="chat">
    <div class="chat__wrapper">
      <div class="chat__left">
        <input class="chat__input" type="search" placeholder="Поиск" />
        <div class="chat__menu">
          <a href="#" class="chat__menu--list" v-for="i in 15" :key="i">
            <img class="chat__menu--img" src="@/assets/images/users/munisa.png" alt="munisa" />
            <div class="chat__menu--content">
              <div class="chat__menu--top">
                <p class="chat__menu--name">Munisa Ergasheva</p>
                <span class="chat__menu--timestamp">14:30</span>
              </div>
              <p class="chat__menu--text">
                Kredit olishim kerak edi, shartlari haqida Kredit olishim Kredit olishim Kredit
                olishim Kredit olishim
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="chat__right">
        <div class="chat__room--top">
          <div class="chat__room--user">Munisa Ergasheva</div>
          <div class="chat__room--timestamp">был(а) 5 минут назад</div>
        </div>
        <div class="chat__room">
          <div class="chat__room--inner">
            <div class="chat__room--day">Сегодня</div>
            <div class="chat__room--text recive">
              Добрый день! Задайте ваш вопрос, мы всегда рады помочь
              <span>14:30</span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:30</span>
            </div>
            <div class="chat__room--text send">
              Добрый день! подскажите, пожалуйста. Я оплатил телефон, но деньги до сих пор не пришли
              на счет
              <span>14:31 <img src="@/assets/icons/doubletick.svg" alt="" /></span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:31</span>
            </div>
            <div class="chat__room--day">Сегодня</div>
            <div class="chat__room--text recive">
              Добрый день! Задайте ваш вопрос, мы всегда рады помочь
              <span>14:30</span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:30</span>
            </div>
            <div class="chat__room--text send">
              Добрый день! подскажите, пожалуйста. Я оплатил телефон, но деньги до сих пор не пришли
              на счет
              <span>14:31 <img src="@/assets/icons/doubletick.svg" alt="" /></span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:31</span>
            </div>
            <div class="chat__room--day">Сегодня</div>
            <div class="chat__room--text recive">
              Добрый день! Задайте ваш вопрос, мы всегда рады помочь
              <span>14:30</span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:30</span>
            </div>
            <div class="chat__room--text send">
              Добрый день! подскажите, пожалуйста. Я оплатил телефон, но деньги до сих пор не пришли
              на счет
              <span>14:31 <img src="@/assets/icons/doubletick.svg" alt="" /></span>
            </div>
            <div class="chat__room--text recive">
              Одну минуту, уточняем информацию
              <span>14:31</span>
            </div>
          </div>
        </div>
        <form class="chat__room--form">
          <input type="text" class="chat__input" placeholder="Сообщение" />
          <button type="submit" class="chat__room--submit">
            <img src="@/assets/icons/send.svg" alt="send" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
