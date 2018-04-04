const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length-2,drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(num){
    return multiplier * num;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}
