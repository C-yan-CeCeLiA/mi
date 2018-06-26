$(document).ready(function(){
	//轮播图。
	var time = 0,index = 0,
		play_timer = null;

		// 鼠标经过小圆点
	$(".play-point li").mouseover(function(){
		clearInterval(play_timer);//停止自动播放图片，防止冲突。
		
		index = $(this).index();
		// console.log(index+"index");
		$(this).addClass("active").siblings().removeClass("active");
		$(".pic img").eq(index).show().siblings().hide();
		

	}).mouseout(function(){
		time = index;
		auto_play();
	})
	// 自动播放
	auto_play()
	
	function auto_play(){
		
		play_timer = setInterval(function(){
			time++;//time 从第一开始，图片从0开始，所以第一次执行时，展示的是第二张图片。
			if (time < 5) {
				$(".play-point li").eq(time).addClass("active").siblings("li").removeClass("active");
				$(".pic img").eq(time).show().siblings("img").hide();
			}else{
				time = -1;
			}
			;//time为要显示的图片索引。
			
			// console.log(time)
			
		},3000);
	}

	//箭头  当鼠标被移动到箭头上时，停止自动播放图片，防止冲突。当鼠标移出时，执行自动播放。
	$(".arrow i").mouseover(function(){
		clearInterval(play_timer);
	}).mouseout(function(){
		auto_play();
	});
	$(".arrow .right").click(function(){
		time++;//在自动播放图片的基础上（图片播放到那张的基础上往后移动）。
		if(time<=4){
			$(".play-point li").eq(time).addClass("active").siblings().removeClass("active");
			$(".pic img").eq(time).show().siblings().hide();
		
		}else{
			time = -1;
			$(".play-point li").eq(time=0).addClass("active").siblings().removeClass("active");
			$(".pic img").eq(time=0).show().siblings().hide();
		}
	});
	$(".arrow .left").click(function(){
		time--;
		if (time>=0) {
			$(".play-point li").eq(time).addClass("active").siblings().removeClass("active");
			$(".pic img").eq(time).show().siblings().hide();
		}else{
			// console.log(time)
			time = 4;
			// console.log(time)
			$(".play-point li").eq(time=4).addClass("active").siblings().removeClass("active");
			$(".pic img").eq(time=4).show().siblings().hide();
		}
	})
})



