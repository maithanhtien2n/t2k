import { createStore } from 'vuex'
import posts from './modules/posts';

const store = createStore({
    modules: {
        posts,
    },
});

export default store;