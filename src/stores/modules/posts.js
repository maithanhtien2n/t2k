const state = function () {
    return {
        postsList: [
            {
                id: 1,
                caption: "Hôm nay trời đẹp quá!",
                img: "https://shopt2k.000webhostapp.com/image/imgSection2.jpg",
                love: 9,
                commentList: [
                    {
                        id: 1,
                        commentItem: "Ảnh đẹp quá nhỉ kkk?"
                    },
                ]
            },
        ],
    };
};

const mutations = {
    upPostsMutation(state, payload) {
        state.postsList.unshift(payload);
        console.log(payload);
    },
    updatePostsMutation(state, payload) {
        const index = state.postsList.findIndex((user) => user.id === payload.id);
        if (index !== -1) {
            state.postsList[index] = payload;
        } else {
            alert('Không tìm thấy id phù hợp');
        }
    },
    removePostsMutation(state, payload) {
        const index = state.postsList.findIndex((user) => user.id === payload);
        if (index !== -1) {
            state.postsList.splice(index, 1);
        } else {
            alert('Không tìm thấy id phù hợp');
        }
    },
    loveMutation(state, payload) {
        const index = state.postsList.findIndex((user) => user.id === payload);
        if (index !== -1) {
            state.postsList[index].love++
        } else {
            alert('Không tìm thấy id phù hợp');
        }
    },
    sendCommentMutation(state, payload) {
        state.postsList[0].commentList.unshift( );
    }
}

const actions = {
    setUpPostsAction(context, payload) {
        const newPosts = { ...payload, id: Math.random() };
        context.commit("upPostsMutation", newPosts);
    },
    setUpdatePostsAction(context, payload) {
        context.commit("updatePostsMutation", payload);
    },
    removePostsAction(context, payload) {
        context.commit("removePostsMutation", payload);
    },
    setLoveAction(context, payload) {
        context.commit("loveMutation", payload);
    },
    sendCommentAction(context, payload) {
        const newComment = { ...payload, id: Math.random() };
        context.commit("sendCommentMutation", newComment);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}