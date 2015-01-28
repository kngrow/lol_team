$(function(){
  function random(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  }
  $(document).foundation();

var lane = ['top','jungle','mid','ADC','support'];
  $('#randam_start').on('click',function(){
    var Namearraylist = $('#randam_summoner_list').val().split('\n');
      if( Namearraylist.length === 5 || Namearraylist.length === 6 ){
        var Namearray  = random(Namearraylist , 5);
        var randomlane = random(lane,5);
        console.log(Namearray);
        for(var i = 0 ; i<5 ;i++){
          $('.result_ramdom').append(Namearray[i] + '→'+ randomlane[i] + '<br>');
        }
      }
  });
  $('#tweet').on('click' , function(){
    var tweet_text = $('.result_ramdom').html().split('<br>').join('%0D%0A');

    window.open("https://twitter.com/intent/tweet?text=レーン決めました！%0D%0A" + tweet_text);
  });

});
