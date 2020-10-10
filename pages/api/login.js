const axios = require('axios')
export default (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 404;
        console.log(404)
        res.end('{}');
        return;
    }   
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-token-access': 'random',
        },
    }
    return axios
        .post('http://jsonplaceholder.typicode.com/posts', req.body, config)
        .then((response) => {      

            res.end(JSON.stringify(response.data));
            res.statusCode = 200;            
        })
        .catch((error) => {
            console.error(error);
            res.statusCode = 500;
        })
}

