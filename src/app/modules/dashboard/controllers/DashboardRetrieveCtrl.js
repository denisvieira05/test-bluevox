(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('DashboardRetrieveCtrl', DashboardRetrieveCtrl);

    DashboardRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService'];

    function DashboardRetrieveCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService) {

        var vm = this;

        vm.disciplines = [];
        vm.selectedDisciplines = [];

         $('.collapsible').collapsible({});
         $('.modal-trigger').leanModal({});

        vm.createPatient = createPatient;
        // vm.getGrid = getGrid;

        activate();

        function activate() {
            return getPatients().then(function() {
                console.log('Activated Patients View');
            });
        }

        // vm.disciplines = DisciplinesPrepService.disciplinas;
        // console.log(vm.disciplines);
        //////////////////////////////////////////////////////////

        function createPatient(patient){
          console.log(patient);
            return PatientsService.create(patient).then(function(data){
                console.log(patient);
                vm.patients.push(patient);
            },
            function(){
                alert('erro');
            });
        }

       function getPatients(){
            return PatientsService.listar().then(function(data){
                vm.patient = data.items;
                console.log(vm.patient);
                return vm.patient;
            },
            function(){
                alert('erro');
            });
        }
       function getPatient(id){
            return PatientsService.getPatient().then(function(data){
                vm.patient = data;
                console.log(vm.patients);
                return vm.patients;
            },
            function(){
                alert('erro');
            });
        }

    }
})();
