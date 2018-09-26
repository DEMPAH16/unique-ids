const uid = require('uid');
const uuid = require('uuid');
const shortid = require('shortid');
const uniqid = require('uniqid');

console.log(uid());
console.log(uid(15));
console.log(uuid.v1());
console.log(shortid.generate());
console.log(uniqid());
console.log(uniqid('hello-'));