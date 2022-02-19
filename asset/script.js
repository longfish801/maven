// bootstrapのJavaScriptファイルを読みこむ
fetch('bootstrap-5.0.2/bootstrap.bundle.min.js')
	.then(response => response.text())
	.then(text => eval(text))

// 「戻る」ボタンクリック時に画面遷移をする。
// 現在のページが index.html以外なら index.htmlへ遷移する。
// 現在のページが index.htmlなら上位のパスへ遷移する。
function backPage(){
	let url = window.location.href;
	window.location.href = (url.endsWith('/') || url.endsWith('index.html'))? '..' : 'index.html';
}
