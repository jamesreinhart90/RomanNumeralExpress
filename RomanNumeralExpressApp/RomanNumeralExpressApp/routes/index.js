'use strict';
var express = require('express');
var router = express.Router();
var output = '';
var middleware = require('../middleware/middleware');

/* GET home page. */
router.get('/', function (req, res) {    
    res.render('index', { title: 'Roman Numeral Generator', romanNumeral: output});
    console.log({ title: 'Roman Numeral Generator', romanNumeral: output, error: error });
});

router.post('/findNumeral', middleware.test, function (req, res, next) {
    if (req) {
        //console.log(req.body);
        var romanNumeral = req.body.number;
        //console.log(romanNumeral);
        //test();
        
        output = findNumeral(romanNumeral);

        res.redirect('/');
    }
});

function initUser() {
    function afterDataRetrieve(err, data) {
        if (err) {
            console.log(err);
        } else {
        setUserData(data);
    }
    getUserData(afterDataRetrieve);
}








function findNumeral (romanNumeral) {
    var output = '';
    var vCount = 0;
    var xCount = 0;
    var lCount = 0;
    var cCount = 0;

    if ((romanNumeral < 1) || (romanNumeral > 100)) {
        console.log('out of range');
        output = 'This value is out of range, please enter a value between 1 and 100.';
        romanNumeral = 0;
    }

    var aMod = (romanNumeral % 5);

    while (romanNumeral >= 5) {
        romanNumeral = romanNumeral - 5;
        vCount++;
    }
    while (vCount >= 2) {
        vCount = vCount - 2;
        xCount++;
    }
    while (xCount >= 5) {
        xCount = xCount - 5;
        lCount++;
    }
    while (lCount >= 2) {
        lCount = lCount - 2
        cCount++;
    }

    console.log(aMod + ' ' + vCount + ' ' + xCount + ' ' + lCount + ' ' + cCount);

    while (cCount >= 1) {
        output = 'C';
        cCount--;
    }

    while (lCount >= 1) {
        if (lCount == 1 && xCount == 4) {
            output = 'XC' + output;
            lCount--;
            xCount = xCount - 4;
        } else {
            output = output + 'L';
            lCount--;
        }
    }

    while (xCount >= 1) {
        if (xCount == 4) {
            output = 'XL' + output;
            xCount = xCount - 4;
        } else {
            output = output + 'X';
            xCount--;
        }
    }

    while (vCount >= 1) {
        if (vCount == 1 && aMod == 4) {
            output = output + 'IX';
            aMod = aMod - 4;
            vCount--;
        } else {
            output = output + 'V';
            vCount--;
        }
    }

    while (aMod >= 1) {
        if (aMod == 4) {
            output = output + 'IV';
            aMod = aMod - 4;
        } else {
            aMod--;
            output = output + 'I';
        }
    }

    return (output);
}

module.exports = router;
