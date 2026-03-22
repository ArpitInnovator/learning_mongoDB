use('ecommerce')

// db.sales.find()
// db.sales.getIndexes()
db.products.createIndex({ quantity: 1 }) // Ascending index on 'name' field