$(document).ready(function(){
	//轮播图旁边的侧栏导航
	let sideNavin = null;
	let sideNavout = null;
	$(".main_nav li").mouseenter(function(){
		// clearTimeout(sideNavin);
		// sideNavin = setTimeout(()=>{
		// 	$(this).siblings().removeClass("main_item-active");
		// 	$(this).addClass("main_item-active");
		// 	$(this).find(".main-item-child").show();
		// },30);
		$(this).siblings().removeClass("main_item-active");
			$(this).addClass("main_item-active");
			$(this).find(".main-item-child").show();

	}).mouseleave(function(){
		// clearTimeout(sideNavout);
		// sideNavout = setTimeout(()=>{
			
		// },300)
			$(this).removeClass("main_item-active");
			$(this).find(".main-item-child ").hide();
	})

	//防止子导航鼠标进入时冒泡
	$(".hc-item-child").mouseenter(()=>{
		 event.stopPropagation();
	})
	
//header的热词导航
// 当鼠标进入父级时，展示出子集
let timer = null;
let timer2 =null;
	$(".hotwords-animate").mouseenter(function(){
		clearTimeout(timer);
		timer  = setTimeout(()=>{
			$(".hc-item-child").css("z-index","99");
			$(".hc-item-child").slideDown("fast");
			console.log("进入")
	}, 500)
	
		// $(".hc-item-child").css("z-index","99");
		// $(".hc-item-child").slideDown("fast");
		
		

	}).mouseleave(function(){
		window.clearTimeout(timer2);
		timer2  = setTimeout(()=>{	
			$(".hc-item-child").slideUp("fast");
		console.log("出")
		},500)
	// $(".hc-item-child").slideUp("fast");
	})
		// 根据热词的序列，更改展示区的序列
$(".hotwords-animate .hotwords").mouseenter(function(){
	var i = $(this).index();
	var show_hotw =  $(".hotwords-animate .hotwords");
	// console.log("hotwords的个数"+i);
	$(".hc-item-child li").eq(i).show().siblings().hide();


})
	
	var length = $(".star_nav .star_nav_w").length;
	// 明星单品按键
	var i = 0;

	$(".star_btn .next").click(function(){
		i++;


		// alert(i);
		// alert(i<length)
	
		$(".star_nav_w").eq(i).show().siblings().hide();
		
		// console.log("i="+i+"被单击")
		star_btn_next()
		star_btn_prev();
		// alert ("i="+i );
	});
	$(".star_btn .prev").click(function(){
		i--;
		
		$(".star_nav_w").eq(i).show().siblings().hide();
		star_btn_next()
		star_btn_prev();
	})
	star_btn_prev();
	function star_btn_prev(){
		
		var first_child = $(".star_nav .star_nav_w").eq(0);
	
		if (first_child.is(":hidden")) {
			// alert("第一个元素隐藏");
			$(".star_btn .prev").removeAttr("disabled")
		}else{	
			// alert("第一个元素显示");
			$(".star_btn .prev").attr("disabled","disabled")
		}
		// alert(if(!last_child.is(":hidden"))+"最后一个元素")
		
	}
	
	function star_btn_next() {
		
		// alert(length);
		var last_child = $(".star_nav .star_nav_w").eq(length-
			1);
	
		if(last_child.is(":hidden")){
			// alert("最后一个元素隐藏");
			$(".star_btn .next").removeAttr("disabled");
		}else{
			// alert("最后一个元素显示");
			$(".star_btn .next").attr("disabled","disabled")
		}
	}
	// $(".star_btn .prev").click(function(){
	// 	i--
		
	// 	 // alert($(".star_nav .star_nav_w").length);
	// 	 if(i <= 0){
	// 	 	$(this).attr("disabled","disabled");
	// 	 }else{
		 	
	// 	 	$(".star_nav .star_nav_w").eq(i).show().siblings().hide();
	// 	 }
		
	// 	console.log("i="+i+"被单击")


	// })

	// 这是page-main
	// 家电	
	$(".hea .head-bar-right span").mouseover(function(){
		$(this).addClass("hbr-active").siblings().removeClass("hbr-active");
		var index = $(this).index();
		// alert(index)
		$(".hea .c-right").eq(index).show().siblings().hide();
		
		
	})	
	// 智能
	$(".intelligence .head-bar-right span").mouseover(function(){
		$(this).addClass("hbr-active").siblings().removeClass("hbr-active");
		var index = $(this).index();
		// alert(index)
		$(".intelligence .c-right").eq(index).show().siblings().hide();
	})
	// 搭配
	$(".collocation .head-bar-right span").mouseover(function(){
		$(this).addClass("hbr-active").siblings().removeClass("hbr-active");
		var index = $(this).index();
		// alert(index)
		$(".collocation .c-right").eq(index).show().siblings().hide();
	})
	// 配件	
	$(".parts .head-bar-right span").mouseover(function(){
		$(this).addClass("hbr-active").siblings().removeClass("hbr-active");
		var index = $(this).index();
		// alert(index)
		$(".parts .c-right").eq(index).show().siblings().hide();
	})
	// 周边
	$(".periphery .head-bar-right span").mouseover(function(){
		$(this).addClass("hbr-active").siblings().removeClass("hbr-active");
		var index = $(this).index();
		// alert(index)
		$(".periphery .c-right").eq(index).show().siblings().hide();
	})
	// 这是搜索框
	$(".seach_text").focus(function(){
		// return false;
		$(".seach_ab").hide();

		$(this).addClass("seach_text_active");
		$(".seach_text_child").show();

		$(".seach").addClass("seach_active");

	})
	$(".seach_text").blur(function(){
		$(".seach_ab").show();
		$(this).removeClass("seach_text_active");	
		$(".seach").removeClass("seach_active");
		$(".seach_text_child").hide();
	})
	$(".seach_text_child p").mouseover(function(){
		$(this).addClass("s_t_c_wrap_active").siblings().removeClass("s_t_c_wrap_active");
	}).mouseout(function(){
		$(this).removeClass("s_t_c_wrap_active");
	})
})

//视频


