// ******************* DOCUMENT MIDDLEWARE ****************** /
function populateDataOnFind(next) {
  this.populate({
    path: 'user exercises mealPlan intensity',
    select: 'name title',
  });
  next();
}

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

module.exports = {
  populateDataOnFind,
};
