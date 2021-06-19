const request = require('supertest');

const api = require('../src/index');

/* 
 pruebas unitarias-- retorna todos los usuarios
*/

it('respond with json containing a list of all user', done => {
    request(api)
        .get('/getAllUser')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
})