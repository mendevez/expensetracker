const createCategoriesObject = (categoriesArray) => {
  let categoryObject = {};
  categoriesArray.forEach((category) => {
    categoryObject[category._id] = category.total;
  });

  return categoryObject;
};


module.exports = {
    createCategoriesObject
}