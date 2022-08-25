<template>

    <div class="section__container__home">

        <!-- Phần section 1 -->
        <div class="section1">

            <div class="section1__text">
                <div class="section1__text__content">
                    <h5>Hello!</h5>
                    <h3>I'm Tien Thanh</h3>
                    <p>Những devloper nổi tiếng đều gặp phải những vấn đề nan giải cho đến khi họ giải quyết được nó...
                    </p>
                    <div class="section1__text-gach"></div>
                    <button class="section1__text__btn">Hire me</button>
                </div>
            </div>

            <div class="section1__img">
                <img src="https://shopt2k.000webhostapp.com/image/bannerUser.png" alt="">
            </div>

        </div>

        <!-- Phần section 2 -->
        <div class="section2">

            <div class="section2__img">
                <div class="section2__img__container">
                    <img src="https://shopt2k.000webhostapp.com/image/imgSection2.jpg" alt="">
                </div>

                <div class="section2__img__content">
                    <h3>MAI THANH TIỆN</h3>
                    <p>Front End Developers</p>
                </div>
            </div>

            <div class="section2__gach"></div>

            <div class="section2__text">
                <ul>
                    <li>
                        <i class="fa-solid fa-calendar-days"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Ngày sinh</h5>
                            <p>06/12/2000</p>
                        </div>
                    </li>

                    <li>
                        <i class="fa-solid fa-user"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Giới tính</h5>
                            <p>Nam</p>
                        </div>
                    </li>

                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Điện thoại</h5>
                            <p>(+84) 0366162465</p>
                        </div>
                    </li>

                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Email</h5>
                            <p>maithanhtien2n@gmail.com</p>
                        </div>
                    </li>

                    <li>
                        <i class="fa-brands fa-facebook"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Fanpage</h5>
                            <p>https://www.facebook.com/t2kgamer</p>
                        </div>
                    </li>

                    <li>
                        <i class="fa-solid fa-house-user"></i>
                        <div class="section2__text__ngaySinh">
                            <h5>Địa chỉ</h5>
                            <p>68 Nguyễn Chí Thanh, Phường 7, TP. Tuy Hòa, Phú Yên</p>
                        </div>
                    </li>

                </ul>
            </div>

        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style>
/* ---Phần section 1--- */
.section1 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    overflow: hidden;
    background-color: var(--BgColor);
    margin-top: 64px;
}

/* Phần văn bản */
.section1__text {
    width: 50%;
    display: flex;
    justify-content: center;
}

.section1__text__content {
    width: 75%;
    padding: 0 1rem;
}

.section1__text__content h5 {
    font-size: 3rem;
    color: var(--BtnColor);
}

.section1__text__content h3 {
    font-size: 5rem;
}

.section1__text__content p {
    font-size: 2rem;
    margin-top: 20px;
    line-height: 3rem;
}

.section1__text-gach {
    width: 40px;
    height: 3px;
    background-color: var(--FontColor);
    margin: 2rem 0;
}

.section1__text__content button {
    width: 130px;
    height: 40px;
    background-color: var(--BtnColor);
    border: none;
    border-radius: 30px;
    font-size: 17px;
    font-weight: bold;
    color: var(--while);
    cursor: pointer;
    transition: all 0.2s ease;
}

.section1__text__content button:hover {
    background-color: transparent;
    border: 1px solid var(--BtnColor);
    color: var(--BtnColor);
}

/* Phần hình ảnh */
.section1__img {
    width: 50%;
    height: 700px;
    text-align: center;
}

.section1__img img {
    height: 100%;
}

/* ---Phần section 2--- */
.section2 {
    width: 100%;
    display: flex;
    padding: 70px 0;
}

/* Phần hình ảnh */
.section2__img {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid var(--FontColor);
    align-items: center;
}

.section2__img__container {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    border: 7px solid var(--BtnColor);
}

.section2__img__container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.5);
    margin-left: 30px;
}

.section2__img__content {
    margin-top: 20px;
    color: var(--FontColor);
    text-align: center;
}

.section2__img__content h3 {
    font-size: 27px;
}

.section2__img__content p {
    font-size: 17px;
    font-weight: 610;
}

/* Phần văn bản */
.section2__text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid var(--FontColor);
}

.section2__text ul li {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    color: var(--FontColor);
}

.section2__text ul li>i {
    font-size: 30px;
    margin-right: 20px;
}

.section2__text ul li h5 {
    font-size: 17px;
}

.section2__text ul li p {
    font-size: 15px;
}

/* Tùy chỉnh kích thước màn hình cho từng thiết bị */

/* -Máy tính bản */
@media only screen and (max-width: 1280px) {

    /* Phần section 1 */
    .section1 {
        padding-top: 35px;
    }

    .section1__text__content h2,
    h3 {
        font-size: 4rem;
    }
}

@media only screen and (max-width: 1027px) {

    /* Phần section 1 */
    .section1 {
        flex-wrap: wrap-reverse;
        padding-top: 30px;
    }

    .section1__text {
        width: 100%;
        padding: 2rem 0;
    }

    .section1__text__content {
        width: 80%;
        padding: 0 2rem;
    }

    .section1__img {
        width: 100%;
    }

    .section1__img img {
        height: 100%;
        object-fit: cover;
    }

    /* Phần section 2 */
    .section2 {
        flex-wrap: wrap;
    }

    .section2__img {
        width: 100%;
        border-right: 4px solid var(--FontColor);
        align-items: center;
    }

    .section2__gach {
        width: 70px;
        height: 4px;
        background-color: var(--FontColor);
        margin: 40px auto;
    }

    .section2__text {
        width: 100%;
        border-left: 4px solid var(--FontColor);
        padding: 0 2rem;
    }

}

@media only screen and (max-width: 663px) {

    /* Phần section 1 */
    .section1 {
        padding-top: 45px;
    }

    .section1__text__content {
        width: 100%;
    }

    .section1__img {
        height: 500px;
    }

    .section1__text__content h3 {
        font-size: 4rem;
    }

    .section1__text__content p {
        font-size: 17px;
    }

    /* Phần section 2 */
    .section2__img {
        width: 100%;
        border-right: 4px solid var(--FontColor);
        padding: 0 2rem;
    }

    .section2__img__container {
        width: 100%;
        height: 75%;
    }


    .section2__text {
        width: 100%;
        border-left: 4px solid var(--FontColor);
    }

}

@media only screen and (max-width: 450px) {

    html {
        font-size: 60%;
    }

    /* Phần section 1 */
    .section1__text__content h2,
    h3 {
        font-size: 3.5rem;
    }

}
</style>