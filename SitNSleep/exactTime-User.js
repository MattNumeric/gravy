function exactTimeUser() {
	var date = new Date();
	
	thish = date.getHours();
	thismin = date.getMinutes();
	thismin = "0" + thismin;
	thismin = thismin.slice(-2);
	ap = "am";
	if (thish >= 12) {
	    ap = 'PM';
	    thish = thish - 12;
	};
	if (thish == 0) {
	    thish = 12;
	};
	var timestring = thish + ':' + thismin + ap;
	
	return timestring;
}