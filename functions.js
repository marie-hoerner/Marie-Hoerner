function zipcheck() {
	var zipElem = document.getElementById("zipcode");
	var zip = zipElem.value;
	var response = document.getElementById("response");
	if (zip > 20000) {
		response.innerHTML = "We've got your area covered!"
		response.style.color = "green";
	}
	else {
		response.innerHTML = "Sorry, we haven't expanded to that area yet."
		response.style.color = "red";
	}
}