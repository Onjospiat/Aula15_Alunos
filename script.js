var language = "pt-BR";

function changeText(){
    let x = document.getElementsByClassName("pt-BR");
    let y = document.getElementsByClassName("en");
    console.log(x);
    console.log(y);
    let i=0;
    if(language == "pt-BR"){
        language = "en";
        for(i=0;i<x.length;i++){
            x[i].style.display = "block";
        }
        for(i=0;i<y.length;i++){
            y[i].style.display = "none";
        }
    }
    else if(language == "en"){
        language = "pt-BR";
        for(i=0;i<x.length;i++){
            x[i].style.display = "none";
        }
        for(i=0;i<y.length;i++){
            y[i].style.display = "block";
        }
    }
}

window.changeText = changeText;





for(init;condition;update){}