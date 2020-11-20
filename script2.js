if (window.location.href == "https://nguyenhafood.vn/") {

    var docHTML = `        <div id="ContainerLandingPage">
<div>
    <div id="CancelLandingPage">
        <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828774.svg"
            onclick="removeLandingPage()" />
    </div>

    <div id="ButtonLandingPage">
        <a href="https://nguyenhafood.vn/blog/nganh-xot/deal-hot-cung-xot-kewpie-451">
            <div id="LogLandingPage"> 
                <img src="https://company.softwareviet.vn/uploads/9/website.jpg" alt="">
                TẠI WEBSITE</div>
        </a>
        
        <a href="http://m.me/118528615500419?ref=khuyen_mai_hap_dan">
            <div id="MessengerLandingPage">
                <img src="https://company.softwareviet.vn/uploads/9/facebook.jpg" alt=""> TẠI FACEBOOK</div>

        </a>
    </div>
</div>
</div>
`


    var docCSS = `:root{
    --heightImg: calc(35vw * 1079 / 1080);
    --heightImgSmall: calc(60vw * 1079 / 1080);
    --heightImgSmaller: calc(95vw * 1079 / 1080);
}

#ContainerLandingPage {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    z-index: 999999;
}
#ContainerLandingPage>div{
    display: flex;
    position: relative;
    width: 35vw;
    height: var(--heightImg);
    background-image: url(https://company.softwareviet.vn/uploads/9/background.jpg);
    background-position: center;
    background-size: cover;
}
#CancelLandingPage{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 9999;
}
#CancelLandingPage img{
    max-width: 50px;
    max-height: 50px;
    margin-top: 3%;
    margin-right: 3%;
    border-radius: 50%;
    background-color: #eee0e8;
    padding: 2%;

    box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.3)
}
#MainLandingPage{
    position: relative;
}
#MainLandingPage img{
    width: 100%;
}
#ButtonLandingPage{
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    bottom: 3%;
    
    width: 100%;
    height: 100%;

}
#ButtonLandingPage img{
    width: 15%;
    margin-right: 2%;
}
#ButtonLandingPage>a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 10%;

    text-decoration: none;
    color: black;
    font-weight: bold;
}


#LogLandingPage, #MessengerLandingPage{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 20px;
    transition: 0.5s;
    background-color: #eee0e8;
    border-color: yellow;

    box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.3);
    
    text-align: center;
    font-size: 22px;
}
#LogLandingPage:hover, #MessengerLandingPage:hover{
    border-width: 5px;
}


@media (max-width: 1000px){
    
    #ContainerLandingPage>div{
        width: 60vw;
        height: var(--heightImgSmall);
    }
    #CancelLandingPage img{
        max-width: 40px;
        max-height:40px;
        margin-top: 3%;
        margin-right: 3%;
    }
    #LogLandingPage, #MessengerLandingPage{
        font-size: 18px;
    }
}
@media (max-width: 600px){
    #ContainerLandingPage>div{
        width: 95vw;
        height: var(--heightImgSmaller);
    }
    #CancelLandingPage img{
        max-width: 40px;
        max-height: 40px;
        margin-top: 3%;
        margin-right: 3%;
    }
    #LogLandingPage, #MessengerLandingPage{
        font-size: 16px;
    }

}
`

    function removeLandingPage() {
        var idLandingPage = document.getElementById("ContainerLandingPage");
        idLandingPage.remove();
    }   

    var body = document.getElementsByTagName("body");
    body[0].innerHTML += docHTML;

    var head = document.getElementsByTagName("head");
    var style = document.createElement("style");
    style.innerText = docCSS;
    head[0].appendChild(style);
}