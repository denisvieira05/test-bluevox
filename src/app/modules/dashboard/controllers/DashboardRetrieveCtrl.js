(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('DashboardRetrieveCtrl', DashboardRetrieveCtrl);

    DashboardRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function DashboardRetrieveCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

        var vm = this;

        vm.disciplines = [];
        vm.selectedDisciplines = [];
        vm.patientId = $stateParams.id;


        vm.createPatient = createPatient;
        vm.returnRoute = returnRoute;
        // vm.getGrid = getGrid;

        activate();

        function activate() {
            return getPatients().then(function() {
                // console.log('Activated Patients View');
            });
        }

        // vm.disciplines = DisciplinesPrepService.disciplinas;
        // console.log(vm.disciplines);
        //////////////////////////////////////////////////////////

        function returnRoute(){
            $location.path("/dashboard");
        }

        function createPatient(patient){
          console.log(patient);
            return PatientsService.create(patient).then(function(data){
                console.log("Usuário Criado:",patient);
                vm.patients.push(patient);
            },
            function(){
                alert('erro');
            });
        }

       function getPatients(){
            return PatientsService.listar().then(function(data){
                vm.patients = data.items;
                console.log(vm.patients);
                return vm.patients;
            },
            function(){
                alert('erro');
            });
        }

       $('.collapsible').collapsible({});
       $('.modal-trigger').leanModal({});

    }
})();
