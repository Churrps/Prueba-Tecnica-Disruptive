const model = require('../models/topic')

exports.getAllTopics = (req, res) => {
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

exports.insertData = async (topicData) => {
  try {
      const topic = new model(topicData);
      const savedTopic = await topic.save();
      console.log('Tema insertado:', savedTopic);
      return savedTopic;
  } catch (err) {
      console.error('Error al insertar tema:', err);
      throw err; 
  }
};