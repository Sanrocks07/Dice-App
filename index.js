var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
var dicee1 = "images/dice" + randomNumber1 + ".png";
var dicee2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",dicee1);
document.querySelector(".img2").setAttribute("src",dicee2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";   
}