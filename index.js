/* Your Code Here */

const createEmployeeRecord = function(row) {
    let obj =  {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return obj
}

let createEmployeeRecords = function(aoa) {
    return aoa.map(row => {
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
}
// createTimeInEvent(createEmployeeRecord, "2015-02-28 1700")

let createTimeOutEvent = function(dateTime) {
    const [date, hour] = dateTime.split(" ")
    // console.log(date, hour)
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return this
}

let hoursWorkedOnDate = function(dateTime) {
    // find the employee record where the dateTime matches the time of the employeercords work date/time.
    // divde between the time in and time out.
    let timeIn = this.timeInEvents.find(function(event) {
        return event.date === dateTime
    })
    let timeOut = this.timeOutEvents.find(function(event) {
        return event.date === dateTime
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(dateTime) {
    // using hoursWorkedOnDate, multiply the hours by the records payRate to dtermine amount owed.
    // Amount should be returned as a number

    let hours = hoursWorkedOnDate.call(this, dateTime)
    return hours * this.payPerHour
}

let calculatePayroll = function(employeesArray) {
    // calculate the aggregates of all the dates wages and adds them together
    return employeesArray.reduce(function(ledger, employee){
        return ledger + allWagesFor.call(employee)
    }, 0)}

let findEmployeeByFirstName = function(collection, firstNameString) {
    return collection.find(function(employee) {
        return employee.firstName === firstNameString
    })
} 

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}