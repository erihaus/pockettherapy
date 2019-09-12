/*var hideMe = function() {
  $("#first").fadeOut(800);
  $("#second").show();
}
var hideMe2= function() {
  $("#second").fadeOut(800);
  $("#third").show();
}

var hideMe3 = function() {
  $("#third").fadeOut(800);
  $("#fourth").show();
}
*/
var usedQuotes = [];
var otherQuotes = ["You can get through this.",
"I'm sorry that you're in so much pain. You don't deserve it.",
"Getting better from depression demands a lifelong commitment. I've made that commitment for my life's sake and for the sake of those who love me. — Susan Polis Schutz",
"Once you choose hope, anything is possible. — Christopher Reeve",
"Maybe you have to know the darkness before you can appreciate the light. — Madeleine L'Engle"];
var z = 0;
$(document).ready(function(){
    var i=0;
    function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
$(".quotes").click(function() {
    var quote = $(this).text();
    var quotes=document.createElement('div');
    document.body.append(quotes);
    quotes.className = 'window';
   $(".window").text(quote);
   $(".window").show();
   $(".window").hover(function(){
  $(".window").stop().animate({
            fontSize: '30px'
        }, 1);
  }, function(){

});
$(".window").click(function() {
  $(".window").hide();
});

});

    $("#submit").click(function(){
      z = Math.floor(Math.random() * 12 + 1);
      z = z.toString();
      $("#quotes" + z).show();
        i;
        $(".selfLove").show();
      var input = document.getElementById("text");
      var value = input.value;
      var submissions = [];
      submissions[i] = document.createElement('div');
        submissions[i].className = 'submission';
        var idName = ('submission' + i).toString();
        submissions[i].id = idName;
        document.body.append(submissions[i]);
        var idName2 = "#" + idName;
        $(idName2).text(input.value);
                var right = getRandomInteger(10, 90) + "%";
        submissions[i].style.left = right;
        var bottom = getRandomInteger(10, 90) + "%";
        submissions[i].style.bottom = bottom;
        input.value = value;
var quoteNumber = "quotes" + getRandomInteger(1,7).toString();
var quoteNumber2 = "#" + quoteNumber;
$(".submission").hover(function(){
  $(".submission").fadeOut(3000); 
  }, function(){});
$(".submission").click(function(){
    $(".submission").stop().animate({
            fontSize: '0px'
        }, 3000);
});
/*breakWord(input.value); */
i++;
    });

    $("#submit2").click(function(){
      $(".selfLove").hide();
      var input1 = document.getElementById("text2");
      var value2 = input1.value;
      var submissions2 = [];
      submissions2[i] = document.createElement('div');
        submissions2[i].className = 'submission2';
        var idName4 = ('submission2' + i).toString();
        submissions2[i].id = idName4;
        document.body.append(submissions2[i]);
        var idName3 = "#" + idName4;
        $(idName3).text(value2);
        var right2 = getRandomInteger(10, 90) + "%";
        submissions2[i].style.left = right2;
        var bottom2 = getRandomInteger(10, 90) + "%";
        submissions2[i].style.bottom = bottom2;
        input1.value = value2;
$(".submission2").click(function(){
    $(".submission2").stop().animate({
            fontSize: '100px'
        }, 3000);
});
   i++;
  });
  });
/*var breakWord = function(value) {
    var s= value.toString();
    for (i=0; i<s.length; i++) {
      var elems = [];
      elems[i] = document.createElement('div');
      var idName3 = ('elem' + i).toString();
      elems[i].id = idName3;
      var idName4 = "#" + idName3;
        document.body.append(elems[i]);
        $(idName4).text(s.charAt(i));
  var id = setInterval(frame, 5);
        var pos = 0;
        var elem = elems[i];
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + 'px';
      elem.style.left = pos+ 'px';
    }
}
}
} */
