        //============================================================================================
//JSONデータの読み込みと出力
//============================================================================================
$(function(){
    $.ajax({ // json読み込み開始
        type: 'GET',
        url: 'http://150.95.181.32/fopen/twitter/api/home_timeline',
        dataType: 'json'
        }).then(
        function(json) { // jsonの読み込みに成功した時
            console.log('成功');
            for(let i in json){
                if(json[i].entities.user_mentions.length === 0){//独り言
                    $("#tweet").append("<li>"+ json[i].text +"</li>");
                }else if(json[i].retweeted_status !== undefined){//RT
                    $("#re_tweet").append("<li>"+ json[i].text +"</li>");
                }
            }
        },
        function() { //jsonの読み込みに失敗した時
            console.log('失敗');
        }
    );
});
//============================================================================================
//TLとRTの表示非表示
//============================================================================================

let rt =  document.getElementById("rt_tweet_box");//RT変数
let tl =  document.getElementById("tl_tweet_box");//TL変数
rt.style.display="none";                          //RT初期非表示
document.getElementById("rt").style.background="#ccc";


$('#tl').click(function() {
    tl.style.display="block";
    rt.style.display="none";
    document.getElementById("rt").style.background="#ccc";
    document.getElementById("tl").style.background="#2f2f5a";

});
$('#rt').click(function() {
    tl.style.display="none";
    rt.style.display="block";
    document.getElementById("tl").style.background="#ccc";
    document.getElementById("rt").style.background="#2f2f5a";

});

