angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = (currentPage = 1) => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees?page=' + currentPage;

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = () => {
    // [Load more empolyess logic goes here]
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
