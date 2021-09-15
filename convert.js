const allUsers = require('./customer.json');
const fs = require('fs');
const app = require('express')();
var json2xls = require('json2xls');
const filename = 'customer.xlsx';
app.listen(5501, () => {
    console.log("app is runnning on port 5501");
    convert();
})
var convert = function () {
    var xls = json2xls(allUsers);
    fs.writeFileSync(filename, xls, 'binary', (err) => {
        if (err) {
            console.log("writeFileSync :", err);

        }
        console.log(filename+ "file is saved!");
    });
}