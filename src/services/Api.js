const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
    validateStatus: () => true,
});

const postData = (data) => {
    return new Promise((resolve, reject) => {
        instance
            .post('persons', data)
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return resolve(error);
            });
    });
};

const putData = (path, data) => {
    return new Promise((resolve, reject) => {
        instance
            .put('persons/' + path, data)
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return resolve(error);
            });
    });
};

const deleteData = (path) => {
    return new Promise((resolve, reject) => {
        instance
            .delete('persons/' + path)
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return resolve(error);
            });
    });
};

const getData = async () => {
    return new Promise((resolve, reject) => {
        instance.get('persons')
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                return resolve(error);
            });
    });
};

module.exports = { postData, putData, deleteData, getData };
