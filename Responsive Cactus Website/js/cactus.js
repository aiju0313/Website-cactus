 /* =========================== 開閉メニュー =========================== */
 const navMenu = document.getElementById('nav-menu');
 const navToggle = document.getElementById('nav-toggle');
 const navClose = document.getElementById('nav-close');

 /* メニューを開く */
 if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
 }/* addEventListenerは、いわゆる発火イベント発生装置。クリックやキーボード入力、スクロールなどでイベントの処理を行う */

 /* メニューを閉じる */
 if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =========================== メニュークリック時に閉じる =========================== */
const navLink = document.querySelectorAll('.nav__link')/* 指定したセレクタに一致するすべてのHTML要素(NodeList)を取得するメソッド */

const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* constで"linkAction"という再代入不可の変数を作る
    "navMenu"という変数でnav-menuクラスを取得する
    取得した要素のクラスリストからshow-menuクラスを削除する

    foreach...の部分は、.nav__link クラスを持つすべての要素に対して、
    クリックイベントが発生した際に linkAction 関数が呼び出されるように設定する処理を行っている。*/





/* =========================== スクロール時にヘッダーをぼかす =========================== */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)/* よく分からんけど、これないと動かない */

/* =========================== スクロールアップ展開 =========================== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =========================== スクロールするとリンクの色が対応して変わる =========================== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                }
                else{
                    sectionsClass.classList.remove('active-link')
                }
    })
}
window.addEventListener('scroll', scrollActive)