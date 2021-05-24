function check()
{
    // var tele = false;    //判断电话号码格式是否正确
    var ema = false;     //判断电子邮件格式是否正确
    var pwd = false;     //判断密码1格式是否正确
    var pwd2 = false;    //判断面密码2格式是否正确
    var ch = false;      //判断checkbox是否选中

    var tele = false;    //判断电话号码格式是否正确
    // 1 获取手机号码文本框内容
    var phoneObj = document.getElementById("telephone");
    // 2 获得输入的内容
    var phone = phoneObj.value;
    // 3 检查格式
    var regphone = /^1[[3578]\d{9}$/;   //电话号码的格式设置
    //  3.1 正确，绿色显示文字
    if(regphone.test(phone))
    {
        document.getElementById("telephoneHint").innerHTML = "<font color=green>手机号格式正确</font>";   //嵌入标签
        tele = true;
    }
    else   // 3.2 不正确，红色显示文字
    {
        document.getElementById("telephoneHint").innerHTML = "<font color=red>手机号码格式不正确</font>";
    }

    // 1 获取密码文本框内容
    var emailObj = document.getElementById("email");
    // 2 获得输入的内容
    var email = emailObj.value;
    // 3 检查格式
    var regemail = /^[0-9a-zA-Z]{1,}@[0-9a-zA-Z]{1,}(.[0-9a-zA-Z]{1,}){1,}$/;
    //  3.1 正确，绿色显示文字
    if(regemail.test(email))
    {
        document.getElementById("emailHint").innerHTML = "<font color=green>邮箱格式正确</font>";//嵌入标签
        ema = true;
    }
    else   // 3.2 不正确，红色显示文字
    {
        document.getElementById("emailHint").innerHTML = "<font color=red>邮箱格式不正确</font>";
    }

    //检查密码
    var passwordObj = document.getElementById("password"); 
    var password = passwordObj.value;
    var regpassword = /^(?=.*\d)(?=.*[A-Za-z]).{1,}$/;
    if(regpassword.test(password))
    {
        document.getElementById("passwordHint").innerHTML = "<font color=green>密码格式正确</font>";   //嵌入标签
        pwd = true;
    }
    else   // 3.2 不正确，红色显示文字
    {
        document.getElementById("passwordHint").innerHTML = "<font color=red>密码必须含有数字和字母</font>";
    }

    // 密码重复检查
    var password2 = document.getElementById("password2").value;
    if(password2 == password)
    {
        document.getElementById("password2Hint").innerHTML = "<font color=green>密码正确</font>";   //嵌入标签
        pwd2 = true;
    }
    else   // 3.2 不正确，红色显示文字
    {
        document.getElementById("password2Hint").innerHTML = "<font color=red>密码不正确</font>";
    }
    
    ch = document.getElementById("agree").checked;
    if(!ch)
    {
        alert("请勾选服务条款方能注册！");
    }

    if(tele && ema && pwd && pwd2 && ch)
    {
        self.location.href ="../page/SignIn.html";
    }

}