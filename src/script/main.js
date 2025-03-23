import "../styles/reset.css";
import "../styles/loader.scss";
import "../styles/style.scss";

import { initTextAnimation } from "./textAnimation.js";
import { initLoader } from "./loader.js";

// ローダーの初期化
initLoader();

const els = [...document.querySelectorAll(".anime-text")];
// テキストのアニメーションを行います。
// Performs text animation.
initTextAnimation(els);

const btn = document.querySelector(".header__menu__btn");
const navLinks = document.querySelector(".header__nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
    navLinks.classList.toggle("is-open");
});

//gsapアニメーション
gsap.set([".title", ".text", ".hero__text"], {
    y: 30,
    opacity: 0,
});
gsap.set(".header", {
    y: -50,
    opacity: 0,
});

gsap.set(".scroll", {
    x: 30,
    opacity: 0,
});

const tl = gsap.timeline();
tl.to(".title", {
    duration: 1,
    y: 10,
    opacity: 1,
    ease: "power1.out",
    stagger: 0.15,
})
    .to(
        ".text",
        {
            duration: 1,
            y: 10,
            opacity: 1,
            ease: "power1.out",
            stagger: 0.15,
        },
        "-=0.5"
    )
    .to(
        ".hero__text",
        {
            duration: 1,
            y: 10,
            opacity: 1,
            ease: "power1.out",
            stagger: 0.15,
        },
        "-=0.5"
    )
    .to(
        ".scroll",
        {
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "power1.out",
            stagger: 0.15,
        },
        "-=0.5"
    )
    .to(
        ".header",
        {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power1.out",
        },
        "<"
    );

// GSAPのScrollTriggerを使用してアニメーションを設定
gsap.registerPlugin(ScrollTrigger);

// 共通のアニメーション関数
function animateOnScroll(selector, duration = 1) {
    gsap.fromTo(
        selector,
        {
            y: 30,
            opacity: 0,
        },
        {
            duration: duration,
            y: 0,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: selector,
                start: "top 80%", // 要素の上部が画面の75%の位置に来たとき
                toggleActions: "play none none none", // アニメーションの再生アクションを変更
                once: true, // 一度だけアニメーションを実行
            },
        }
    );
}

// アニメーションを適用する要素
animateOnScroll(".about__content__title");
animateOnScroll(".icon");
animateOnScroll(".about__content__text");
