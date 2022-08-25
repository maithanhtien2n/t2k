<template>

    <div class="section__container__posts__mini__section2__comment">

        <img src="https://shopt2k.000webhostapp.com/image/user.jpg" alt="">

        <div class="section__container__posts__mini__section2__comment_content">
            <input type="text" placeholder="Viết bình luận..." v-model="commentList.comment">
            <i @click="handleSendComment(commentList)" class="fa-solid fa-caret-right"></i>
        </div>

    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers("posts")
export default {
    data() {
        return {
            commentList: {
                comment: "",
            }
        }
    },
    methods: {
        ...mapActions({
            handleSendComment: "sendCommentAction"
        })
    }
}
</script>

<style>
</style>