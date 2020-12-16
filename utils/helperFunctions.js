const moment = require('moment');

const convertArrayToObject = (categoriesArray) => {
  let categoryObject = {};
  categoriesArray.forEach((element) => {
    categoryObject[element._id] = element.total;
  });

  return categoryObject;
};

module.exports = {
  convertArrayToObject,
  
};
