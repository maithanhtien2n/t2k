<template>

    <div @click="handleDots" class="fas fa-ellipsis">
        <div v-if="isOpen2" class="fa__ellipsis__funtion">
            <h3 @click="handleUpdatePosts">Sửa bài viết</h3>
            <h3 @click="handleDeletePosts(postsListItem1.id)">Xóa bài viết</h3>
        </div>
    </div>

    <app-modal :isOpen="isUpdatePosts" :handleClose="handleCloseUpdatePosts">
        <AppModalUpdatePosts :postsListItem2="postsListItem1"></AppModalUpdatePosts>
    </app-modal>

</template>

<script>
import AppModalUpdatePosts from './AppModalUpdatePosts.vue'
import AppModal from './AppModal.vue';
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers("posts")
export default {
    data() {
        return {
            isUpdatePosts: false,
        }
    },
    components: {
        AppModal,
        AppModalUpdatePosts,
    },
    props: {
        isOpen2: {
            type: Boolean,
        },
        handleDots2: {
            type: Function,
        },
        postsListItem1: {
            type: Object
        }
    },
    methods: {
        handleDots() {
            this.handleDots2();
        },
        handleUpdatePosts() {
            this.isUpdatePosts = true;
        },
        handleCloseUpdatePosts() {
            this.isUpdatePosts = false;
        },
        ...mapActions({
            handleDeletePosts: "removePostsAction",
        }),

    }
}
</script>

<style>
</style>