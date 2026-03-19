var studentobj = {
    name: "mani",
    age: 22,
    college: "IMS"
};
var teacherobj = {
    name: "mani",
    age: 56,
    college: "IMS",
    department: "cs"
};
console.log(studentobj);
async function fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data;
}
fetchUser().then((user) => {
    console.log(user.name);
});
export {};
//# sourceMappingURL=interface.js.map