function spin(){
    var min = 1000; //min degree
    var max = 4000; //max degree
    var deg = Math.floor(Math.random() * (max - min)) + min; //random degree
    document.getElementById('box').style.transform = "rotate("+deg+"deg)"; //draai functie
}

