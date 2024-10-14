let imgArray = ["image/dog.avif", "image/dog2.avif", "image/dog3.avif", "image/dog4.avif", "image/dog5.avif", "image/dog6.avif"];
let mainImgArray = [...imgArray, ...imgArray]
let tempArr = [];
let countImage =0;
let pushingImgArr=[];
let clickCounter=0;
let timer=60;
let matchImg=0;

let start = document.querySelector("#btn");
let container = document.querySelector("#container");
let flipFrontImg = document.querySelectorAll(".flip-card-front img");
let flipCardsBack = document.querySelectorAll(".flip-card-back");
let Result = document.querySelector("#result");
let times = document.querySelector("#decreTime");



start.addEventListener("click", function () {
    start.style.display = "none";
    container.style.display = "block";
    setImage()
    resetGame()
});


let setImage=(() => {
    for (let i = 0; i < mainImgArray.length; i++) {
        let image = document.createElement("img")
        image.src = mainImgArray[getRandomNum()]
        flipCardsBack[i].append(image)
    }
})

flipFrontImg.forEach(item => {
    item.addEventListener("click",function(){
        
        countImage++
        clickCounter++
          item.parentElement.parentElement.classList.add("back-flip")
         pushingImgArr.push( item.parentElement.nextElementSibling.children[0])
        //  console.log(pushingImgArr);
         
        if(countImage>1){
            if(pushingImgArr[0].src===pushingImgArr[1].src){
                   pushingImgArr.length=0;
                   countImage=0;
                   matchImg++
                }
                else{
                    setTimeout(() => {
                    pushingImgArr.forEach(items => {
                       items.parentElement.parentElement.classList.remove("back-flip") 
                    });
                    pushingImgArr.length=0;
                   countImage=0;
                },1000);
                }
             }

         setInterval(timer)

 })
    
  });
   
  function resetGame (){
    let Interval = setInterval(() => {
       times.innerHTML=--timer

             if(timer===0){
                 container.style.display="none"
                 Result.style.display="block"
                 let showClick=document.createElement("h2") 
                 showClick.innerHTML=`click is ${clickCounter} and match is ${matchImg} `
                 Result.append(showClick)
                 clearInterval(Interval)
             }
       }, 1000);
  }



function getRandomNum() {
    let randomIndex = Math.floor(Math.random() * mainImgArray.length);
    if (tempArr.includes(randomIndex)) return getRandomNum()
    else {
        tempArr.push(randomIndex)
        return randomIndex
    }
}

