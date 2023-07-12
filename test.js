/**
 * This is a simple Unit test
 * Next steps: 
 * - Test 2 endpoint for /multiple and /divide using Jest
 */

 const axios = require('axios');

 const url = 'http://localhost:3000/calculator';
 
 describe('The main router', () => {
   test('The get route', async () => {
     const res = await axios.get(url)

     expect(res).toBeTruthy()
     expect(res.status).toBe(200)
     expect(res.data).toEqual('Hello World!')
   })
 })