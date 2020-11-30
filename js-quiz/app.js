const quiz = [
    {
        question: 'お酢に卵を殻ごといれると卵はどうなるでしょう？',
        answers: [
            '透明な卵になる',
            '鏡のようになんでもうつる卵になる',
            '卵が溶けてなくなる',
            '卵が石のように堅くなる'
        ],
        correct: '透明な卵になる'
    }, {
        question: 'リンカーンは大統領になる前は何をしていたでしょうか？',
        answers: [
            'プロ野球選手',
            '猟師',
            'レスラー',
            'タクシー運転手'
        ],
        correct: 'レスラー'
    }, {
        question: '飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょう？',
        answers: [
            'ミニトマト',
            'パプリカ',
            'アボカド',
            'ズッキーニ'
        ],
        correct: 'ミニトマト'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $btn = document.getElementsByTagName('button');
const btnLength = $btn.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let btnIndex = 0;
    while (btnIndex < btnLength) {
        $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
        btnIndex++;
    }
}
setupQuiz();
// 正誤判定を定義
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}
// 選択肢がクリックされた時の処理
let handleIndex = 0;
while (handleIndex < btnLength) {
    $btn[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}