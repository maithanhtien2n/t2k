<template>

    <!-- Phần section personal container -->
    <div class="section__container__personal">
        <div class="section__container__personal__mini">

            <PersonalPageBanner></PersonalPageBanner>

            <PersonalPageInfo></PersonalPageInfo>

            <div class="section__container__personal__mini__title">
                <h3>Album Ảnh</h3>
            </div>

            <PersonalPageImgPosts></PersonalPageImgPosts>

        </div>
    </div>

</template>

<script>
import PersonalPageBanner from '../components/PersonalPageBanner.vue'
import PersonalPageInfo from '../components/PersonalPageInfo.vue'
import PersonalPageImgPosts from '../components/PersonalPageImgPosts.vue'
export default {
    components: {
        PersonalPageBanner,
        PersonalPageInfo,
        PersonalPageImgPosts,
    }
}
</script>

<style>
/* Phần personal */
.section__container__personal {
    padding-top: 57px;
}

.section__container__personal__mini {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
}

/* Phần banner */
.section__container__personal__mini__banner {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.section__container__personal__mini__banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.section__container__personal__mini__banner__updateImg {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    padding: 10px;
    background-color: var(--while);
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    color: var(--FontColor);
    transition: all 0.2s ease;
}

.section__container__personal__mini__banner__updateImg h3 {
    font-size: 13px;
    margin-left: 5px;
}

.section__container__personal__mini__banner__updateImg:hover {
    background-color: #f1f1f1;
}

.section__container__personal__mini__banner__updateImg i {
    font-size: 15px;
}

/* Phần info */
.section__container__personal__mini__info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 226, 226);
    align-items: center;
    margin: 0 2rem;
}

.section__container__personal__mini__info__left {
    display: flex;
    align-items: center;
}

.section__container__personal__mini__info__avatar {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 4px solid var(--while);
    position: relative;
    bottom: 30px;
    margin-right: 10px;
    position: relative;
}

.section__container__personal__mini__info__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.section__container__personal__mini__info__avatar__updateImg {
    position: absolute;
    padding: 7px;
    background-color: #e6e6e6;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    font-size: 20px;
    color: var(--FontColor);
    cursor: pointer;
}

.section__container__personal__mini__info__avatar__updateImg:hover {
    background-color: #dbdbdb;
}

.section__container__personal__mini__info__name-describe {
    color: var(--FontColor);
    max-width: 300px;
}

.section__container__personal__mini__info__name-describe h3 {
    font-size: 3rem;
}

.section__container__personal__mini__info__name-describe p {
    font-size: 1.7rem;
    margin-top: 10px;
}

.section__container__personal__mini__info__right {
    display: flex;
    align-items: flex-end;
}

.section__container__personal__mini__info__right__edit {
    display: flex;
    border: none;
    background-color: #e6e6e6;
    padding: 10px;
    color: var(--FontColor);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 15px;
}

.section__container__personal__mini__info__right__edit:hover {
    background-color: #D8DADF;
}

.section__container__personal__mini__info__right__edit i {
    margin-right: 5px;
}

/* Phần title */
.section__container__personal__mini__title h3 {
    font-size: 15px;
    margin-top: 40px;
    margin-left: 2rem;
    background-color: var(--FontColor);
    width: 110px;
    color: var(--while);
    text-align: center;
    padding: 10px;
    border-radius: 10px;
}

/* Phần Posts Img */
.section__container__personal__mini__posts {
    margin: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-self: start;
    padding: 0 2rem;
}

.section__container__personal__mini__posts__img {
    width: 30%;
    height: 300px;
    margin: 20px 0;
    cursor: pointer;
    overflow: hidden;
}

.section__container__personal__mini__posts__img:hover img {
    transform: scale(1.05);
}

.section__container__personal__mini__posts__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.7s ease;
}


/* Tùy chỉnh kích thước màn hình cho từng thiết bị */

/* -Máy tính bản */
@media only screen and (max-width: 830px) {

    .section__container__personal__mini__info {
        flex-direction: column;
        padding-bottom: 20px;
    }

    .section__container__personal__mini__info__left {
        height: 230px;
        flex-direction: column;
        text-align: center;
        padding-bottom: 20px;
        align-items: center;
        position: relative;
        top: -70px;
    }

    .section__container__personal__mini__info__avatar {
        bottom: 15px;
        position: relative;
    }

    /* Phần posts Img */
    .section__container__personal__mini__posts__img {
        width: 49%;
        height: 300px;
    }

}

@media only screen and (max-width: 500px) {

    /* Phần posts Img */
    .section__container__personal__mini__posts__img {
        width: 100%;
        height: 300px;
    }
}

@media only screen and (max-width: 600px) {

    .section__container__personal__mini__banner__updateImg h3 {
        display: none;
    }

    /* Phần banner */
    .section__container__personal__mini__banner {
        height: 350px;
    }

}

@media only screen and (max-width: 450px) {

    html {
        font-size: 60%;
    }

    /* Phần banner */
    .section__container__personal__mini__banner {
        height: 300px;
    }

}
</style>