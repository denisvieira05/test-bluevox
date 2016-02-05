(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('PatientSchedulesCtrl', PatientSchedulesCtrl);

    PatientSchedulesCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function PatientSchedulesCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

        var vm = this;

        vm.patientId = $stateParams.id;

        vm.getPatient = getPatient;

        vm.showHistoric = false;

        vm.checkHistoric = function(){
            if(vm.showHistoric){
              vm.showHistoric = false;
            }else {
              vm.showHistoric = true;
            }
        };

        activate();

        function activate() {
            return getPatient().then(function() {
                // console.log('Activated Patients View');
            });
        }

        //////////////////////////////////////////////////////////

       function getPatient(id){
            return PatientsService.getPatient(id).then(function(data){
                vm.patientSchedules = data;
                console.log("PACIENTE :"+id+" - ",vm.patientSchedules);
                return vm.patientSchedules;
            },
            function(){
                alert('erro');
            });
        }



    }
})();
