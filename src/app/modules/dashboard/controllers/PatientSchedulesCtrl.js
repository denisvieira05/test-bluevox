(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('PatientSchedulesCtrl', PatientSchedulesCtrl);

    PatientSchedulesCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function PatientSchedulesCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

        var vm = this;

        vm.patientId = $stateParams.id;

        vm.getPatient = getPatient;

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
