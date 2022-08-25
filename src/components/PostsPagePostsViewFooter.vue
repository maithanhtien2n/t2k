<template>

    <div class="section__container__posts__mini__section2__footer">

        <div class="section__container__posts__mini__section2__footer__icon">
            <i @click="handleLove(postsList0.id)" class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>

        <i class="fa-regular fa-bookmark"></i>

    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers("posts")
export default {
    props: {
        postsList0: {
            type: Object,
        }
    },
    methods: {
        ...mapActions({
            handleLove: "setLoveAction"
        })
    }
}
</script>

<style>
</style>