const axios = require('axios')

function getPost() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

axios.all([getPost(), getUsers()])
    .then(axios.spread(function(post, user) {
        let result = post.data.map(mapResult => {
            let res = {
                'UserID': mapResult.userId,
                'id': mapResult.id,
                'title': mapResult.title,
                'body': mapResult.body,
                'user': user.data.find(y => y.id === mapResult.userId)
            }

            return res
        })

        console.log(result);

    }));