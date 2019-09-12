/*$(".intro").hide();*/
$(".chooseColor").hide();
$(".chooseNature").hide();
$('select').select2();
$("#nature").hide();
$(".nature").hide();
$(".color").hide();
$("#color").hide();
$(".js-example-basic-multiple").select2();
  </script >

  <script>
    $(".page2").hide();
    $(".page3").hide();
    $(".page4").hide();
    $(".page5").hide();
    $(".page6").hide();
    $(".page7").hide();
    $(".page8").hide();
    $(".page9").hide();
    $(".page10").hide();
    var z = 0;
    var pageNames = ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10"];
    var i = 0;
    var songs = ["http://k003.kiwi6.com/hotlink/5aw2tc3nv1/satie1.mp3", "http://k003.kiwi6.com/hotlink/o6kztd8pu0/Soaring.mp3", "http://k003.kiwi6.com/hotlink/3cdj19s5yu/gymnopedie.mp3", "http://k003.kiwi6.com/hotlink/oo4egyik3e/immersed.mp3", "http://k003.kiwi6.com/hotlink/nb90bzvc24/arabesque.mp3", "http://k003.kiwi6.com/hotlink/uic804ngud/freshair.mp3"];
    var photos = ["https://preview.ibb.co/bMPpC5/cliff.jpg", "https://preview.ibb.co/dfBfKk/clouds.jpg", "https://preview.ibb.co/jtsnzk/dock.jpg", "https://preview.ibb.co/msThX5/hotair.jpg", "https://preview.ibb.co/mKmQkQ/mountains.jpg", "https://preview.ibb.co/cgqUC5/ocean.jpg", "https://preview.ibb.co/jgbfKk/sunset.jpg", "https://preview.ibb.co/mr0kkQ/tropical.jpg", "https://preview.ibb.co/doyGs5/hotairballoonnight.jpg"];
    $(".js-example-basic-multiple").select2();
    var music = document.getElementById('music'); // id for audio element
    var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
    var pButton = document.getElementById('pButton'); // play button
    var playhead = document.getElementById('playhead'); // playhead
    var timeline = document.getElementById('timeline'); // timeline

    // timeline width adjusted for playhead
    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

    // play button event listenter
    pButton.addEventListener("click", play);

    // timeupdate event listener
    music.addEventListener("timeupdate", timeUpdate, false);

    // makes timeline clickable
    timeline.addEventListener("click", function (event) {
      moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth
    function clickPercent(event) {
      return (event.clientX - getPosition(timeline)) / timelineWidth;
  }

  // makes playhead draggable
  playhead.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  // Boolean value so that audio position is updated only when the playhead is released
  var onplayhead = false;

  // mouseDown EventListener
    function mouseDown() {
      onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
  }

  // mouseUp EventListener
  // getting input from all mouse clicks
    function mouseUp(event) {
      if (onplayhead == true) {
      moveplayhead(event);
    window.removeEventListener('mousemove', moveplayhead, true);
    // change current time
    music.currentTime = duration * clickPercent(event);
    music.addEventListener('timeupdate', timeUpdate, false);
  }
  onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
    function moveplayhead(event) {
      var newMargLeft = event.clientX - getPosition(timeline);

      if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
      playhead.style.marginLeft = newMargLeft + "px";
  }
      if (newMargLeft < 0) {
      playhead.style.marginLeft = "0px";
  }
      if (newMargLeft > timelineWidth) {
      playhead.style.marginLeft = timelineWidth + "px";
  }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
    function timeUpdate() {
      var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
      if (music.currentTime == duration) {
      pButton.className = "";
    pButton.className = "play";
  }
}

//Play and Pause
    jQuery('a').on('click', function () {
      var songName = $(this).data("value");
    var source = document.getElementById("audioSource");
    source.src = songName;
    music.load();
    music.play();
    document.getElementById("play").style.position = "absolute";
    document.getElementById("play").style.marginLeft = "-40px";
    document.getElementById("play").innerHTML = "Pause Music";
    document.getElementById("play").style.width = "200px";
    // remove play, add pause
    pButton.className = "";
    pButton.className = "pause";

  });
    function play() {
      // start music
      if (music.paused) {
      music.play();
    document.getElementById("play").style.position = "absolute";
    document.getElementById("play").style.marginLeft = "-40px";
    document.getElementById("play").innerHTML = "Pause Music";
    document.getElementById("play").style.width = "200px";
    // remove play, add pause
    pButton.className = "";
    pButton.className = "pause";
      } else { // pause music
      music.pause();
    // remove pause, add play
    document.getElementById("play").style.width = "100px";
    document.getElementById("play").innerHTML = "Play Music";
    document.getElementById("play").style.position = "absolute";
    document.getElementById("play").style.marginTop = "6px";
    document.getElementById("play").style.marginLeft = "10px";
    pButton.className = "";
    pButton.className = "play";
  }
}

// Gets audio file duration
    music.addEventListener("canplaythrough", function () {
      duration = music.duration;
  }, false);

  // getPosition
  // Returns elements left position relative to top-left of viewport
    function getPosition(el) {
      return el.getBoundingClientRect().left;
    console.log(el.getBoundingClientRect().left);
  }
    function chooseBackground() {
      /* here SHOW the two options: choose background from wallpapers OR choose a color from color picker as your background --> when clicked, the color will go through the changeBackground function. */
      $(".chooseColor").hide();
    $(".chooseNature").show();

  }
    function backgroundYo() {
      if ($(".nature").is(":visible")) {
      $(".nature").hide();
    $(".color").hide();
    $("#color").hide();
    $("#nature").hide();
  }
      else {
      $(".nature").show();
    $(".color").show();
    $("#color").show();
    $("#nature").show();
  }
}

    var change = function () {
      console.log(i);
      if (i < 8) {
      i++;
    $("#photos").attr('src', photos[i]);
      } else {
      i = 0;
    $("#photos").attr('src', photos[i]);
  }
};
    function changeColor() {
      $(".chooseColor").show();
    $(".chooseNature").hide();

  }
    jQuery('.option').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option2').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option3').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option4').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option5').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option6').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option7').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option8').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option9').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option10').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option11').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option12').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option13').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option14').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option15').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });
    jQuery('.option16').on('click', function () {
      var hexCode = $(this).css("background-color");
    changeBackgroundColor(hexCode);
  });

    $(".exit").click(function () {
      $(".chooseColor").hide();
    $(".chooseNature").hide();
  });
    $(".getstarted").click(function () {
      if (z != 9) {
      $(".getstarted").css("height", "35px");
    $(".getstarted").css("margin-top", "410px");
    $(".getstarted").css("margin-left", "49%")
    $("." + pageNames[z]).hide();
    z++;
    $("." + pageNames[z]).show();
    $(".logo2").hide();
  }
      else {
      $(".intro").hide();
  }
});
    function skip() {
      $(".intro").hide();
    $("." + pageNames[z]).hide();
  }
    function back() {
      $("." + pageNames[z]).hide();
    $("." + pageNames[z - 1]).show();
    }