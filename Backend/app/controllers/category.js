const model = require('../models/category')

exports.getAllCategories = (req, res) => {
    async function findDocuments() {
        try {
          const docs = await model.find({});
          res.send({ docs });
        } catch (err) {
          console.error(err);
        }
      }
      
    findDocuments();
}

exports.insertData = async (categoryData) => {
  try {
      const category = new model(categoryData);
      const savedCategory = await category.save();
      console.log('Categoria insertado:', savedCategory);
      return savedCategory;
  } catch (err) {
      console.error('Error al insertar categoria:', err);
      throw err;
  }
};