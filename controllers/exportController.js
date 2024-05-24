const exportService = require('../services/exportService');

const exportAuditory = async (req, res) => {
    //auditory es una lista de objetos
    try{
    const { auditory } = req.body;
    const result = await exportService.exportAuditory(auditory);
    res.json(result);
} catch (error) {
    res.status(500).send(error.message);

}
};

module.exports = {
    exportAuditory
};
