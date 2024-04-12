const model = require('../models/content')

exports.getAllContents = (req, res) => {
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

exports.insertData = async (contentData) => {
  try {
      const content = new model(contentData);
      const savedContent = await content.save();
      console.log('Contenido insertado:', savedContent);
      return savedContent;
  } catch (err) {
      console.error('Error al insertar contenido:', err);
      throw err; 
  }
};