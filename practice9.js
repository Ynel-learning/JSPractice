const users = [
    { name: "John", age: 20 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

function findUser(users, target) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === target) return users[i]; 
    }
    return null;
}

console.log(findUser(users, 'Alice'));