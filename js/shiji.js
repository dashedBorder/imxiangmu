

$(function(){
	$('#dowebok').fullpage({
		
		// 'navigation': false,
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			if(index==1) {
				$('.section1').find('.shi1').addClass('goright');
				$('.section1').find('.shi2').addClass('goleft');
				$('.section1').find('.shi3').addClass('goleft');
				$('.section1').find('.shi4').addClass('goright');
				$('.section1').find('.ji1').addClass('goright');
				$('.section1').find('.ji2').addClass('goleft');
				$('.section1').find('.ji3').addClass('goright');
				$('.section1').find('.c2013-2').addClass('goleft');
				$('.section1').find('.c2013-0').addClass('goright');
				$('.section1').find('.c2013-1').addClass('goleft');
				$('.section1').find('.c2013-3').addClass('goright');
				$('.section1').find('.slogen').addClass('center');}
			if(index==2) {
				$('.section2').find('.ss').addClass('upin');
				$('.section2').find('.ss-left').addClass('leftin');
				$('.section2').find('.ss-right').addClass('rightin');
				$('.section2').find('.ss-up').addClass('downin');
			}
			if(index==3){
				$('.section3').find('.ss-up').addClass('upin');
				$('.section3').find('.ss-left').addClass('leftin');
				$('.section3').find('.ss-right').addClass('rightin');
				$('.section3').find('.ss-down').addClass('downin');
			}
			if(index==4){
				$('.section4').find('.ss-up').addClass('upin');
				$('.section4').find('.ss-left').addClass('leftin');
				$('.section4').find('.ss-right').addClass('rightin');
				$('.section4').find('.ss-down').addClass('downin');
			}
		},
		onLeave: function(index, direction){
			if(index==1) {
				$('.section1').find('.shi1').removeClass('goright');
				$('.section1').find('.shi2').removeClass('goleft');
				$('.section1').find('.shi3').removeClass('goleft');
				$('.section1').find('.shi4').removeClass('goright');
				$('.section1').find('.ji1').removeClass('goright');
				$('.section1').find('.ji2').removeClass('goleft');
				$('.section1').find('.ji3').removeClass('goright');
				$('.section1').find('.c2013-2').removeClass('goleft');
				$('.section1').find('.c2013-0').removeClass('goright');
				$('.section1').find('.c2013-1').removeClass('goleft');
				$('.section1').find('.c2013-3').removeClass('goright');
				$('.section1').find('.slogen').removeClass('center');
			}
			if(index==2) {
				$('.section2').find('.ss').removeClass('upin');
				$('.section2').find('.ss-left').removeClass('leftin');
				$('.section2').find('.ss-right').removeClass('rightin');
				$('.section2').find('.ss-up').removeClass('downin');
			}
			if(index==3){
				$('.section3').find('.ss-up').removeClass('upin');
				$('.section3').find('.ss-left').removeClass('leftin');
				$('.section3').find('.ss-right').removeClass('rightin');
				$('.section3').find('.ss-down').removeClass('downin');
			}
			if(index==4){
				$('.section4').find('.ss-up').removeClass('upin');
				$('.section4').find('.ss-left').removeClass('leftin');
				$('.section4').find('.ss-right').removeClass('rightin');
				$('.section4').find('.ss-down').removeClass('downin');
			}


		}
	});
});
