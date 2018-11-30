let section = document.querySelector("section");
let choosedMonth = document.getElementById('month');
let listMonth = document.querySelectorAll("select option");
let today = new Date();
let monthNow = today.getMonth();
let yearNow = today.getFullYear();
monthNow = listMonth[monthNow].value;
console.log(`monthNow ${monthNow} yearNow ${yearNow}`);
function fillText(month){
	section.innerHTML = "";
	let monthAndYear = ` ${month} ${yearNow}`;
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
		section.appendChild(h3);
		section.appendChild(ol);
	};
}
choosedMonth.addEventListener("change", function () {
	let month = this.selectedIndex;
	console.log(listMonth[month].value);
	fillText(listMonth[month].value);
})
fillText(monthNow);