//...{o_o}...//
function createEmployeeRecord(employeeRecord=[]){
    let firstName=employeeRecord[0];
    let familyName=employeeRecord[1]
    let title=employeeRecord[2]
    let payPerHour=employeeRecord[3]
    let timeInEvents=[]
    let timeOutEvents=[]
    return {firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents}
  
  }
  function createEmployeeRecords(dataEmployees){
    let employeeRecords=dataEmployees.map(createEmployeeRecord)
    return employeeRecords
  
  }
  function createTimeInEvent(record,dateStamp){
    let [date,hour]=dateStamp.split(" ")
    record.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date,
    })
    return record
    
  }
  function createTimeOutEvent(record,dateStamp){
    let [date,hour]=dateStamp.split(" ")
    record.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour, 10),
      date,
    })
    return record
    
  }
  function hoursWorkedOnDate(records,dateStamp){
  
      const shiftIn = records.timeInEvents.find((event) => {
          return event.date === dateStamp
      })
  
      const shiftOut = records.timeOutEvents.find((event) => {
          return event.date === dateStamp
      })
  
      return (shiftOut.hour - shiftIn.hour) / 100
  }
  function wagesEarnedOnDate(record,dateStamp){
    const wages=hoursWorkedOnDate(record,dateStamp)*record.payPerHour
    return wages
  
  }
  function allWagesFor(record){
    let dates=record.timeInEvents.map((event)=> event.date)
    let payAmount = dates.reduce((accumulation, currentDate) => {
      return accumulation + wagesEarnedOnDate(record, currentDate)
    }, 0)
  
  return payAmount
  
  }
  function calculatePayroll(arrayOfRecords) {
    return arrayOfRecords.reduce((accumulation,currentValue) => {
        return accumulation + allWagesFor(currentValue)
    }, 0)
  }

//...{o_<}...//