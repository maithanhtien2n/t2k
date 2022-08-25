<template>

    <div v-for="(commentListItem, index) in postsList0.commentList" :key="index"
        class="section__container__posts__mini__section2__comment__list">

        <img src="https://shopt2k.000webhostapp.com/image/user.jpg" alt="">

        <div class="section__container__posts__mini__section2__comment__list__content">

            <h3><a href="#">Tiện Thanh</a></h3>
            <p>{{ commentListItem.commentItem }}</p>

            <div class="fas fa-xmark"></div>

        </div>

    </div>

</template>

<script>
export default {
    props: {
        postsList0: {
            type: Object,
        }
    }
}
</script>

<style>
</style>