<template>

    <div class="section__container__posts__mini__section2__body">

        <p>{{ postsList0.caption }}</p>

        <div class="section__container__posts__mini__section2__body__img">
            <img :src="postsList0.img" alt="">
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