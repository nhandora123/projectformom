
    function removeLandingPage() {
        var idLandingPage = document.getElementById("LandingPage");
        idLandingPage.remove();
    }
    var body = document.getElementsByTagName("body");

    var nodeLangdingPage = document.createElement("div");
    nodeLangdingPage.setAttribute("id", "LandingPage");
    nodeLangdingPage.style.cssText = "position: fixed;display: flex;justify-content: center;align-items: center;top: 0;left: 0;background-color: rgba(0, 0, 0, 0.7);width: 100%;height: 100vh;z-index: 999999;";

    var nodeContainer = document.createElement("div");
    nodeContainer.style.width = "50%";

    var nodeLink = document.createElement("a");
    nodeLink.style.width = "100%";
    nodeLink.href = "https://nguyenhafood.vn/blog/nganh-xot/deal-hot-cung-xot-kewpie-451"
    nodeContainer.appendChild(nodeLink);

    var nodeBanner = document.createElement("img");
    nodeBanner.src = "./img/popup-sponsor.webp";    
    nodeBanner.style.width = "75%";
    nodeLink.appendChild(nodeBanner);

    var nodeButtonCancel = document.createElement("img");
    nodeButtonCancel.src = "https://www.flaticon.com/svg/static/icons/svg/1828/1828774.svg";
    nodeButtonCancel.style.cssText = " position: absolute; width: 3%; right: 37%; margin: 1%; cursor: pointer;";

    nodeButtonCancel.setAttribute("onclick", "removeLandingPage()");

    nodeContainer.appendChild(nodeButtonCancel);

    nodeContainer.appendChild(nodeLink);
    nodeLangdingPage.appendChild(nodeContainer);


    body[0].appendChild(nodeLangdingPage);

