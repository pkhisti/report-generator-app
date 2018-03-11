export const displayDate = (val) => {
    let d = new Date(val);
    if(Math.floor(val) === val) return val;
    if(!isNaN(d.valueOf())) {
        let date = new Date(val);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return day + '/' + month + '/' + year
    } else {
        return val;
    }
}