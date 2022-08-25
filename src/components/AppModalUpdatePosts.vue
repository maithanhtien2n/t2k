<template>

    <div class="modal__app__container__header">
        <h3>Sửa bài viết</h3>
    </div>

    <div class="modal__app__container__body">

        <div class="modal__app__container__body__user">
            <img src="https://shopt2k.000webhostapp.com/image/user.jpg" alt="">
            <h3>Tiện Thanh</h3>
        </div>

        <div class="modal__app__container__body__caption">
            <input type="text" placeholder="Hôm nay có gì vui?" v-model="posts.caption">
        </div>

        <div class="modal__app__container__body__addImg">

            <div class="modal__app__container__body__addImg__text">
                <h3>Thêm ảnh vào bài viết</h3>
                <i class="fa-solid fa-image"></i>
            </div>

            <input type="search" placeholder="Nhập link ảnh vào..." v-model="posts.img">

        </div>

    </div>

    <div @click="handleCloseUpPosts" class="modal__app__container__footer">
        <button @click="handleUpdatePosts(posts)">Lưu</button>
    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers("posts")
export default {
    data() {
        return {
            posts: {
                caption: "",
                img: "",
            },
        };
    },
    props: {
        postsListItem2: {
            type: Object,
        }
    },
    methods: {
        handleCloseUpPosts() {
            this.$emit("handleCloseUpPosts");
        },
        ...mapActions({
            handleUpdatePosts: "setUpdatePostsAction",
        })
    },
    created() {
        this.posts = { ...this.postsListItem2 };
    }
};
</script>

<style>
</style>