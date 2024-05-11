$(function() {
  $(function () {
    // 画面下からどの位置でフェードさせるか(px)
    const fade_bottom = 50;
    // どのくらい要素を動かすか(px)
    const fade_move = 150;
    // フェード時間(ms)
    const fade_time = 1000;
    // フェード前のcssを定義
    $(".scroll-fade-side").css({
      opacity: 0,
      transform: "translateX(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function() {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".scroll-fade-side").each(function() {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)",
          });
        }
      });
    });
  });

  $(window).scroll(function() {
    $('.recipe-link').each(function() {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 250) {
        $(this).addClass('active');
      }
    });
  });
});