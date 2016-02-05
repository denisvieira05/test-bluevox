(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('PatientAgreementsCtrl', PatientAgreementsCtrl);

    PatientAgreementsCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function PatientAgreementsCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

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
                vm.patientAgreements = data;
                console.log("PACIENTE :"+id+" - ",vm.patientAgreements);
                return vm.patientAgreements;
            },
            function(){
                alert('erro');
            });
        }

    }
})();
