import {
    getDayDate,
    getMonthDate,
    getYearDate
} from './request';

export default async (field, date) => {
    let data = null;
    switch(field){
        case 'day':
            data = await getDayDate(date);
            break;
        case 'month':
            data = await getMonthDate(date);
            break;
        case 'month':
            data = await getYearDate(date);
            break;
        default:
            break;
    }
    return data;
}