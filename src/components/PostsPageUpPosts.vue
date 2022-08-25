<template>

    <div @click="handleOpenUpPosts" class="section__container__posts__mini__section1">
        <div class="fas fa-plus"></div>
        <h4>Đăng bài</h4>
    </div>

    <app-modal :isOpen="isUpPosts" :handleClose="handleCloseUpPosts">
        <AppModalUpPosts @handleCloseUpPosts="handleCloseUpPosts"></AppModalUpPosts>
    </app-modal>

</template>

<script>
import AppModalUpPosts from './AppModalUpPosts.vue'
export default {
    data() {
        return {
            isUpPosts: false,
        };
    },
    methods: {
        handleOpenUpPosts() {
            this.isUpPosts = true;
        },
        handleCloseUpPosts() {
            this.isUpPosts = false;
        },
    },
    components: {
        AppModalUpPosts,
    }
}
</script>

<style>
</style>