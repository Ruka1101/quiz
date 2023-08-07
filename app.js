const quiz = [
	{
		question: '今までで最も売れたゲーム機は？',
		answers: [
			'スーパーファミコン',
			'プレイステーション2',
			'ニンテンドースイッチ',
			'ニンテンドーDS',
		],
		correct: 'ニンテンドーDS'
	}, {
		question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
		answers: [
			'MOTHER2',
			'スーパーマリオブラザーズ',
			'スーパードンキーコング',
			'星のカービィ',
		],
		correct: 'MOTHER2'
	}, {
		question: 'ファイナルファンタジーIVの主人公の名前は？',
		answers: [
			'フリオニール',
			'クラウド',
			'ティーダ',
			'セシル',
		],
		correct: 'セシル'
	}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文と選択肢を定義
const setupQuiz = () => {
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	let buttonIndex = 0;
	while (buttonIndex < buttonLength) {
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}
setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent) {
		window.alert('正解！');
		score++;
	} else {
		window.alert('不正解！');
	}
	
	quizIndex++;
	
	if(quizIndex < quizLength) {
		//問題が残っていればこちらを実行
		setupQuiz();
	} else {
		//問題がもうなければこちらを実行
		window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
	}
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener('click', (e) => {
		clickHandler(e);
	});
	handlerIndex++;
}
