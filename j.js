let food=70;  //Зміна їжі
let sleep=70; //Зміна сну
let happy=70; //Зміна щастя
let clic=0; //Зміна кліків
let startClicker=false; //Флажок кліків 
let interval1, interval2, interval3; //Збереження часу
let knop1,knop2,knop3,knop4,knop5,knop6; //Зміні для перевірки нажатих кнопок
let activAchNo;//Зміна щоб зрозуміти, що досягнення досягнуте
let activAchHz=false,actiAchNo=false,actiAchIzv=false,actiAchKnop=false,activAchZor=false,activAchClic=false;//Прапорці щоб не повторювалися досягнення
let StarGamePrapor = true; //Прапорець запуску гри
//Кнопка старта гри 
function startGame() {
    if (StarGamePrapor == true) {
        StarGamePrapor=false
        
        interval1 = setInterval(minuc, 5000); //Запуск часу функції minuc
        interval2 = setInterval(nactroi, 400); //Запуск часу функції nactroi
        interval3 = setInterval(clicAkt, 100); //Запуск часу функції clicAkt

        //Підняття флажкв, для запуску кліків
        startClicker = true;

        //Зміна кольору у кнопки Start Game
        document.getElementById("start-btn").style.backgroundColor = "plum"
   
    }
}

//Функція виклику звука для кнопок покупки
function playSonClicKnop() {
    document.getElementById("SonClicKnop").currentTime = 0;
    document.getElementById("SonClicKnop").play()
}


function SonAch() {
     document.getElementById("SonAch").currentTime = 0;
    document.getElementById("SonAch").play()
    
}


//Функція для перевірка досягнень та стан кнопок покупки 
function clicAkt(){

    //Первірка досягнення Зоря щастя
if(food==100&&sleep==100&&happy==100&&activAchZor==false){
    SonAch()
    document.getElementById("achZor").classList.remove("locked2");
    alert("Отримана ачивка 'Зоря щастя'")
    activAchZor=true
}

    //Первірка досягнення Мільйонер
if(clic>=1000&& activAchClic==false){
    SonAch()
    document.getElementById("achMili").classList.remove("locked2");
    alert("Отримана ачивка 'Мільйонер'")
activAchClic=true
}
//Первірка досягнення Ізвєрг
if(food<=0||sleep<=0||happy<=0 && actiAchIzv==false){
    SonAch()
    document.getElementById("achIzv").classList.remove("locked2");
    alert("Отримана ачивка 'Ізвєрг'")
    actiAchIzv=true
}
//Первірка досягнення Кнопка
if(knop1==true && knop2==true && knop3==true && knop4==true && knop5==true && knop6==true && actiAchKnop==false){
    SonAch()
    document.getElementById("achKnop").classList.remove("locked2");
    alert("Отримана ачивка 'Кнопка'")
    actiAchKnop=true;
}
//Первірка досягнення Не хочу
if (activAchNo == true && actiAchNo == false) {
    SonAch()
    document.getElementById("achNo").classList.remove("locked2");
    alert("Отримана ачивка 'Не хочу'")
    actiAchNo=true
}
//Первірка досягнення Хз
if(food==50&&sleep==50&&happy==50 && activAchHz==false){
    SonAch()  
    document.getElementById("achHz").classList.remove("locked2");
    alert("Отримана ачивка 'Хз'")
    activAchHz=true
}

//Первірка кліків для блокування або розблокування кнопок покупки за два кліка
    if(clic>=2){
        document.getElementById("foodd").classList.remove("locked");
        document.getElementById("sleepp").classList.remove("locked");
        document.getElementById("game").classList.remove("locked");
    }else{
        document.getElementById("foodd").classList.add("locked");
        document.getElementById("sleepp").classList.add("locked");
        document.getElementById("game").classList.add("locked");
    }
    //Первірка кліків для блокування або розблокування кнопок покупки за п`ять кліків
    if(clic>=5){
        document.getElementById("food1").classList.remove("locked");
        document.getElementById("sleep1").classList.remove("locked");
        document.getElementById("game1").classList.remove("locked");
    }else{
        document.getElementById("food1").classList.add("locked");
        document.getElementById("sleep1").classList.add("locked");
        document.getElementById("game1").classList.add("locked");
    }
}
//Функція для начислення кліків
function clicker(){
if(startClicker==true){
clic++
document.getElementById("rez").innerHTML="Кліки: " + clic

    //воспроизведение звука кліка
    document.getElementById("SonClic").currentTime = 0;
    document.getElementById("SonClic").play()
}

}

//Фунція для мінусування їжі, Сну та розваги
function minuc(){
    food-=5
sleep-=5
happy-=10

    //Вивід результату 
document.getElementById("sleep").innerHTML="Cон: "+sleep+"%"
    document.getElementById("food").innerHTML="Їжа: "+food+"%"
    document.getElementById("happy").innerHTML="Розвага: "+happy+"%"
}

