const { join, dirname } = require('path')
const swaggerAutogen = require('swagger-autogen');

const _dirname = dirname(require.main.filename);

const doc = {
  // общая информация
  info: {
    title: 'Todo API',
    description: 'My todo API'
  },
  // что-то типа моделей
  definitions: {
    // модель задачи
    Product: {
        _id: "61fe74debf41e29d1c209684",
        name: "HP EliteBook 750",
        price: 1350,
        country: "USA"
    },
    // модель массива задач
    Products: [
      {
        // ссылка на модель задачи
        $ref: '#/definitions/Product'
      }
    ],
    // модель объекта с текстом новой задачи
    Text: {
      name: "ACER EliteBook 850",
      price: 1250,
      country: "USA"
    },
    // модель объекта с изменениями существующей задачи
    Changes: {
        name: "ACER EliteBook 850",
        price: 1250,
        country: "USA"
    }
  },
  host: 'localhost:5000',
  schemes: ['http']
}


const outputFile = join(_dirname, 'output.json')

const endpointsFiles = [join(_dirname, '../app.js')]

swaggerAutogen()(outputFile, endpointsFiles, doc).then(({ success }) => {
  console.log(`Generated: ${success}`)
})