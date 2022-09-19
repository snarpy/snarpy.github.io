// ヘッダー表示用
function DispHeader() {
  $.ajax({
    url: "./html/header.html",
    cache: false,
    success: function (html) {
      $('#header_div').html(html);
    }
  });
}

// フッター表示用
function DispFooter() {
  $.ajax({
    url: "./html/footer.html",
    cache: false,
    success: function (html) {
      $('#footer_div').html(html);
    }
  });
}

// 各タブ表示用
function DispContents(page) {
  $.ajax({
    url: `./html/${page}.html`,
    cache: false,
    success: function (html) {
      $(`#${page}_content`).html(html);
    }
  });
}

// タブ切り替えイベント
$(document).on('click', '.nav-link', function (event) {
  $('body, html').scrollTop(0);
});