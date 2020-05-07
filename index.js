/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */




function createEmployeeRecord(arr){
    
    var obj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj

}

function createEmployeeRecords(arr){
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(timestamp){

    var obj = {
        type: "TimeIn",
        date: timestamp.split(" ")[0],
        hour: parseInt(timestamp.split(" ")[1])
    }
    let time = [...this.timeInEvents, obj]
    this.timeInEvents = time
    return this

}

function createTimeOutEvent(timestamp){

    var obj = {
        type: "TimeOut",
        date: timestamp.split(" ")[0],
        hour: parseInt(timestamp.split(" ")[1])
    }
    let time = [...this.timeOutEvents, obj]
    this.timeOutEvents = time
    return this

}

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find((time) => {
        return time.date === date
    })

    let timeOut = this.timeOutEvents.find((time) => {
        return time.date === date
    })

    return (timeOut.hour - timeIn.hour) / 100
    
}

function wagesEarnedOnDate(date){

    let hours = hoursWorkedOnDate.call(this, date)

    return hours * this.payPerHour

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
 
function calculatePayroll(arr){
    let pay = 0
    arr.forEach(employee => {
        pay += allWagesFor.call(employee)
    })
    return pay
}

function findEmployeeByFirstName(arr,name){

    return arr.find(employee => employee.firstName === name)
    
}
