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
