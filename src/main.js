import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import PostsPage from './pages/PostsPage.vue'
import PersonalPage from './pages/PersonalPage.vue'

import { createRouter, createWebHistory } from 'vue-router'
import store from './stores'
const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/personal',
        component: PersonalPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'headerActive',
})

import AppModal from './components/AppModal.vue'
const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store);
app.use(router);

app.mount('#app');
