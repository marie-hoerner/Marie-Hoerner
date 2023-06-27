var form = document.getElementsByTagName("form");
		
document.addEventListener("change", showTotal);

function showTotal() {
	var treatelem = document.getElementsByClassName("treatClass");
	var tipelem = document.getElementsByClassName("tipClass");
	var $total = 0;
	var $tip = 0
	for (i=0, length=3; i<length; i++) {
		if (treatelem[i].checked) {
			var $treat = Number(treatelem[i].value);
		}
		if (tipelem[i].checked) {
			var $tip = Number(tipelem[i].value);
		}
		if ($treat>0 && $tip==0) {$total = $treat}
		else if ($tip>0 && $treat>0) {
			$total = $treat + $treat*$tip;
		}
	}

	console.log($total);
	var totalTxt = document.getElementById("totTxt");
	$total = $total.toFixed(2)
	totalTxt.innerHTML = "TOTAL: $" + $total;
}