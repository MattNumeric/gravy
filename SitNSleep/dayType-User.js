var date = new Date();
var thisd = date.getDay();
var dt = "Weekday";
if (thisd == 6 || thisd ==
    0) {
    dt = 'Weekend'
};

return dt;