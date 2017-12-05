var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	displayCalendar: function() {
		var ele = document.getElementById("calendar");
		var calendarText = "<table class = 'table table-condensed'>";
		calendarText +=this.header;
		calendarText = calendarText + "<tr>"
		for (var i=0; i<31; i++) {
			if (i%7 == 0 ) {
				calendarText = calendarText + "</tr><tr>";
			}
			calendarText = calendarText + "<td>" + (i+1) + "</td>";
		};
		calendarText = calendarText + "</tr>";
		calendarText += "</table>"
		ele.innerHTML = calendarText;
	}

}
calendar.displayCalendar();