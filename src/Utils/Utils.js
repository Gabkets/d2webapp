const formatDate = (date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var hs = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

    return {
        completo: dd + '/' + mm + '/' + yyyy + ' ' + min + ':' + hs,
        tiempo: hs + ':' + min,
        fecha: dd + '/' + mm + '/' + yyyy,
        fechaRaw: yyyy + '-' + mm + '-' + dd
    } 
}

const formatDateFromParse = (date) => {
    let datetime = {};
    const dateTime = date.split(', ');
    const escapedDate = dateTime[0].split('/');
    const escapedTime = dateTime[1].split(' ');    
    const escapedMin = dateTime[1].split(':')[1];
    const escapedHs = dateTime[1].split(':')[0];
    const hsPm = parseInt(escapedHs) - 12;
    const hsAm = parseInt(escapedHs) + 12;

    dateTime.date = escapedDate[1] + '/' + escapedDate[0] + '/' + escapedDate[2];
    if(escapedTime[1] === 'AM' && parseInt(escapedHs) === 12){
        dateTime.time = '0' + hsPm.toString() + ':' + escapedMin + ' ' + escapedTime[1];
    } else if ( escapedTime[1] === 'PM' && parseInt(escapedHs) < 12 ){
        dateTime.time = hsAm.toString() + ':' + escapedMin + ' ' + escapedTime[1]; 
    } else {
        dateTime.time = escapedHs + ':' + escapedMin  + ' ' + escapedTime[1]; 
    } 

    return dateTime;
}

const reorderDate = (locale) => {
    locale.forEach(country => {
        country.dateFormated = formatDateFromParse(country.datetime);
    })

    return locale;
}

const discorDateField = (dates) => {
    let stringedDates = '';
    dates.forEach((date) => {
        stringedDates = stringedDates + date.dateFormated.date + ' | ' + date.dateFormated.time + ' ' + date.flag + '\n';
    });

    return stringedDates;
}

export { reorderDate, formatDateFromParse, formatDate, discorDateField };