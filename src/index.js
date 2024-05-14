// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
  	const randomResponses = {
  		0: "Response 1",
  		1: "Response 2",
  		2: "Response 3",
  		3: "Response 4"
  	};
  	const max = 4;
    if (request.method == 'GET') {
    		const generatedRandom = generateRandomNumber(max);
    		const getRandom = randomResponses[generatedRandom];
           	return new Response(getRandom, {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
       else {
       		// Sample JSON data to send as response
      		const jsonData = {
        		message: 'POST',
        		data: 'request'
      		};
      		return new Response(JSON.stringify(jsonData), {
       			headers: {
       				'content-type': 'application/json',
       			},
       		});
       }
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map

function generateRandomNumber (max)
{
	const newRandom = Math.floor(Math.random() * max);
	return newRandom;
};