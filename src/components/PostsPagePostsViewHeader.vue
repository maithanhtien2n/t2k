<template>

    <div class="section__container__posts__mini__section2__header">

        <div class="section__container__posts__mini__section2__header__user">
            <img src="https://shopt2k.000webhostapp.com/image/user.jpg" alt="">
            <h3><a href="#">Tiện Thanh</a></h3>
        </div>

        <PostsPagePostsViewHeaderFuntion :isOpen2="isOpen1" :handleDots2="handleDots1" :postsListItem1="postsListItem0">
        </PostsPagePostsViewHeaderFuntion>

    </div>

</template>

<script>
import PostsPagePostsViewHeaderFuntion from './PostsPagePostsViewHeaderFuntion.vue'
export default {
    props: {
        isOpen1: {
            type: Boolean,
        },
        handleDots1: {
            type: Function,
        },
        postsListItem0: {
            type: Object
        }
    },
    components: {
        PostsPagePostsViewHeaderFuntion,
    }
}
</script>

<style>
</style>