// ******************* DOCUMENT MIDDLEWARE ****************** /
function populateDataOnFind(next) {
  this.populate('user mealPlan exercises');
  next();
}

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

module.exports = {
  populateDataOnFind,
};
