$(function(){
	
//	底部选项卡变色
$("footer a").on("touchstart",function(){
	$(this).addClass("ahover").siblings().removeClass("ahover");
	return false
})

//头部选项卡 变色+页面切换	
$(".header_main a").on("touchstart",function(){
	$(this).find(".top_logo").addClass("show_color").parent().siblings().find(".top_logo").removeClass("show_color");
	$(this).find(".shanJiao").addClass("show").parent().siblings().find(".shanJiao").removeClass("show");
	$(".goods").eq($(this).index()).addClass("show").siblings().removeClass("show");
	
})
	
$(".header_main a:nth-of-type(7)").on("touchstart",function(){
	$(".header_main").css({"left": "-8rem"  })
})

$(".header_main a:nth-of-type(4)").on("touchstart",function(){
	$(".header_main").css({"left": "0"  })
})



	
$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		data:'',  
        jsonp:'callback',  
		async:false,
		success:function(msg){
			 for(var i in msg) {
			 	console.log(i+"商品名称"+":"+msg[i].goodsName); 
                console.log(i+"商品"+":"+msg[i].goodsID);  
                console.log(i+"类别"+":"+msg[i].classID);   
                console.log(i+"列表图"+":"+msg[i].goodsListImg);  
                console.log(i+"价格"+":"+msg[i].price);  
                console.log(i+"折扣浮点型数据"+":"+msg[i].discount);  
                $(".goods:nth-of-type(1)").append("<a href=\"  \"><dl><dt><img src=\""+msg[i].goodsListImg+"\"/></dt><dd>"+msg[i].goodsName+"</dd><dd><span>￥<i class=\"mony_1\">"+msg[i].price+"</i></span><span>折扣价：￥<i class=\"mony_2\">"+msg[i].discount+"</i></span></dd></dl></a>")
            } 
		}
	});	
	
	
	 	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})