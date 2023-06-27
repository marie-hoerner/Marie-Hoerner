function banner() {
	var adDiv = document.getElementById("advDiv");
	var picElem = document.createElement("img");
	picElem.src = 'bannerImg.png';
	picElem.classList.add("bannerPicStyle");
	var txtElem = document.createElement("h3");
	txtElem.classList.add("bannerStyle")
	txtElem.innerHTML = 'TRY IT!</br>Submit a <a href="request.html">request</a> now!'
	var closeElem = document.createElement("BUTTON");
	closeElem.innerHTML = 'X';
	closeElem.setAttribute("id", "bannerCloseButton");
	closeElem.classList.add("bannerClose");
	adDiv.appendChild(picElem);
	adDiv.appendChild(txtElem);
	adDiv.appendChild(closeElem);
}

setTimeout (banner, 5000)
setTimeout (closeOption, 5001) 

function closeOption() {
	var closeNow = document.getElementById("bannerCloseButton");
	closeNow.addEventListener("click", closeFunction);
}

function closeFunction() {
	var adDiv = document.getElementById("advDiv");
	adDiv.style.display = "none";
}

/*	var imgArray = [
    "https://openforbusiness.opentable.com/wp-content/uploads/sites/100/2019/03/Pimento-Cheese-Nachos_Tupelo-Honey2-1000x400.jpg", "https://resdiaryportal.wpengine.com/wp-content/uploads/2018/11/Chisou-2000x1327.jpg", "https://cdn.vox-cdn.com/thumbor/qVSQiGX7JTADqvVKULLVVnB_JcY=/0x299:4543x2571/fit-in/1200x600/cdn1.vox-cdn.com/uploads/chorus_asset/file/9372331/tgifriday_8602.jpg", "https://www.littlestepsasia.com/sites/default/files/article/hero/Family-Friendly-Restaurants-Hong-Kong.png"
	]
	var randomImg = imgArray[Math.floor(Math.random()*imgArray.length)];
	document.getElementById("adpic").src = randomImg;
	var adHeight = randomImg.height;
	document.getElementById("advDiv").height = adHeight;
	*/