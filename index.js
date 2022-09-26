// Code your solution in this file!
const returnFirstTwoDrivers = (driveArr) => {return driveArr.slice(0, 2)}
const returnLastTwoDrivers = (driveArr) => {return driveArr.slice(-2)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (ride) => {
    return (fare) => {
        return ride * fare;
    }
}
const fareDoubler = (fare) => {return fare * 2}
const fareTripler = (fare) => {return fare * 3}
const selectDifferentDrivers = (driver, func) => {return func(driver) }