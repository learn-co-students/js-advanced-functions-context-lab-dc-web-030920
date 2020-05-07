/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// createEmployeeRecord
// Argument(s)
// A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
// Returns
// JavaScript Object with keys:
// firstName
// familyName
// title
// payPerHour
// timeInEvents
// timeOutEvents
// Behavior
// Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


let createEmployeeRecords = function(arrayOfArrays) {
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

let createTimeInEvent = function(date) {
    const dateArray = date.split(" ")
    const dateObj = {
        type: "TimeIn",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
    this.timeInEvents.push(dateObj)
    return this 
}


let createTimeOutEvent = function(date){
    const dateArray = date.split(" ")
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
    this.timeOutEvents.push(timeOutObj)
    return this 
}

let hoursWorkedOnDate = function(date){
    const timeIn = this.timeInEvents.find(timeIn => timeIn.date === date)
    const timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

// Argument(s)
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
// let wagesEarnedOnDate = function(){

let wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


let findEmployeeByFirstName = function(array, firstName){
    return array.find(emp => emp.firstName === firstName)
}
// calculatePayroll
// Argument(s)
// Array of employee records
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.

let calculatePayroll = function(array){
    return array.reduce((sum, emp) => {
       return  sum + allWagesFor.call(emp)
    }, 0)

}