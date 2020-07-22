// ******************* DOCUMENT MIDDLEWARE ****************** /
function populateUserOnFind(next) {
  this.populate('user');
  next();
}

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

module.exports = {
  populateUserOnFind,
};
