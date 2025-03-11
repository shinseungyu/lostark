document.addEventListener(`DOMContentLoaded`, function () {
    const navItems = document.querySelectorAll(`.section4-nav li`);
    const photo = document.querySelector(`.photo`);

    // 호버하면 이미지 변경
    for (const item of navItems) {

        item.addEventListener(`mouseenter`, function () {
            const changeImage = item.getAttribute(`data-image`);
            photo.style.backgroundImage = `url(${changeImage})`
        });

        item.addEventListener(`mouseleave`, function () {
            photo.style.backgroundImage = ``
        });
    }
    // -------------------------------------휠내리면 헤더부분 그냥 올리면 삼키듯
    window.addEventListener(`wheel`, (event) => {
        const headerArea = document.querySelector(`.header-area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }
    });
    const leftMenu = document.querySelector(`.header-area`);
    // --------------------------------------------헤더 호버하면 opacity1
    const submenuTab = document.querySelectorAll(`.left-menu li`);
    const submenuBox = document.querySelector(`.sub-menu-box`);

    for (const li of submenuTab) {
        li.addEventListener(`mouseenter`, function () {
            submenuBox.classList.add(`move`);
            submenuBox.classList.add(`move`);
        });

    }

    // 서브메뉴박스에 마우스리브되면 서브메뉴박스 active 제거
    submenuBox.addEventListener(`mouseleave`, function () {
        this.classList.remove(`move`);
    });

    // ----------------------------------------

    // ----------------------------------------------------
    // var swiper = new Swiper(".mySwiper", {
    //     loop: true,
    //     pagination: true,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });
    let swiper = undefined;

    function initSwiper() {
        //윈도우 너비값을 변수에 저장
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1100 && swiper == undefined) {
            // swiper
            swiper = new Swiper(".mySwiper", {
                loop: true,
                pagination: true,
                
                
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } else if (windowWidth < 1100 && swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
        }
    }

    // 함수 전역 호출
    initSwiper();

    // 윈도우가 리사이즈 될때 스와이퍼 자동 반응 설정
    window.addEventListener(`resize`, () => {
        initSwiper();
    });












    //   -----------------------------------------------------
    const buttons = document.querySelectorAll(`.section3-img-box div`);

    //    클릭하면 비디오 변경
    for (const btn of buttons) {
        btn.addEventListener(`click`, function () {
            this.classList.add(`active`);
            for (const siblings of buttons) {
                if (siblings !== this) {
                    siblings.classList.remove(`active`);
                }
            }
            const tab = this.getAttribute(`data-tab`);
            const tabBox = document.querySelectorAll(`.section3-right-box div`);
            for (const tabContent of tabBox) {
                tabContent.classList.remove(`active`);
            }
            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);
        });
    }
    // ------------------------------------------------
    const menuBtn = document.querySelector(`#hamburger`);
    const mainMenu = document.querySelector(`.left-menu`);

    menuBtn.addEventListener(`click`, function () {
        this.classList.toggle(`active`);

        //contains 활용해서 메인메뉴를 메뉴 버튼 active가 있을때 추가 아니면 제거
        const hasClass = this.classList.contains(`active`);

        if (hasClass) {
            mainMenu.classList.add(`active`);
        } else {
            mainMenu.classList.remove(`active`);
        }
    });




    





});