<template>

    <!-- Phần footer -->
    <footer class="footer">

        <div class="footer__logo">
            <img src="https://shopt2k.000webhostapp.com/image/logoFooter.png" alt="">
            <p>@2022 Copyright by T2K</p>
        </div>

        <div class="footer__col1">
            <ul>
                <li>
                    <i class="fa-solid fa-house-user"></i>
                    <div class="section2__text__ngaySinh">
                        <p>68 Nguyễn Chí Thanh, Phường 7, TP. Tuy Hòa, Phú Yên</p>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <div class="section2__text__ngaySinh">
                        <p>(+84) 0366162465</p>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    <div class="section2__text__ngaySinh">
                        <p>maithanhtien2n@gmail.com</p>
                    </div>
                </li>
                <li>
                    <i class="fa-brands fa-facebook"></i>
                    <div class="section2__text__ngaySinh">
                        <p>https://www.facebook.com/t2kgamer</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="footer__col2">
            <h3>VỀ CHÚNG TÔI</h3>
            <ul>
                <li>Giới thiệu</li>
                <li>Chính sách</li>
                <li>Liên hệ</li>
            </ul>
        </div>

        <div class="footer__col3">
            <h3>KẾT NỐI VỚI TÔI</h3>
            <ul>
                <li><i class="fa-brands fa-youtube"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li class="cuoi"><i class="fa-brands fa-instagram"></i></li>
            </ul>
        </div>

        <div class="footer__end">
            <p>@Thiết kế bởi Tiện Thanh!</p>
        </div>

    </footer>

</template>

<script>
export default {

}
</script>

<style>
/* ---Phần footer--- */
.footer {
    display: flex;
    justify-content: space-around;
    padding: 70px 2rem;
    background-color: var(--FontColor);
    position: relative;
    flex-wrap: wrap;
    position: relative;
    z-index: 90;
}

/* Phần logo */
.footer__logo {
    margin-right: 4rem;
}

.footer__logo img {
    width: 200px;
}

.footer__logo p {
    color: var(--whileNhac);
    font-size: 13px;
    margin-left: 53px;
}

/* Phần cột 1 */
.footer__col1 ul li {
    font-size: 1.7rem;
    display: flex;
    color: var(--whileNhac);
    align-items: center;
    margin-bottom: 1rem;
    margin-right: 4rem;
}

.footer__col1 ul li>i {
    margin-right: 10px;
}

/* Phần cột 2 */
.footer__col2 h3 {
    font-size: 2rem;
    color: var(--while);
    margin-right: 4rem;
}

.footer__col2 ul {
    margin-top: 2rem;
}

.footer__col2 ul li {
    font-size: 1.7rem;
    padding-top: 1rem;
    color: var(--whileNhac);
}

/* Phần cột 3 */
.footer__col3 h3 {
    font-size: 2rem;
    color: var(--while);
}

.footer__col3 ul {
    display: flex;
    margin-top: 3rem;
}

.footer__col3 ul li {
    font-size: 2rem;
    color: var(--whileNhac);
    margin-right: 1rem;
}

/* Phần footer end */
.footer__end {
    position: absolute;
    bottom: 10px;
    color: var(--while);
    font-size: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-user-select: none;
    user-select: none;
}



/* Tùy chỉnh kích thước màn hình cho từng thiết bị */

/* -Máy tính bản */
@media only screen and (max-width: 1280px) {

    /* ---Phần footer--- */

    .footer__col2 ul {
        margin-top: 0rem;
    }

    .footer__col3 ul {
        margin-top: 1rem;
    }

}

@media only screen and (max-width: 1027px) {

    html {
        font-size: 58%;
    }

    /* ---Phần footer--- */
    .footer {
        padding: 30px 2rem;
        justify-content: flex-start;
    }

    .footer__logo,
    .footer__col1,
    .footer__col2,
    .footer__col3 {
        margin-top: 30px;
    }

}

@media only screen and (max-width: 663px) {

    html {
        font-size: 57%;
    }

    /* ---Phần footer--- */
    .footer {
        justify-content: flex-start;
    }

    .footer__logo {
        margin-top: 0px;
    }

    .footer__logo img {
        width: 100px;
    }

    .footer__logo p {
        margin-left: 0;
    }

}

@media only screen and (max-width: 450px) {

    html {
        font-size: 53%;
    }

}
</style>