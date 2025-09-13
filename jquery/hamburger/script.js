$(function() {
  // メニューを開く
  $('#open').on('click', function() {
    $('body').addClass('active');
  });

  // メニューを閉じる（×ボタン）
  $('#close').on('click', function() {
    $('body').removeClass('active');
  });

  // メニューを閉じる（マスク部分をクリック）
  $('#mask').on('click', function() {
    $('body').removeClass('active');
  });
});
