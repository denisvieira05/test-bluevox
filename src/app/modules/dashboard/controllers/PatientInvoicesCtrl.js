(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('PatientInvoicesCtrl', PatientInvoicesCtrl);

    PatientInvoicesCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function PatientInvoicesCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

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
                vm.patientInvoices = data;
                console.log("PACIENTE :"+id+" - ",vm.patientInvoices);
                return vm.patientInvoices;
            },
            function(){
                alert('erro');
            });
        }

    }
})();
