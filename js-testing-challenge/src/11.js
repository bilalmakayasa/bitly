function findByUsername(username) {
    const user = [
        { id: 1, username: 'mul14', name: 'Mulia' },
        { id: 2, username: 'durjaka', name: 'Arifandi' },
        { id: 3, username: 'johndoe', name: 'John Doe' },
        { id: 4, username: 'norisa', name: 'Norisa' },
        { id: 5, username: 'sagara', name: 'Sasuke Sagara' },
    ]


    for (let i = 0; i < user.length; i++) {
        if (user[i].username == username) {
            return user[i]
        }
    }

}
module.exports = findByUsername