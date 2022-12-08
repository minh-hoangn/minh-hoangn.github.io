$(document).ready(function() {
	$('.content a').fancybox();
	TweenMax.staggerFrom(
			$('.content a'), // phần tử được chọn
			1, // thời gian chuyển động
			{top:100,opacity:0},
			0.4 // thời gian cách nhau giữa mỗi hiệu ứng
		);
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}