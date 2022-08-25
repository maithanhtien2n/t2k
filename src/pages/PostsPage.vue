<template>

    <!-- Phần section posts container -->
    <div class="section__container__posts">
        <div class="section__container__posts__mini">

            <PostsPageUpPosts></PostsPageUpPosts>

            <h3 class="section__container__posts__mini__caption">Posts</h3>

            <PostsPagePostsView :isOpen0="isOpen" :handleDots0="handleDots">
            </PostsPagePostsView>

            <div @click="handleCloseDots" class="section__container__posts__mini__close"></div>

        </div>
    </div>

</template>

<script>
import PostsPageUpPosts from '../components/PostsPageUpPosts.vue'
import PostsPagePostsView from '../components/PostsPagePostsView.vue'
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        handleCloseDots() {
            this.isOpen = false;
        },
        handleDots() {
            this.isOpen = true;
        },
    },
    components: {
        PostsPageUpPosts,
        PostsPagePostsView,
    }
}
</script>

<style>
/* Phần posts */
.section__container__posts {
    max-width: 100%;
    min-height: 80vh;
    background-color: var(--BgPosts);
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 2rem;
}

.section__container__posts__mini {
    max-width: 700px;
    margin: 0 auto;
}

/* - Phần section 1 */
.section__container__posts__mini__section1 {
    width: 130px;
    display: flex;
    border: 2px solid var(--FontColor);
    color: var(--FontColor);
    font-size: 1.7rem;
    justify-content: center;
    padding: 1rem;
    border-radius: 20px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    z-index: 77;
    transition: all 0.2s ease;
}

.section__container__posts__mini__section1:hover {
    background-color: var(--FontColor);
    color: var(--while);
}

.section__container__posts__mini__section1>.fa-plus {
    margin-right: 1rem;
}

/* Chữ bài viết */
.section__container__posts__mini__caption {
    font-size: 2rem;
    color: var(--FontColor);
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
}

/* Phần section 2 */
.section__container__posts__mini__section2 {
    width: 100%;
    background-color: var(--while);
    padding: 1rem 0;
    border-radius: 10px;
    color: var(--FontColor);
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}

/* - Phần header */
.section__container__posts__mini__section2__header {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}

.section__container__posts__mini__section2__header__user {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 77;
}

.section__container__posts__mini__section2__header__user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
}

.section__container__posts__mini__section2__header__user h3 {
    font-size: 15px;
    padding: 0 !important;
}

.section__container__posts__mini__section2__header .fa-ellipsis {
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    z-index: 88;
    -webkit-user-select: none;
    user-select: none;
}

.section__container__posts__mini__section2__header .fa-ellipsis:hover {
    background-color: #1527420e;
}

/* Hiện */
.fa__ellipsis__funtion {
    position: absolute;
    top: 120%;
    right: 0;
    width: 150px;
    height: 160px;
    background-color: var(--while);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px 0;
    line-height: 40px;
    border-radius: 10px;
    padding: 10px;
}

.fa__ellipsis__funtion>h3 {
    font-size: 15px;
    border-bottom: 1px solid #15274231;
    text-indent: 10px;
    border-radius: 10px;
    transition: all 0.2s ease;
}

.fa__ellipsis__funtion>h3:hover {
    background-color: #15274217;
}

/* Tắt */
.section__container__posts__mini__close {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
}

/* -Phần body */
.section__container__posts__mini__section2__body {
    margin-top: 20px;
    position: relative;
    z-index: 77;
}

.section__container__posts__mini__section2__body p {
    font-size: 15px;
    padding: 0 2rem;
}

.section__container__posts__mini__section2__body__img {
    width: 100%;
    height: 700px;
    margin-top: 10px;
}

.section__container__posts__mini__section2__body__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* - Phần footer */
.section__container__posts__mini__section2__footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    font-size: 20px;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    z-index: 77;
}

.section__container__posts__mini__section2__footer i {
    cursor: pointer;
}

.section__container__posts__mini__section2__footer__icon i {
    margin-right: 20px;
    cursor: pointer;
}

.section__container__posts__mini__section2__parameter {
    display: flex;
}

.section__container__posts__mini__section2__parameter>h3 {
    font-size: 15px;
    padding: 0 2rem;
}

/* - Phần comment */
.section__container__posts__mini__section2__comment {
    display: flex;
    margin-top: 2rem;
    padding: 0 2rem;
    align-items: center;
    position: relative;
    z-index: 77;
}

.section__container__posts__mini__section2__comment img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 1rem;
}

.section__container__posts__mini__section2__comment_content {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 10px;
    border: 1px solid var(--FontColor);
}

.section__container__posts__mini__section2__comment_content input {
    width: 100%;
    height: 90%;
    border: none;
    font-size: 15px;
}

.section__container__posts__mini__section2__comment_content .fa-caret-right {
    font-size: 30px;
    cursor: pointer;
}

/* Phần comment list */
.section__container__posts__mini__section2__comment__list {
    display: flex;
    margin: 0 2rem;
    margin-top: 1rem;
    position: relative;
    z-index: 77;
}

.section__container__posts__mini__section2__comment__list img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
}

.section__container__posts__mini__section2__comment__list__content {
    padding: 10px;
    background-color: #F0F2F5;
    border-radius: 10px;
    position: relative;
}

.section__container__posts__mini__section2__comment__list__content h3 {
    font-size: 13px;
    color: var(--FontColor);
}

.section__container__posts__mini__section2__comment__list__content>p {
    font-size: 13px;
    margin-top: 5px;
}

.section__container__posts__mini__section2__comment__list__content .fa-xmark {
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    font-size: 13px;
    cursor: pointer;
    padding: 5px 7px;
    border-radius: 50%;
    color: var(--FontColor);
    transition: all 0.1s ease;
}

.section__container__posts__mini__section2__comment__list__content .fa-xmark:hover {
    background-color: #15274215;
}


/* -Máy tính bản */
@media only screen and (max-width: 1280px) {

    /* Phần posts */
    .section__container__posts {
        padding-top: 150px;
    }

    /* Phần section 2 - body */
    .section__container__posts__mini__section2__body__img {
        height: 600px;
    }
}


@media only screen and (max-width: 700px) {

    /* - Phần section 1 */
    .section__container__posts__mini__section1 {
        margin-left: 2rem;
    }

}

@media only screen and (max-width: 600px) {

    /* Phần section 2 - body */
    .section__container__posts__mini__section2__body__img {
        height: 500px;
    }
}

@media only screen and (max-width: 450px) {

    html {
        font-size: 60%;
    }

    /* Phần section 2 - body */
    .section__container__posts__mini__section2__body__img {
        height: 400px;
    }
}
</style>