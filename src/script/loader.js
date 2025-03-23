export function initLoader() {
    const loader = document.querySelector("#loader");
    // const fv = document.querySelector(".fv");
    const loaderPercent = document.querySelector(".loader-percent");
    // const hero = document.querySelector(".hero");
    // const parallaxBg = document.querySelector(".parallax-bg");

    // 初期状態で要素を非表示に
    // fv.style.opacity = "0";
    // hero.style.opacity = "0";
    // hero.style.transform = "translateY(30px)";

    // header部分と動画は最初から表示
    // parallaxBg.style.opacity = "1";

    let percent = 0;
    const interval = setInterval(() => {
        percent++;
        loaderPercent.textContent = `${percent}%`;
    }, 30);

    // ページの読み込みが完了したら実行
    window.addEventListener("load", () => {
        clearInterval(interval);
        loaderPercent.textContent = "100%";

        // ローディング完了後の処理
        loader.style.opacity = "0";
        // fv.style.opacity = "1";

        // heroのアニメーション
        // setTimeout(() => {
        //     hero.style.transition = "opacity 1s, transform 1s";
        //     hero.style.opacity = "1";
        //     hero.style.transform = "translateY(0)";
        // }, 500);

        // ローダーを完全に非表示に
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    });
}
