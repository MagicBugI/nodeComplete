const Data = require('../models/data');

exports.getData = (req, res, next) => {
  // #swagger.description = 'Get all products'
  /* #swagger.responses[200] = {
      // описание ответа
      description: 'Array of all todos',
      // схема ответа - ссылка на модель
      schema: { $ref: '#/definitions/Products' }
  } */

  Data.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
};

exports.addData = (req, res, next) => {
  const { name, price, country } = req.body;
  // #swagger.description = 'Create new todo'
  /* #swagger.parameters['text'] = {
    in: 'body',
    description: 'New product data',
    type: 'object',
    required: true,
    schema: { $ref: '#/definitions/Text' }
  } */
  /* #swagger.responses[201] = {
      description: 'Array of new todos',
      schema: { $ref: '#/definitions/Produts' }
  } */
  Data.create({ name, price, country })
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

exports.getDataById = (req, res, next) => {
  const id = req.params.id

  // #swagger.description = 'Get product by ID'
  /* #swagger.parameters['id'] = {
    description: 'Existing todo ID',
    type: 'string',
    required: true
  } */
  /* #swagger.responses[200] = {
      description: 'Product with provided ID',
      schema: { $ref: '#/definitions/Product' }
  } */
  Data.findById(id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
}
exports.deleteDataById = (req, res, next) => {
  const id = req.params.id;

  // #swagger.description = 'Remove existing product'
  /* #swagger.parameters['id'] = {
    description: 'Existing product ID',
    type: 'string',
    required: true
  } */
  /* #swagger.responses[201] = {
    description: 'Array of new products or empty array',
    schema: { $ref: '#/definitions/Products' }
  } */
  Data.findByIdAndRemove(id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
};
exports.updateDataById = (req, res, next) => {
  // #swagger.description = 'Update existing product'
  /* #swagger.parameters['id'] = {
    description: 'Existing product ID',
    type: 'string',
    required: true
  } */
  /* #swagger.parameters['changes'] = {
    in: 'body',
    description: 'Existing todo changes',
    type: 'object',
    required: true,
    schema: { $ref: '#/definitions/Changes' }
  } */
  /* #swagger.responses[201] = {
    description: 'Array of new todos',
    schema: { $ref: '#/definitions/Products' }
  } */
  Data.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(data => res.json(data))
};