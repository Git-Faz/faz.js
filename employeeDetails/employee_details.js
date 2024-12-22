const employees = [
    {id: 1, name:"John", age:30, dept:"IT",salary:50000},
    {id: 2, name:"Alice", age:28, dept:"HR",salary:45000},
    {id: 3, name:"Bob", age:25, dept:"Finance",salary:60000}
];

//map array
function displayEmployees() {
    const totalEmployees = employees.map((employee,index)=> `<p>${employee.id}: ${employee.name}: ${employee.dept}: $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;

}

//reduce array
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc,employee)=> acc+employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
}

//filter array
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.dept==="HR");
    const hrEmployeesDisplay =  hrEmployees.map((employee,index) => `<p>${employee.id}: ${employee.name}: ${employee.dept}: $${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML= hrEmployeesDisplay;
}

//find array
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById("employeesDetails").innerHTML=`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.dept} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById("employeesDetails").innerHTML="no employee with this ID found";
    }
}