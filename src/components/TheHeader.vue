<template>

    <!-- Phần header -->
    <header class="header__container">

        <div class="header">

            <div @click="handleClickMenu" class="fas fa-bars"></div>

            <TheHeaderSearch></TheHeaderSearch>

            <nav class="header__navbar" :class="{ active: active }">
                <ul>
                    <div @click="handleCloseMenu" class="fas fa-xmark"></div>
                    <router-link class="chimuc__header" to="/home">Home</router-link>
                    <router-link class="chimuc__header" to="/posts">Posts</router-link>
                    <router-link class="chimuc__header" to="/personal">Personal</router-link>
                    <li class="iconMXH">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </nav>

            <div @click="handleCloseMenu" class="header__bgNavbar" :class="{ active: active }"></div>

            <TheHeaderUser></TheHeaderUser>

        </div>

    </header>

</template>

<script>
import TheHeaderSearch from './TheHeaderSearch.vue'
import TheHeaderUser from './TheHeaderUser.vue'
export default {
    data() {
        return {
            active: false,
        };
    },
    methods: {
        handleClickMenu() {
            this.active = true;
        },
        handleCloseMenu() {
            this.active = false;
        },
    },
    components: {
        TheHeaderSearch,
        TheHeaderUser,
    }
}
</script>

<style>
/* ---Phần header--- */

/* Active header */
.headerActive {
    border-bottom: 2px solid var(--FontColor);
    color: var(--FontColor) !important;
    padding: .5rem 0;
}

/* Phần header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--BtnColor);
    z-index: 777;
    -webkit-user-select: none;
    user-select: none;
}

.header .fa-bars {
    font-size: 25px;
    margin-right: 10px;
    color: var(--FontColor);
    display: none;
    cursor: pointer;
}

.header__search {
    display: flex;
    align-items: center;
}

.header__search__img>img {
    width: 110px;
    margin-right: 10px;
    cursor: pointer;
}

.header__search__input {
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border: 1px solid var(--FontColor)
}

.header__search__input input {
    width: 30rem;
    height: 40px;
    border: none;
    text-indent: 15px;
    font-size: 1.5rem;
    color: var(--FontColor);
}

.header__search__input .fa-search {
    font-size: 1.7rem;
    margin-left: 10px;
    color: var(--while);
    cursor: pointer;
    background-color: var(--FontColor);
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
}

.header__navbar>ul .fa-xmark {
    font-size: 20px;
    display: none;
    color: var(--FontColor);
    cursor: pointer;
}

.header__navbar>ul {
    display: flex;
    font-size: 1.8rem;
}

.header__navbar>ul>.chimuc__header {
    margin: 0 2rem;
    cursor: pointer;
    font-weight: 550;
    padding: .5rem 0;
    color: var(--while);
}

.header__navbar>ul>.chimuc__header:hover {
    color: var(--FontColor);
}

.header__navbar>ul>li.iconMXH {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--FontColor);
}

.header__navbar>ul>li.iconMXH>a>i {
    margin-right: 2rem;
    transition: all 0.2s ease;
}

.header__user {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.header__user>h3 {
    font-size: 1.5rem;
    color: var(--FontColor);
}

.header__user .fa-caret-down {
    font-size: 15px;
    margin: 5px;
}

.header__user__img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
}

.header__user__img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* -Máy tính bản */
@media only screen and (max-width: 1280px) {

    /* Header 1 */
    .header .fa-bars {
        display: block;
    }

    .header__search {
        position: relative;
    }

    .header__search__input {
        position: fixed;
        top: 63px;
        left: 0;
        right: 0;
        border-radius: 0px;
        padding: 1rem 2rem;
        background-color: var(--FontColor);
        z-index: 17;
        transition: all 0.2s ease;
    }

    .header__search__input.active {
        opacity: 0;
    }

    .header__search__input input {
        width: 100%;
        background-color: #fff;
    }

    .header__search__input .fa-search {
        color: var(--FontColor);
        background-color: var(--while);
    }

    .header__navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        height: 100%;
        transform: translateX(-100%);
        transition: all 0.1s ease;
        z-index: 999;
        background-color: #fff;
    }

    .header__navbar.active {
        transform: translateX(0%);
    }

    .header__bgNavbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.466);
        z-index: 888;
        display: none;
    }

    .header__bgNavbar.active {
        display: block;
    }

    .header__navbar ul {
        position: relative;
        flex-direction: column;
        padding-top: 50px;
        z-index: 999;
    }

    .header__navbar>ul .fa-xmark {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .header__navbar ul .chimuc__header {
        margin: 0;
        padding: 1rem 2rem;
        border-bottom: 1.4px solid #15274218;
        color: var(--FontColor);
    }

    .header__navbar>ul>li {
        margin: 0 2rem;
    }

    .header__navbar>ul>li.iconMXH>a>i {
        margin-right: 2rem;
        padding: 1rem 0;
    }

    .headerActive {
        background-color: var(--FontColor);
        color: var(--while) !important;
    }

}

@media only screen and (max-width: 663px) {

    /* Phần header */
    .header__search__img>img {
        width: 90px;
    }

    .header__search__input {
        top: 55px;
    }

}

@media only screen and (max-width: 450px) {

    html {
        font-size: 60%;
    }

    .header__search__input {
        top: 53px;
    }

}
</style>