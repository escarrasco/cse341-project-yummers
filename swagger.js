
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Yummers API',
    description: 'API Project'
  },
  host: 'cse341-project-yummers.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

