const randomQuote = () => {
	$.ajax({
		url: "https://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function (quoteData) {
			if (quoteData.quoteAuthor === "") {
				quoteData.quoteAuthor = "Unknown";
			}

			$("#randomQuote").html(
				"<p id='randomQuote'>" +
					quoteData.quoteText +
					"<i class='pt-5'> " +
					"<br> - " +
					quoteData.quoteAuthor +
					"</i></p>"
			);
		},
	});
};

randomColor = () => {
	var colors = [
		"#34495e",
		"#6C7A89",
		"#ABB7B7",
		"#336E7B",
		"#8E44AD",
		"#674172",
		"#D2527F",
		"#96281B",
		"#34495e",
		"#16a085",
		"#f39c12",
		"#d35400",
		"#c0392b",
		"#7f8c8d",
		"#8e44ad",
		"#42343d",
		"#f41fd3",
		"#ff4241",
		"#513311",
	];
	var choosedColor = colors[Math.floor(Math.random() * 20)];
	return choosedColor;
};

$(() => {
	randomQuote();
	randomColor();
});

$("#click").click(() => {
	$("p").css({
		color: randomColor(),
		transition: "all linear .2s",
	});
	randomQuote();
});

const Clock = () => {
	// declaring the vars
	var clock = new Date();
	var hours = clock.getHours();
	var mint = clock.getMinutes();
	var sec = clock.getSeconds();

	// adding AM & PM to clock
	var amPm = hours < 12 ? "AM" : "PM";

	// converting hours to 12-hour format
	hours = hours > 12 ? hours - 12 : hours;

	hours = ("0" + hours).slice(-2);
	mint = ("0" + mint).slice(-2);
	sec = ("0" + sec).slice(-2);

	document.getElementById("time").innerHTML =
		hours + ":" + mint + ":" + sec + " " + amPm;

	var t = setTimeout(Clock, 1000);
};

const Greet = () => {
	var today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		document.getElementById("greet").innerHTML = "Good Morning!";
	} else if (hour < 18) {
		document.getElementById("greet").innerHTML = "Good Afternoon";
	} else {
		document.getElementById("greet").innerHTML = "Good Evening";
	}
};

Greet();
