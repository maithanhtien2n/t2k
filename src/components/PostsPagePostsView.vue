<template>

    <div v-for="(postsListItem, index) in postsList" :key="index" class="section__container__posts__mini__section2">

        <PostsPagePostsViewHeader :isOpen1="isOpen0" :handleDots1="handleDots0" :postsListItem0="postsListItem">
        </PostsPagePostsViewHeader>

        <PostsPagePostsViewBody :postsList0="postsListItem"></PostsPagePostsViewBody>

        <PostsPagePostsViewFooter :postsList0="postsListItem"></PostsPagePostsViewFooter>

        <PostsPagePostsViewPrameter :postsList0="postsListItem"></PostsPagePostsViewPrameter>

        <PostsPagePostsViewComment></PostsPagePostsViewComment>

        <PostsPagePostsViewCommentList :postsList0="postsListItem"></PostsPagePostsViewCommentList>
    </div>

</template>

<script>
import PostsPagePostsViewHeader from './PostsPagePostsViewHeader.vue'
import PostsPagePostsViewBody from './PostsPagePostsViewBody.vue'
import PostsPagePostsViewFooter from './PostsPagePostsViewFooter.vue'
import PostsPagePostsViewPrameter from './PostsPagePostsViewPrameter.vue'
import PostsPagePostsViewComment from './PostsPagePostsViewComment.vue'
import PostsPagePostsViewCommentList from './PostsPagePostsViewCommentList.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers("posts")
export default {
    components: {
        PostsPagePostsViewHeader,
        PostsPagePostsViewBody,
        PostsPagePostsViewFooter,
        PostsPagePostsViewPrameter,
        PostsPagePostsViewComment,
        PostsPagePostsViewCommentList,
    },
    props: {
        isOpen0: {
            type: Boolean,
        },
        handleDots0: {
            type: Function,
        },
        handleCloseDots0: {
            type: Function,
        }
    },
    computed: {
        ...mapState({
            postsList: (state) => state.postsList,
        }),
    },
}
</script>

<style>
</style>