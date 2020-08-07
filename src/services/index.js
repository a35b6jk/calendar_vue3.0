import {
    getDayDate,
    getMonthDate,
    getYearDate
} from './request';

import {
    formatChsDate,
    mapFormatChsDate
} from '@/lib/utils'

export default async (store, field, date) => {
    let data = null;
    switch(field){
        case 'day':
            data = await getDayDate(date);
            break;
        case 'month':
            data = await getMonthDate(date);
            break;
        case 'year':
            data = await getYearDate(date);
            break;
        default:
            break;
    }
    if(data.error_code !== 0){
        return
    }

    let res = null;

    switch(field){
        case 'day':
            res = data.result.data;
            res.date = formatChsDate(res.date, 'day');
            res['year-month'] = formatChsDate(res['year-month'], 'month');
            break;
        case 'month':
            res = data.result.data.holiday_array;
            res = mapFormatChsDate(res, 'festival');
            break;
        case 'year':
            res = data.result.data.holiday_list; 
            res = mapFormatChsDate(res,'startday');
            break;
    }
    //console.log('request', field, res)
    store.commit('setData', {
        field,
        data: res
    })    

}