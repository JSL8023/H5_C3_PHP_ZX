$(function(){
	$(".redW").on("touchstart",function(){

		var userID =$("#userID").val();
		var passWord_f =$("#passWord_f").val();
		var passWord_s =$("#passWord_s").val();
			
//		表单验证
		if (/^[a-zA-z][a-zA-Z0-9_]{2,9}$/.test(userID)) {
			
			if (passWord_f=="") {
				alert("请输入密码");
				return false;
			} else if(passWord_s==""){
				alert("请再次输入密码");
				return false;
			} else if($("#passWord_f").val()==$("#passWord_s").val()) {
				$.get(" http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"register","userID":userID,"password":passWord_f},function(msg){
				if (msg==0) {
					alert("用户名重名 ");
					
				}else if(msg==2){
					alert("数据库报错")
				}else if(msg==1){
					alert("注册成功");
					location.href="signIn.html"
				}
	})

			}else{
				alert("两次密码不一致，请重新输入");
//				确定不一致后输入框为空
				/*$("#passWord_f").val("");
				$("#passWord_s").val("");*/
			}
		} else{
			alert("用户名由 3-10位的字母下划线和数字组成。不能以数字或下划线开头。只能已字母开头。允许全部是字母。")
		}

	})
	
	
	
	
	






















	
	
})
