//Access supertest module functionaliter under the variable name" request"
const request = require('supertest');

//top level of this test suite: the entire use API
describe("The User API", () => {

    //specific test
    it('Returns a list of all users', async() => {

        //Connect to the server and get a response
        //exprect that response to be a 200 and server JSON
        const res = await request('http://localhost:8080')
            .get('/api/users/list')
            .expect(200)
            .expect('Content-Type', /json/);

        //these expects are jest, not supertext
        // first, expect to get a result that is an array
        expect(Array.isArray(res.body)).toBe(true);
        //second, expect the array to have something in it
        expect(res.body.length).toBeGreaterThan(0);
        //third, expect the username of the first returned user to be Administrator
        expect(res.body[0].username).toBe('administrator');
    });
});