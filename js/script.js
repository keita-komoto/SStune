//ヘッダーボタンのトグル
$(".openbtn-box, .openbtn-line").click(function () {
    $('.openbtn-box').toggleClass('box-act');
	$('.openbtn-line').toggleClass('line-act');
	$('.openbtn-ctn').toggleClass('ctn-act');
});

//スライド左の設定
  $('.slider-l').slick({
	vertical: true,
    accessibility: false,// 左右矢印ボタンでの切り替えなし
    arrows: false,//左右矢印ボタン表示なし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    swipe: false,//タッチスワイプに対応しない
  });
//スライド右の設定
  $('.slider-r').slick({
	accessibility: false,// 左右矢印ボタンでの切り替えなし
    arrows: false,//左右矢印ボタン表示なし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    swipe: false,//タッチスワイプに対応しない
	rtl: true,//スライダの表示方向を左⇒右に変更する
  });


//画像のモーダル
$(".gallery").modaal({
  type: 'image',
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});

//日付を1か月後から選択可能にする
$(function () {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+28); //今日から数えて28日後の日付を取得
    var yyyy = tomorrow.getFullYear();
    var mm = ("0"+(tomorrow.getMonth()+1)).slice(-2);
    var dd = ("0"+tomorrow.getDate()).slice(-2);
    document.getElementById("tomorrow").value=yyyy+'-'+mm+'-'+dd;
	document.getElementById("tomorrow").min=yyyy+'-'+mm+'-'+dd;
});