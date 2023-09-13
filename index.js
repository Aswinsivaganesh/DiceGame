let randomNumber1=Math.floor(Math.random()*6)+1;
let randomDice1="dice"+randomNumber1+".png";
let img1="./images/"+randomDice1;
let die1=document.querySelectorAll("img")[0];
die1.setAttribute("src",img1);

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomDice2="dice"+randomNumber2+".png";
let img2="./images/"+randomDice2;
let die2=document.querySelectorAll("img")[1];
die2.setAttribute("src",img2);

if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins";
}
else
{
    document.querySelector("h1").innerHTML="Player2 wins";
}