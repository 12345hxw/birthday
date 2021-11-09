/*
 * @Author: your name
 * @Date: 2021-03-25 09:07:37
 * @LastEditTime: 2021-03-25 09:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiny-heart-master\birthday-mobile\js\index.js
 */
$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  //修改密码请改此处
  if (userName == "楼美丽" && pwd == "1117") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "light.html";
    }, 2000);
  } else {
    alert("密码错误，是你生日啊，我滴乖乖！");
  }
});
