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
    }else{
        if(pass < 10){
            document.querySelector("#passes").textContent = "●";
        }else if(pass < 100){
            document.querySelector("#passes").textContent = "●●";
        }else if(pass < 1000){
            document.querySelector("#passes").textContent = "●●●";
        }else if(pass < 10000){
            document.querySelector("#passes").textContent = "●●●●";
        }else if(pass < 100000){
            document.querySelector("#passes").textContent = "●●●●●";
        }
    }
}

function press_S(){
    document.querySelector("#moji").textContent = "パスワード認証";
    document.querySelector("#passes").textContent = "SUCCES";
    true_pass = true_pass + 1;
    //window.location.href = "main.html";
    if(true_pass > 5){
        window.location.href = "main.html";
    }
}

function press_E(){
    document.querySelector("#passes").textContent = "ERROR";
    pass  = 0;
    true_pass = 0;
}
