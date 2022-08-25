<template>

    <div v-if="isOpen" class="modal__app" @click="handleCloseUpPosts">
        <div class="modal__app__container" @click.stop>

            <div @click="handleCloseUpPosts" class="fas fa-xmark"></div>

            <slot></slot>

        </div>
    </div>

</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
        },
        handleClose: {
            type: Function,
        },
    },
    methods: {
        handleCloseUpPosts() {
            this.handleClose();
        }
    }
}
</script>

<style>
:root {
    --FontColor: #152742;
    --while: #fff;
    --whileNhac: rgb(238, 238, 238);
    --xamColor: #65676B;
    --BtnColor: #0bb3e4;
    --BgColor: #ebeef3;
    --BgPosts: #F0F2F5;
}

.modal__app {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
    display: flex;
}

.modal__app__container {
    width: 500px;
    height: auto;
    background-color: var(--while);
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
    border-radius: 20px;
    position: relative;
    padding-bottom: 20px;
}

.modal__app__container .fa-xmark {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 25px;
    color: var(--FontColor);
    padding: 5.5px 10px;
    border-radius: 50%;
    background-color: #15274215;
    transition: all 0.2s ease;
    cursor: pointer;
}

.modal__app__container .fa-xmark:hover {
    background-color: #15274221;
}

/* Phần header */
.modal__app__container__header {
    text-align: center;
    border-bottom: 1px solid #15274238;
}

.modal__app__container__header h3 {
    font-size: 20px;
    padding: 17px 0;
}

/* Phần body */
.modal__app__container__body {
    padding: 15px 2rem;
}

/* - Phần user */
.modal__app__container__body__user {
    display: flex;
    align-items: center;
}

.modal__app__container__body__user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
}

.modal__app__container__body__user h3 {
    font-size: 15px;
    color: var(--FontColor);
}

/* - Phần caption */
.modal__app__container__body__caption {
    width: 100%;
    height: 40px;
    background-color: rebeccapurple;
    margin-top: 10px;
}

.modal__app__container__body__caption input {
    width: 100%;
    height: 40px;
    font-size: 17px;
    border: none;
}

/* - Phần thêm ảnh */
.modal__app__container__body__addImg {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    border: 1px solid #15274244;
    border-radius: 10px;
}

.modal__app__container__body__addImg__text {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.modal__app__container__body__addImg__text h3 {
    font-size: 15px;
    color: var(--FontColor);
    margin-right: 5px;
}

.modal__app__container__body__addImg__text i {
    font-size: 20px;
    color: var(--FontColor);
}

.modal__app__container__body__addImg input {
    flex: 1;
    height: 30px;
    font-size: 15px;
    color: var(--FontColor);
    border: none;
}

/* - Phần footer */
.modal__app__container__footer {
    padding: 0 2rem;
}

.modal__app__container__footer button {
    width: 100%;
    height: 40px;
    border: none;
    background-color: var(--FontColor);
    color: var(--while);
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.modal__app__container__footer button:hover {
    background-color: #122036;
}

@media only screen and (max-width: 500px) {

    .modal__app__container__body__addImg__text h3 {
        display: none;
    }

    .modal__app__container__body__addImg input {
        width: 30%;
    }

}
</style>