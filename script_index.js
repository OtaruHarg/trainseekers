var pass = 0;
var true_pass = 0;

function press(x){
    true_pass = 0;
    pass = pass * 10;
    while(pass >= 100000){
        pass = pass - 100000;
    }
    pass = pass + x;
    passcheck();
}

function passcheck(){
    if(pass == 555){
        document.querySelector("#moji").textContent = "Standing by...";
        pass = 0;
    }else if(pass == 0){
        document.querySelector("#moji").textContent = "5桁のパスワードを入力してください";
        pass = 0;
    }
}

function press_S(){
    true_pass = true_pass + 1;
    window.location.href = "main.html";
    /*
    if(true_pass > 5){
        window.location.href = "main.html";
    }
    */
}

function press_E(){
    document.querySelector("#moji").textContent = "ERROR";
    pass  = 0;
    true_pass = 0;
}
