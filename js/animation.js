/* 
 * スクロール時アニメーション
*/
$('.fadeInRightTrigger').on('inview', function (event, isInView) {
  if (isInView) {
    // 表示領域に入った時
    $(this).addClass('animate__animated animate__fadeInRight');
  } else {
    // 表示領域から出た時
    // $(this).removeClass('animate__animated animate__fadeInRight');
  }
});

$('.flipInXTrigger').on('inview', function (event, isInView) {
  if (isInView) {
    // 表示領域に入った時
    $(this).addClass('animate__animated animate__flipInX');
  } else {
    // 表示領域から出た時
    $(this).removeClass('animate__animated animate__flipInX');
  }
});

/*
 * イベント実行時アニメーション
*/
$('#self-portrait').on('click', function (event, isInView) {
  $(this).addClass('animate__animated animate__shakeX animate__fast animate__infinite');
  $('#portraitComment').removeClass('invisible');
});