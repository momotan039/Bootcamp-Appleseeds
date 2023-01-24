const users = [{
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


for (const user of users) {
    const li = document.createElement("li")
    li.innerHTML = user.firstName+" "+user.lastName
    li.setAttribute('data-id',user.id)
    const ul = document.createElement('ul')
    ul.append(li)
    document.body.append(ul)
    ul.style.listStyleType="none"
}
