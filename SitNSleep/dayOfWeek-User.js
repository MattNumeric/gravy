var date = new Date();
var days = ['Sunday',
            'Monday', 'Tuesday',
            'Wednesday', 'Thursday',
            'Friday', 'Saturday'
        ];
var thisd = date.getDay();
var dow = days[thisd];
return dow;