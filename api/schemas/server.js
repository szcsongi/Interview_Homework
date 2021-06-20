const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/api/interview/magic', (req, res) => {
    var string = req.query.input;
    string = string.split(" ");
    var stringArray = new Array();
    var result = {};
    if (string[0] === 'first') {
        for(var i = 1; i < string.length; i++){
            stringArray.push(string[i]);
        }

        stringArray.sort();
        for (var i = 0; i < stringArray.length; i++) {
            stringArray[i] = stringArray[i].substring(0, stringArray[i].length - 1);
        }
    
        stringArray = stringArray.filter(function (word) {
            return word !== '';
        });
    
        console.log(stringArray);
        result.result = stringArray;
        res.contentType('application/json');
        return res.status(200).send(JSON.stringify(result));
    }

    if (string[0] === 'second') {
        for(var i = 1; i < string.length; i++){
            stringArray.push(string[i]);
        }

        stringArray.sort();
        stringArray.reverse();
        for (var i = 0; i < stringArray.length; i++) {
            stringArray[i] += 'A';
        }
    
        console.log(stringArray);
        result.result = stringArray;
        res.contentType('application/json');
        return res.status(200).send(JSON.stringify(result));
    }
    
    stringArray.push('Input should start with first or second');
    result.result = stringArray;
    res.contentType('application/json');
    return res.status(200).send(JSON.stringify(result));
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});