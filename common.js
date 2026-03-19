// ページが読み込まれてから実行するための囲み
document.addEventListener('DOMContentLoaded', () => {

    // --- ハンバーガーメニューの制御 ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // メニューの要素が存在するページでのみ実行する（エラー防止）
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // アイコンの切り替えと背景スクロールの制御
            if (mobileMenu.classList.contains('hidden')) {
                hamburgerBtn.innerText = '☰';
                document.body.style.overflow = ''; // スクロール許可
            } else {
                hamburgerBtn.innerText = '✕';
                document.body.style.overflow = 'hidden'; // 背景のスクロール防止
            }
        });

        // モバイルメニューのリンクをクリックした時にメニューを閉じる
        if (mobileLinks.length > 0) {
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                    hamburgerBtn.innerText = '☰';
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // --- スクロールアニメーションの制御（これも全ページ共通で使えます） ---
    const handleScroll = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にも一度実行

});