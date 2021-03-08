var btnNews = document.getElementById("btnNews");
var btnToTop = document.getElementById("btnScrollToTop");
var newsDiv = document.getElementById("news");


btnNews.onclick = function showImage(){
    btnToTop.style.opacity = "0"; 

    var imgNews = document.createElement("img");
    imgNews.src = "images/gallery/fulls/Harrison_FirstPlace.jpg";
    imgNews.id = "imgNews";
    imgNews.style = "position:fixed; right:10%;bottom:10%;z-index:5;opacity:1;background";

    var btnClose = document.createElement("button");
    btnClose.id = "btnClose";
    btnClose.style = "position:fixed; right:5%;top:3px;z-index:5;opacity:1;";
    btnClose.className = "button primary small wide smooth-scroll-middle";
    btnClose.textContent = "Close";
    btnClose.addEventListener("click", e =>{
        resetDiv(imgNews,btnClose);
    })

    window.onscroll = function(){
        resetDiv(imgNews,btnClose);
    }
    
    newsDiv.append(imgNews);
    newsDiv.append(btnClose);

    console.log("Clicked");
    //Make Background soft
    //Display exit
}

function resetDiv(imgNews, btnClose){
    //Close Img and Button 
    imgNews.style.opacity = "0";
    btnClose.style.opacity = "0";
    imgNews.remove();
    btnClose.remove();
    //Display BtnToTop
    btnToTop.style.opacity = "1";
}