//Превірка на смерть Боні, збросу на початок гри, зміна стану залежно від показників
function nactroi(){
    if(food<=0||sleep<=0||happy<=0){
    if(food<=0){
        alert("Ваш Боні помер від голоду")
        StarGamePrapor = true; //прапорець для запуску гри  
    }else if(sleep<=0){
        alert("Ваш Боні помер від недосипу")
        StarGamePrapor = true; //прапорець для запуску гри  
    }else if(happy<=0){
        alert("Ваш Боні помер від суму")
        StarGamePrapor = true; //прапорець для запуску гри  
    }
    
        
        //Блокування кліків
   startClicker==false

        //Встановлення початкових змін
    food=70;
    sleep=70;
    happy=70;

    clic = 0;
    document.getElementById("rez").innerHTML="Кліки: " + clic

//зупинення часу
    clearInterval(interval1);
clearInterval(interval2);
clearInterval(interval3);
//Зіна кольору кнопки старт
    document.getElementById("start-btn").style.backgroundColor="purple"

        
        //Блокування кнопок покупки
    document.getElementById("food1").classList.add("locked");
        document.getElementById("sleep1").classList.add("locked");
        document.getElementById("game1").classList.add("locked");

        document.getElementById("foodd").classList.add("locked");
        document.getElementById("sleepp").classList.add("locked");
        document.getElementById("game").classList.add("locked");
}

//Зміна стану Боні, Залежно від показників
if(food>=75&& sleep>=75&&happy>=75){
document.getElementById("photo").src="image/bonyHappy.png";
}
else if(food<=60){
    document.getElementById("photo").src="image/bony кушать [Recovered].png";
}

else if(sleep<=60){
    document.getElementById("photo").src="image/bony спать.png";
}

else if(happy<=60){
    document.getElementById("photo").src="image/bony грусний.png";
}


else{
    document.getElementById("photo").src="image/bony zv 2.png";
}


//Вивединня показників
document.getElementById("sleep").innerHTML="Cон: "+sleep+"%"
    document.getElementById("food").innerHTML="Їжа: "+food+"%"
    document.getElementById("happy").innerHTML="Розвага: "+happy+"%"
    
    

}


//Фунція кнопки харчування уровня 1
function eat1() {
    //перевірка та виповненян фунції
    if(food<=95 && clic>=2){
    clic-=2
    food=food+5
    document.getElementById("food").innerHTML="Їжа: "+food+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
    knop1=true;//підняття прапорця
    }//Переіврка для отримання досягнення 
    else if(food>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()//Воспроизведение звука нажатия 
}
//Фунція кнопки харчування уровня 2
function eat2(){
    if(food<=85 && clic>=5){
        clic-=5
    food=food+15
    document.getElementById("food").innerHTML="Їжа: "+food+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
    
    knop2=true;
    }

    else if(food>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()
}
//Фунція кнопки сну уровня 1
function sleep1(){
    if(sleep<=95 && clic>=2){
        clic-=2
    sleep=sleep+5
    document.getElementById("sleep").innerHTML="Cон: "+sleep+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
    knop3=true;
    }

    else if(sleep>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()
}
//Фунція кнопки сну уровня 2
function sleep2(){
    if(sleep<=85 && clic>=5){
        clic-=5
    sleep=sleep+15
    document.getElementById("sleep").innerHTML="Cон: "+sleep+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
   
    knop4=true;
    }

    else if(sleep>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()
}
//Фунція кнопки розваги уровня 1
function play1(){
    if(happy<=95 && clic>=2){
        clic-=2
    happy=happy+5
    document.getElementById("happy").innerHTML="Розвага: "+happy+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
    
    knop5=true;
    }

    else if(happy>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()
}
//Фунція кнопки розваги уровня 2
function play2(){
    if(happy<=85 && clic>=5){
        clic-=5
    happy=happy+15
    document.getElementById("happy").innerHTML="Розвага: "+happy+"%"
    document.getElementById("rez").innerHTML="Кліки: " + clic
   
    knop6=true;
    }
    
    else if(happy>=100&& clic>=2){
        activAchNo=true
    }
    
    playSonClicKnop()
}

//Фунція для воспроизведение звука зміни фона
function ZmFon() {
    document.getElementById("SonFonZm").currentTime = 0;
    document.getElementById("SonFonZm").play()
}


//Зміна  фону
function fon1() {
    ZmFon()
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor="rgb(124, 93, 124)"
}
//Зміна  фону
function fon2() {
    ZmFon()
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage="url(https://a-static.besthdwallpaper.com/purple-windows-11-background-wallpaper-1920x1080-106351_48.jpg)"
}
//Зміна  фону
function fon3() {
    ZmFon()
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage="url(https://img.freepik.com/free-vector/gradient-liquid-abstract-background_23-2148930549.jpg?semt=ais_hybrid&w=740&q=80)"
}
//Зміна  фону
function fon4() {
    ZmFon()
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage="url(https://fonssite.wordpress.com/wp-content/uploads/2015/11/windows-10-microsoft-violet.jpg)"
}
//Зміна  фону
function fon5() {
        ZmFon()
        
        document.body.style.backgroundColor = "";
    document.body.style.backgroundImage="url(https://st4.depositphotos.com/1031174/20525/i/450/depositphotos_205251712-stock-illustration-closeup-purple-textured-background.jpg)"
}
//Зміна  фону
function fon6() {
    ZmFon()
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage="url(https://pixnio.com/free-images/2025/05/31/2025-05-31-13-39-19-1344x753.png)"
}
//звук ачивки
function sonAch() {
    document.getElementById("SonAch").currentTime = 0;
    document.getElementById("SonAch").play()
}

//Сповіщення про досягнення ачивкі 
function achZor(){
    alert("Досягнення показника — їжі, радоті і сону — 100%")
}

function achMili(){
    alert("Наклікайте 1000 кліків")
}

function achKnop(){
    alert("Нажміть на всі кнопки")
}

function achIzv(){
    alert("Дайте Боні померти (НЕ ТРЕБААА)")
}

function achNo(){
    alert("Спробуйте підвищити любий показник — вище 100%")
}

function achHz(){
    alert("Досягнення показника — їжі, радості і сону — 50%")
}