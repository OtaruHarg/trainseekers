var result;
var kintetsu = ["null","yet"];
var meitetsu = ["null","yet"];
var nankai = ["null","yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet"];
var kintetsu_shurui = ["null","？系"];
var meitetsu_shurui = ["null","？系"];
var nankai_shurui = ["null","50000系「ラピート」","12000系「サザン」","10000系「サザン」","11000系「りんかん」","30000系「こうや」「りんかん」","31000系「こうや」「りんかん」","2200系「天空」","ケーブルカー","8300系","3000系"
             ,"8000系","2300系","2200系","1000系","2000系","9000系","6200系","6300系","7100系","6000系"
             ,"12000系","9300系","7020系","7000系","5000系","3000系","ラッピング車両"];


function N(x){
  if(nankai[x] == "yet"){
    result = window.confirm(nankai_shurui[x] + "を発見しましたか？");
    if(result){
      nankai[x] = "check";
    }else{
      alert("キャンセルしました");
    }
  }
}
