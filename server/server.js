const path = require('path')

const fs = require ('fs')

const request = require('request')

let dataPath = path.join(__dirname, '../data.json')

request('http://reddit.com/r/popular.json', (err, response, body) => {
    if (err) console.log(err)

JSON.parse(body).data.children.forEach(item => {
    fs.appendFileSync(dataPath, item.data.title + '\n')
})

    // fs.writeFile(dataPath, response.body, err => {
    //     if (err) console.log(err)
    // })
})
// fs.readFile(dataPath, {
//     encoding: "UTF-8",

// }, (err, data) => {
//     let person = JSON.parse(data);
//     console.log(person.name)
//     console.log(person.hobby)
//     console.log(person)
// })