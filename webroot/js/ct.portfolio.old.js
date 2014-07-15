function resize_fullPage(){
}
var sectionsColor = ['#00BFF3', '#1BBC9B', '#00BFF3', '#1BBC9B', '#00BFF3','#1BBC9B','#00BFF3'];

var data = {
    labels: ["PHP", "SQL", "JS", "HTML", "Running", "JAVA", "C++"],
    datasets: [
        {
            label: "My skills",
            fillColor: "rgba(151,187,205,0.7)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 30]
        }
    ]
};

function init_portfolio_event(){

	$('#ct-portfolio-wrap-2-left-1').hide();
	$('#ct-portfolio-wrap-2-right-1').hide();
	$('#ct-portfolio-wrap-2-left-2').hide();
	$('#ct-portfolio-wrap-2-left-3').hide();
	$('#ct-portfolio-wrap-3-1').hide();
	$('#ct-portfolio-wrap-3-2').hide();
	$('#ct-portfolio-wrap-4-1').hide();
	$('#ct-portfolio-wrap-4-2').hide();
	$('#ct-portfolio-wrap-5-down-1').hide();
	$('#ct-portfolio-wrap-5-bottom-1').hide();
	$('#ct-portfolio-wrap-5-bottom-2').hide();
	$('#ct-portfolio-wrap-5-bottom-3').hide();
	$('#ct-portfolio-wrap-5-bottom-4').hide();
	$('#ct-portfolio-wrap-5-bottom-5').hide();
	$('#ct-portfolio-wrap-5-bottom-6').hide();
}

function init_portfolio_eventt(){

	$('#ct-portfolio-wrap-2-left-1').hide();
	$('#ct-portfolio-wrap-2-right-1').hide();
	$('#ct-portfolio-wrap-2-left-2').hide();
	$('#ct-portfolio-wrap-2-left-3').hide();
	$('#ct-portfolio-wrap-3-1').hide();
	$('#ct-portfolio-wrap-3-2').hide();
	$('#ct-portfolio-wrap-4-1').hide();
	$('#ct-portfolio-wrap-4-2').hide();
}

function hide_portfolio_event(index){
	switch (index) {
	    case 2:
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-2-left-1').hide('slide',{direction:'right'},500);
	    	}, 100);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-2-right-1').hide('slide',{direction:'down'},1000);
	    	}, 50);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-2-left-2').hide('slide',{direction:'left'},500);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-2-left-3').hide('slide',{direction:'right'},500);
	    	}, 1000);
	        break;
	    case 3:
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-3-1').hide('slide',{direction:'left'},500);
	    	}, 100);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-3-2').hide('slide',{direction:'right'},500);
	    	}, 500);
	        break;
	    case 4:
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-4-1').hide('slide',{direction:'right'},500);
	    	}, 100);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-4-2').hide('slide',{direction:'left'},500);
	    	}, 500);
	        break;
	    case 5:
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-down-1').hide('slide',{direction:'down'},1000);
	    	}, 50);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-1').hide('slide',{direction:'down'},1000);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-2').hide('slide',{direction:'down'},1000);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-3').hide('slide',{direction:'down'},1000);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-4').hide('slide',{direction:'down'},1000);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-5').hide('slide',{direction:'down'},1000);
	    	}, 500);
	    	window.setTimeout(function(){
	    		$('#ct-portfolio-wrap-5-bottom-6').hide('slide',{direction:'down'},1000);
	    	}, 500);
	        break;
	    case 6:
	        break;
	    case 7:
	        break;
	}
}

$( document ).ready(function() {
	$('.ct-portfolio-wrap').css('backgroundColor','#00BFF3');
	//CHART
	var ctx = document.getElementById("portfolio-pg6-chart-1").getContext("2d");
	var myRadarChart = new Chart(ctx).Radar(data,{scaleLineColor: "rgb(0,0,0)",angleLineColor : "rgb(0,0,0)",scaleFontColor: "#000"});
	//INIT
	init_portfolio_event();
	// resize_fullPage();
	// window.onresize = function(event) {
	// 	resize_fullPage();
	// };
	$('#fullpage').fullpage({
		resize:false,
		paddingdown: '65px',
		scrollOverflow: true,
		// verticalCentered: false,
        afterLoad: function(anchorLink, index){
        	$('.portfolio-navbar-vertical').find('li:nth-child('+index+')').siblings().removeClass('active');
        	$('.portfolio-navbar-vertical').find('li:nth-child('+index+')').addClass('active');
        	switch (index) {
			    case 2:
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-2-left-1').show('slide',{direction:'right'},500);
			    	}, 100);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-2-right-1').show('slide',{direction:'down'},1000);
			    	}, 50);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-2-left-2').show('slide',{direction:'left'},500);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-2-left-3').show('slide',{direction:'right'},500);
			    	}, 1000);
			        break;
			    case 3:
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-3-1').show('slide',{direction:'left'},500);
			    	}, 100);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-3-2').show('slide',{direction:'right'},500);
			    	}, 500);
			        break;
			    case 4:
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-4-1').show('slide',{direction:'right'},500);
			    	}, 100);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-4-2').show('slide',{direction:'left'},500);
			    	}, 500);
			        break;
			    case 5:
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-down-1').show('slide',{direction:'up'},1000);
			    	}, 50);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-1').show('slide',{direction:'up'},1000);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-2').show('slide',{direction:'up'},1000);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-3').show('slide',{direction:'up'},1000);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-4').show('slide',{direction:'up'},1000);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-5').show('slide',{direction:'up'},1000);
			    	}, 500);
			    	window.setTimeout(function(){
			    		$('#ct-portfolio-wrap-5-bottom-6').show('slide',{direction:'up'},1000);
			    	}, 500);
			        break;
			    case 6:
			        break;
			    case 7:
			        break;
			}
        },
        onLeave: function(index,nextIndex, direction){
        	var color = sectionsColor[(parseInt(nextIndex) - 1 )];
        	$('.ct-portfolio-wrap').animate({
	          	backgroundColor: color
	        },1500);
	    	window.setTimeout(function(){
	        	hide_portfolio_event(index);
	        },500);
        }
	});
});