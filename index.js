const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//express body parse
app.use(express.json());
const port =5000;
// or const port = process.env.PORT || 3000;

// const handler = (req, res) =>{
//     res.send('Hello from node');
// }
// app.get('/',handler); or

app.get('/', (req, res) =>{
    res.send('Brilliant,from Simple-Node and Nodemon');
});
const users =[
    { id: 0, name: 'Melisa', email: 'melisa123@gmail.com'},
    { id: 1, name: 'Blisa', email: 'blisa123@gmail.com'},
    { id: 2, name: 'Nelisa', email: 'nelisa123@gmail.com'},
    { id: 3, name: 'Elisa', email: 'elisa123@gmail.com'},
    { id: 4, name: 'Slisa', email: 'slisa123@gmail.com'},
    { id: 5, name: 'Alisa', email: 'alisa123@gmail.com'},
    { id: 6, name: 'Hlisa', email: 'hlisa123@gmail.com'},
    { id: 7, name: 'Velisa', email: 'velisa123@gmail.com'},
    { id: 8, name: 'Zelisa', email: 'zelisa123@gmail.com'},
    { id: 9, name: 'Olisa', email: 'olisa123@gmail.com'},
]
app.get('/users', (req, res) =>{
    // console.log(req.query.search); or
    const search = (req.query.search); 
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users);
    }
    // res.send(users);
    // res.send({id: 101, name: 'Melisa', email:'melisa123@gmail.com'});
});

//POST method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting successfully',req.body);
    // res.send("inside post")
    res.json(newUser)
    //or, res.send(JSON.stringify(newUser))
})

//dynamic API
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    // console.log(req.params.id);
  
});
app.get('/fruits', (req, res) =>{
    res.send(["apple", 'lichi', 'gauva'])
});
app.get('/fruits/mangoes/fazil', (req, res) =>{
    res.send("Mouth watering fazil mango");
});

app.listen(port, () =>{
    console.log('listening to port', port);
});