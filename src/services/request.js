// const { axiosPost } = require("../lib/http")

import { axiosPost } from '@/lib/http.js'

function getDayDate (date) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/calendar/day',
            data: { date },
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

function getMonthDate (yearMonth) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/calendar/month',
            data: { 
                'year-month': yearMonth
            },
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

function getYearDate (year) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/calendar/year',
            data: { year },
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

export {
    getDayDate,
    getMonthDate,
    getYearDate
}