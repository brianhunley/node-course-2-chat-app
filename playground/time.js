// Unix Epoch - Jan 1st 1970 00:00:00am
// positive and negative numbers

const moment = require('moment');

const date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// challenge

// 10:35 am

const date_2 = moment();
console.log(date_2.format('h:mm a'));
console.log(date_2.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// passing a timestamp to moment
const createdAt = 1234;
var date_3 = moment(createdAt);
console.log(date_3.format("dddd, MMMM Do YYYY, h:mm:ss a"));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);
var date_4 = moment(someTimestamp);
console.log(date_4.format("dddd, MMMM Do YYYY, h:mm:ss a"));


