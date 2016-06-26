$(function(){
	
//	对号+密码显隐切换事件
	var showOrHide = false;
	var showOrHide_1 = false;
	$(".kuang_mi").on("touchstart",function(){
		//zepto特有   toggle()内为true 表示显示   false表示隐藏
		$(this).find(".kuang_2").toggle(showOrHide?showOrHide=false:showOrHide=true);

		if (showOrHide) {
			$(".passTxt").val($(".passWord").val());
			$(".passWord").addClass("passHide").siblings().removeClass("passHide");		
		} else {
			$(".passWord").val($(".passTxt").val());
			$(".passTxt").addClass("passHide").siblings().removeClass("passHide");		
		} 
	
	})
	
	$(".kuang_deng").on("touchstart",function(){
		$(this).find(".kuang_2").toggle(showOrHide_1?showOrHide_1=false:showOrHide_1=true);
	})
	
	
	//		有cookie自动登录
		if ($.fn.cookie('carts')) {
			var carts = $.fn.cookie('carts') ? $.fn.cookie('carts') : "{}";
			var goods = JSON.parse(carts);
			var name_cookie,passWord_cookie;
			for (i in goods) {
				name_cookie=goods[i].name;
				passWord_cookie=goods[i].passWrod;
			}
			
			$(".passWord").val(passWord_cookie);
			$("#userID").val(name_cookie);
			$(".kuang_deng .kuang_2").addClass("cookieBlock");
			showOrHide_1 =true;
		} 
	
//	提交事件
	$(".redW").on("touchstart",function(){
		var userID =$("#userID").val();
		var passWord_f ;
		if (showOrHide==true) {
			passWord_f =$(".passTxt").val();
		} else if(showOrHide==false){
			passWord_f =$(".passWord").val();
		}
				
		if (showOrHide_1=true) {
			
			var carts = $.fn.cookie('carts') ? $.fn.cookie('carts') : "{}";
			var goods = JSON.parse(carts);
			goods[userID] ={
					name : userID,
					passWrod : passWord_f
					
				}
			
			$.fn.cookie("carts", JSON.stringify(goods), {expires:30,path:'/'});
			
//			alert($.fn.cookie('carts'))
			
		}
		
		
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			data:{"status":"login","userID":userID,"password":passWord_f},
			success:function(msg){
				if (msg==0) {
					alert("用户名不存在");
				} else if(msg==2){
					alert("用户名密码不符");
				}else{
					alert("登陆成功")
				}
			}
			
		});
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
})