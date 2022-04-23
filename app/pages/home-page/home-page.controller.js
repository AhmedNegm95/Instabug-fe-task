angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filterText = '';
  homePageVm.isLoading = false;
  homePageVm.hasMorePages = false;

  let currentPage = 1;

  // activate();

  // function activate() {
  //   Employees.getEmployees()
  //     .then(({ data }) => {
  //       homePageVm.employees = homePageVm.employees.concat(data.employees);
  //     });
  // }

  homePageVm.loadEmployees = function () {
    homePageVm.isLoading = true;
    Employees.getEmployees(currentPage++)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.isLoading = false;
        if (currentPage > data.pages) {
          homePageVm.hasMorePages = true;
        }
      });
  };

  homePageVm.loadEmployees();

  (function () {
    if ($location.search().filter) {
      homePageVm.filterText = $location.search().filter;
    }
  }());

  homePageVm.onFilterEmployees = function (filterText) {
    homePageVm.filterText = filterText;
    $location.search({ filter: filterText });
  };
  homePageVm.onResetFilterParam = function () {
    $location.search({ filter: null });
  };
}
