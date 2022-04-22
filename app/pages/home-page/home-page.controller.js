angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $stateParams, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filterText = '';

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }

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
