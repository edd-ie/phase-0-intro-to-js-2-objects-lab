// Write your solution in this file!
const employee = {name: 'Pete', streetAddress:'random11'};

// updateEmployeeWithKeyAndValue(employee, key, value)
// returns an employee with the original key value pairs and the new key value pair
// it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmploy = {...employee};
    newEmploy[key] = value;
    return newEmploy;
}


//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
//updates `employee` with the given `key` and `value` (it is destructive) and 
//returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


//   deleteFromEmployeeByKey(employee, key)
//     deletes `key` from a clone of employee and 
//returns the new employee (it is non-destructive):
function deleteFromEmployeeByKey(employee, key){
    const newEmploy = {...employee};
    delete newEmploy[key];
    return newEmploy;
}

//   destructivelyDeleteFromEmployeeByKey(employee, key)
//     returns employee without the deleted key/value pair:
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
