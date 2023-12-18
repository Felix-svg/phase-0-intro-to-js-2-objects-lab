// Write your solution in this file!
let employee = {
  name: "James",
  streetAddress: "20 Nanyuki",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let copyOfEmployee = {
    ...employee,
    [key]: value,
  };
  return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let updatedEmployeeByKey = {
    ...employee,
  };
  delete updatedEmployeeByKey[key];
  return updatedEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
