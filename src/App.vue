<template>

  <header>
    <TheHeader></TheHeader>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <TheFooter></TheFooter>
  </footer>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style>
:root {
  --FontColor: #152742;
  --while: #fff;
  --whileNhac: rgb(238, 238, 238);
  --xamColor: #65676B;
  --BtnColor: #0bb3e4;
  --BgColor: #ebeef3;
  --BgPosts: #F0F2F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  outline: none;
}

html {
  font-size: 62.5%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: var(--FontColor);
}

ul {
  list-style: none;
}


input,
button,
img {
  -webkit-user-select: none;
  user-select: none;
}

*::selection {
  background-color: var(--BtnColor);
  color: var(--FontColor);
}


/* Xử lý khi bấm vào nút 3 chấm trên posts */
/* Hiện */
/* .fa__ellipsis__funtion {
  display: none;
}

.fa__ellipsis__funtion.active {
  display: block;
} */

/* Xử lí khi ấn đăng bài */
.section__container__posts__modal__upPosts.active {
  display: none;
}

/* Xử lí khi ấn vào cập nhật ảnh bìa */
.section__container__personal__modal__updateImg.active {
  display: none;
}

/* Xử lý khi ấn vào ảnh */
.watch__photo.active {
  display: none;
}
</style>
