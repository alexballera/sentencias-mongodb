
var user2 = {
    name: 'Alexander',
    last_name: 'Ballera',
    age: 24,
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
    {name: 'Alexander4'}, // 1er argumento Criterios de búsqueda -> Where
    {name: true, email: true, _id: false} // 2do argumento selecciona atributos ~> Select
).pretty()

db.users.find(
    {name: 'Alexander4'}, // Criterios -> Where
    {age: false} // Select: se excluye sólo este elemento
).pretty()

// $ne not equal; todos los elementos diferentes a
// $eq equal; todos los elementos igual a
db.users.find(
    {
        age: {
            $ne: 24
        }
    }
).pretty()

db.users.find(
    {
        age: {
            $eq: 24
        }
    }
).pretty()

// find Encontrar todos los documentos que cumplan con el criterio
// findOne Encontrar el primer documento que cumpla el criterio
db.users.findOne(
    {
        age: {
            $eq: 24
        }
    }
)

