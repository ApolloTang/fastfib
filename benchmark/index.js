var assert = require('assert');
var recurse = require('../lib/recurse');
var tail = require('../lib/tail');
var fibIter = require('../lib/fibIter');
var suite = new (require('benchmark')).Suite;

var n =20;
suite
    .add('recurse', function () { recurse(n); })
    .add('tail', function () { tail(n); })
    .add('fibIter', function () { fibIter(n); })
    .add('fibIter2', function () { fibIter(n); })
    .on('complete', function () {
        this.forEach(function (result) {
            console.log('--: ', result.name, result.count, result.times.elapsed);
        });
        console.log('fastest: ', this.filter('fastest').map('name')[0]);

        // var that = this;
        // this.forEach(function (result) {
        //     console.log(that.filter('fastest'));
        // });

        // assert.equal(
        //     this.filter('fastest').map('name')[0],
        //     'recurse',
        //     'expect recurse to be the fastest'
        // );
    }).run();
