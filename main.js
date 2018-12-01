let choosedMonth = document.getElementById('month');
let listMonth = document.querySelectorAll("select option");
let radio = document.querySelector(".radio");
let textSection = document.querySelector(".text");

let today = new Date();
let monthNowNum = today.getMonth();
let monthNameNow = listMonth[monthNowNum].value;
let yearNow = today.getFullYear();
let monthForPrint = monthNameNow;
let yearForPrint = yearNow;
/* set this month as firth in options */
listMonth[monthNowNum].setAttribute("selected", true);

console.log(`monthNameNow is ${monthNameNow}. yearNow is ${yearNow}`);
function fillText(month, year){
	textSection.innerHTML = "";
	let monthAndYear = ` ${month} ${year}`;
	let maxDay = 31;
	if (month === "April" || month === "June" || month === "September" || month === "November") maxDay= 30;
	else if (month === "February") maxDay = 28;
	for (let i=1; i<=maxDay; i++){
		let h3 = document.createElement("h3");
		let ol = document.createElement("ol");
		for (var j = 0; j <= 3; j++) {
			let li = document.createElement("li");
			ol.appendChild(li);
		}
		h3.textContent=`${i} ${monthAndYear}`;
		textSection.appendChild(h3);
		textSection.appendChild(ol);
	};
}
choosedMonth.addEventListener("change", function () {
	let monthIndex = this.selectedIndex;
	console.log(listMonth[monthIndex].value);
	fillText(listMonth[monthIndex].value, yearForPrint);
});
radio.addEventListener("change", function (e) {
	let startMonthRadio = e.target.value;
	if (startMonthRadio === "next") {
		monthForPrint = Number(choosedMonth.selectedIndex + 1);
		if (monthForPrint>=12) {
			monthForPrint -= 12; 
			yearForPrint = yearNow + 1;
		}
		console.log(monthForPrint);
	} else if (startMonthRadio === "this") {
		monthForPrint = monthNowNum;
		yearForPrint = yearNow;
	}
	fillText (listMonth[monthForPrint].value, yearForPrint);
});

fillText(monthForPrint, yearNow);