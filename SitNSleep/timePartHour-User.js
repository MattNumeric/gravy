function timeParting(t, z, y) {
    dc = new Date('1/1/2000');
    f = 15;
    ne = 8;
    if (dc.getDay() != 6 || dc.getMonth() !=
        0) {
        return 'Data Not Available'
    } else {;
        z = parseInt(z);
        if (y == '2009') {
            f = 8;
            ne = 1
        };
        gmar = new Date('3/1/' + y);
        dsts = f - gmar.getDay();
        gnov = new Date('11/1/' + y);
        dste = ne - gnov.getDay();
        spr = new Date('3/' + dsts +
            '/' + y);
        fl = new Date('11/' + dste +
            '/' + y);
        cd = new Date();
        if (cd > spr && cd < fl) {
            z = z + 1
        } else {
            z = z
        };
        utc = cd.getTime() + (cd.getTimezoneOffset() *
            60000);
        tz = new Date(utc + (
            3600000 * z));
        thisy = tz.getFullYear();
        var days = ['Sunday',
            'Monday', 'Tuesday',
            'Wednesday', 'Thursday',
            'Friday', 'Saturday'
        ];
        if (thisy != y) {
            return 'Data Not Available'
        } else {;
            thish = tz.getHours();
            thismin = tz.getMinutes();
            thisd = tz.getDay();
            var dow = days[thisd];
            var ap = 'AM';
            var dt = 'Weekday';
            var mint = '00';
            if (thismin > 10) {
                mint = '10'
            }
            if (thismin > 20) {
                mint = '20'
            }
            if (thismin > 30) {
                mint = '30'
            }
            if (thismin > 40) {
                mint = '40'
            }
            if (thismin > 50) {
                mint = '50'
            }
            if (thish >= 12) {
                ap = 'PM';
                thish = thish - 12
            };
            if (thish == 0) {
                thish = 12
            };
            if (thisd == 6 || thisd ==
                0) {
                dt = 'Weekend'
            };
            var timestring = thish +
                ':' + mint + ap;
            var daystring = dow;
            var endstring = dt;
            if (t == 'h') {
                return timestring
            }
            if (t == 'd') {
                return daystring
            };
            if (t == 'w') {
                return endstring
            }
        }
    };
}

var currentYear = new Date().getFullYear();
var timepart = timeParting('h','-8',currentYear);

return timepart;