class Utils {
    static formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    static formatTime({ hr, min = 0, sec = 0, format = 'HH:MM:SS' }) {
        hr = '' + hr;
        min = '' + min;
        sec = '' + sec;

        if (hr.length < 2) hr = '0' + hr;
        if (min.length < 2) min = '0' + min;
        if (sec.length < 2) sec = '0' + sec;
        if (format === 'HH:MM:SS') {
            return [hr, min, sec].join(':');
        } else if (format === 'HH:MM') {
            return [hr, min].join(':');
        }
    }
}

export default Utils;
