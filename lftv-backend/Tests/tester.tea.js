const axios = require('axios');
const chai = require('chai'); // https://www.chaijs.com/api/assert/ , Assert library
const fs = require('fs');

let currDate = new Date().toString().split(' ').join('_');
const fileName = './Tests/output/' + currDate + '-testapi_tea';

const appendToFile = (msg) => {
    fs.appendFile(fileName, msg, (err) => {
        if(err) console.log(err);
    });
};

const testTea = (req, res) => {
    // Create new log for the test
    // fs.writeFile(fileName, '', {flag : 'wx'}, (err) => {
    //     if (err) console.log(err);
    //     else console.log('File created');
    // });

    // IF YOU GOT AN ERROR, THIS MIGHT BE IT
    // ADD THIS PERMANENT TEA AND COPY/PASTE ITS ID BELOW ON 'permanent_test_ID'
    /*
        type: "TEST_TEA",
        name: "forever test tea",
        tea_desc: "This tea is for testing purposes. DO NOT REMOVE THIS TEA SPECIFICALLY."
     */
    let permanent_test_ID = 23;
    let lastID = 0;


    //#region Test Get methods
    //appendToFile(`Testing 'gettea' route...`);
    axios({
        method: 'get',
        url: `http://localhost:${process.env.PGPORT}/gettea`
    })
        .then(result => {
            lastID = parseInt(result.result.rows[result.result.rows.length-1].id);
            //console.log("last id is ", lastID);
            //console.log(result.data.result[result.data.result.length-1]);

            // ID number must always be equal or greater than the number of teas stored in DB.
            if(lastID)
                chai.assert.isAtLeast(lastID, result.result.rows.length, `${lastID} >= ${result.result.rows.length}`);
            else
                console.log('DB is empty.')
            appendToFile(`\t\tPassed.`)
        })
        .catch(err => console.log(err));


    // console.log("Testing 'getteabytype/:type', with TEST_TEA as type, route...");
    // axios({
    //     method: 'get',
    //     url: `http://localhost:${process.env.PGPORT}/getteabytype/TEST_TEA`
    // })
    //     .then(result => {
    //         const arr = result.data.result;
    //         arr.forEach(element => {
    //             chai.assert.equal(element.type, 'TEST_TEA', 'Type found in DB is NEQ to TEST_TEA.');
    //         })
    //         console.log("'getteabytype:/type' route done.");
    //     })
    //     .catch(err => console.log(err));
    //
    //
    // console.log(`Testing 'getteabyid/:id', with ${permanent_test_ID} as id, route...`);
    // axios({
    //     method: 'get',
    //     url: `http://localhost:${process.env.PGPORT}/getteabyid/${permanent_test_ID}`
    // })
    //     .then(result => {
    //         const arr = result.data.result; // should only be one result but it's returned as an array
    //         arr.forEach(element => {
    //             chai.assert.equal(element.id, permanent_test_ID, 'ID found in DB is NEQ to permanent_test_ID.');
    //         })
    //         console.log("'getteabyid:/id' route done.");
    //     })
    //     .catch(err => console.log(err));
    //
    //
    // console.log(`Testing 'getteabyname/:name', with 'forever test tea' as name, route...`);
    // axios({
    //     method: 'get',
    //     url: `http://localhost:${process.env.PGPORT}/getteabyname/forever test tea`
    // })
    //     .then(result => {
    //         const arr = result.data.result; // should only be one result but it's returned as an array
    //         arr.forEach(element => {
    //             chai.assert.deepEqual(element.name, 'forever test tea', 'Name found in DB is NEQ to forever test tea.');
    //         })
    //         console.log("'getteabyname/:name' route done.");
    //     })
    //     .catch(err => console.log(err));

    //#endregion


    // Teas to test with for ADD, EDIT, REMOVE
    const tea1 = {
        type: "TEST_TEA",
        name: "test tea 1",
        tea_desc: "This tea is for testing purposes."
    };
    const tea2 = {
        type: "TEST_TEA",
        name: "test tea 2",
        tea_desc: "This tea is for testing purposes."
    };


    //#region Test Add method

    // axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/addtea',
    //     data: tea1
    // })
    //     .then(result => {
    //         console.log("Added tea1 object.");
    //         console.log(result);
    //         axios({
    //             method: 'get',
    //             url: 'http://localhost:3000/addpost',
    //             data: tea1
    //         })
    //     })
    //     .catch(err => console.log(err));

    // axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/addpost',
    //     data: tea2
    // })
    //     .then(result => {
    //         console.log("Added tea2 object.");
    //         console.log(result);
    //     })
    //     .catch(err => console.log(err));
    //#endregion

    //#region Test Edit methods
    //#endregion

    //#region Test Remove methods
    //#endregion
};

module.exports = { testTea };