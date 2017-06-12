const uuidGenerator = require('uuid');

const utils = {};

utils.getUuid = () => uuidGenerator();

export default utils;
