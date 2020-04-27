
var user2 = {
    name: 'Alexander',
    last_name: 'Ballera',
    age: 49,
    email: 'alexballera@gmail.com'
}

var user3 = {
    name: 'Alexander3',
    last_name: 'Ballera3',
    age: 53,
    email: 'alexballera@gmail.com'
}

var user4 = {
    name: 'Alexander4',
    last_name: 'Ballera4',
    age: 50,
    email: 'alexballera@gmail.com'
}

// insertOne
db.users.insertOne(user2)

// insertMany
db.users.insertMany([user3, user4])

db.users.find(
    {age: 49} // Criterios -> Where
)