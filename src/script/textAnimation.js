/**
 *　テキストをアニメーションさせるための前処理（文字列を分割する）
 * Preprocessing for animating text (splitting the string)
 */
export function initTextAnimation(els) {
    els.forEach((el) => {
        // 何回も文字列を分割しないように分割したテキストには splited クラスを付与
        // To avoid splitting the string multiple times, add the 'splited' class to the split text
        if (el.classList.contains("splited")) return; // すでにsplitedクラスを持っている場合は処理をスキップ. Skip the process if the 'splited' class is already present
        el.classList.add("splited"); // splitedクラスを追加. Add the splited class
        el.innerHTML = splitText(el);
    });
}

function splitText(el) {
    // 前後の空白を取り除いた上で、一文字ずつの配列にする.
    // Remove leading and trailing whitespace and convert to an array of one character each.
    const chars = el.textContent.trim().split("");
    return chars.reduce((acc, curr) => {
        // 文字が空白文字（スペースやタブなど）の場合、HTMLの空白文字表現&nbsp;に置き換える
        // If the character is a whitespace character (space or tab, etc.), replace it with the HTML whitespace representation &nbsp;
        curr = curr.replace(/\s+/, "&nbsp;");
        return `${acc}<span class="char">${curr}</span>`; // 一文字ずつ<span>タグでラップ. Wrap each character in a <span> tag
    }, "");
}
//     // 何回も文字列を分割しないように分割したテキストには splited クラスを付与
//     // To avoid splitting the string multiple times, add the 'splited' class to the split text
//     if (heroTitle.classList.contains("splited")) return; // すでにsplitedクラスを持っている場合は処理をスキップ. Skip the process if the 'splited' class is already present
//     heroTitle.classList.add("splited"); // splitedクラスを追加. Add the splited class
//     heroTitle.innerHTML = splitText(heroTitle);
// }

// function splitText(els) {
//     // 前後の空白を取り除いた上で、一文字ずつの配列にする.
//     // Remove leading and trailing whitespace and convert to an array of one character each.
//     const chars = hero__title.textContent.trim().split("");
//     return chars.reduce((acc, curr) => {
//         console.log(acc, curr);
//         // 文字が空白文字（スペースやタブなど）の場合、HTMLの空白文字表現&nbsp;に置き換える
//         // If the character is a whitespace character (space or tab, etc.), replace it with the HTML whitespace representation &nbsp;
//         curr = curr.replace(/\s+/, "&nbsp;");
//         return `${acc}<span class="char">${curr}</span>`; // 一文字ずつ<span>タグでラップ. Wrap each character in a <span> tag
//     }, "");
// }
