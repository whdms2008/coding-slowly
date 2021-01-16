var Links = { //객체 Links 생성
setColor : function (color){ //메소드 생성\
    $('a').css('color',color);
  }
}
var Body = { //객체 Body 생성
  setColor:function (color){ //메소드 생성
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){ //메소드 생성
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightdayHandler(self){ // 함수
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black'); //객체 Body 의 setBackgroundColor 메소드 사용
    Body.setColor('white'); //객체 Body의 메소드 사용
    self.value = 'day';

    Links.setColor('powderblue'); // 객체 Links 의 메소드 사용
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue')
  }
}
