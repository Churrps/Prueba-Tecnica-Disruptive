const model = require('../models/user')

exports.getAllUsers = (req, res) => {
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

exports.insertData = async (userData) => {
  try {
      const user = new model(userData);
      const savedUser = await user.save();
      console.log('Usuario insertado:', savedUser);
      return savedUser;
  } catch (err) {
      console.error('Error al insertar usuario:', err);
      throw err; 
  }
};
