interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(user: User) {
    if (user.age >= 18) {
        console.log("user is legal");
        return true;
    }
    console.log("user is not legal");
    return false;
}

isLegal({
    firstName: "John",
    lastName: "Doe",
    age: 20
})