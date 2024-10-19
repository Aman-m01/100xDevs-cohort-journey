// Simple hospital management application
const express = require('express')
const app = express()
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());
app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})


app.put('/', (req, res) => {
    for (let i = 0; i < kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json();
})

app.delete('/', (req, res) => {
    if (atLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        });
    } else {
        res.status(411).json({
            msg: "You have no unhealthy kidney"
        })
    }

})

function atLeastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {

            atLeastOneUnhealthyKidney = true;

        }
    }
    return atLeastOneUnhealthyKidney;
}


app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`)
})
