var a = "Hello World";

// alert( a.indexOf("W") );
// alert(typeof a);

// var b = ["aa", "bb", "cc"];
// alert( b.indexOf("cc") );

// var c = "짜장면하고 짬뽕하고 탕수육";
// var d = c.split("하고 "); // ["짜장면,짬뽕,탕수육"] split중요!
// alert("내가 먹고 싶은 것은 " + d[0] + "이다.");

// var e = "123, 456, 789";
// var f = e.split(", ");
// // alert("내가 먹고 싶은 것은 " + f[0] + "이다.");
// alert( f[1] );

// var i = 32;
// i = i.toString();
// alert(typeof i);

// var i = 32;
// i = i.toString(16); // 16진수로 변환
// alert(i);

// var i = 32;
// i = i.toString(2); // 2진수로 변환
// alert(i);

// var j = "길동이가 100000원을 나에게 보냈어"
// j = j.replace("길동이가", "손예진이");
// alert(j);

function check(){
    document.getElementById("demo").innerHTML = "확인되었습니다.(●^◡^●)"
};

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

if(month < 10 ){
    month = "0" + month;
}

if(day < 10 ){
    day = "0" + day;
}

document.writeln(year+"-"+month+"-"+day);

// const name = prompt("이름을 입력하세요.");
// alert("환영합니다." + name + "님");

// const book = prompt("예약일을 입력하세요.","2022-08-");
// alert("환영합니다." + book + "에 예약되었습니다.");

// const isAdult = confirm("당신은 성인입니까?");
// console.log(isAdult);

let test = [9, 0, 11, 44];

document.getElementById("move").innerHTML = test;

function add_zero(num){
    if(num<10){
        num = "0" + num;    
    }
    return num;
};

function time_chk(){

    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if(hour < 12){ // 오전
        document.getElementById("ampm").innerHTML = "AM";
    }else{ // 오후
        document.getElementById("ampm").innerHTML = "PM";
        hour = hour - 12;
    }

    document.getElementById("hour").innerHTML = add_zero(hour);
    document.getElementById("min").innerHTML = add_zero(min); 
    document.getElementById("sec").innerHTML = add_zero(sec);

};

time_chk();
setInterval(function(){time_chk();}, 1000);