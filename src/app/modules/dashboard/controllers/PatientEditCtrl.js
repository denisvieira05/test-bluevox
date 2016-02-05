(function () {
    'use strict';
    angular.module('blueDental.dashboard').controller('PatientEditCtrl', PatientEditCtrl);

    PatientEditCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','PatientsService','$stateParams'];

    function PatientEditCtrl($scope, $rootScope, $location, APP_SETTINGS,PatientsService,$stateParams) {

        var vm = this;

        vm.patientId = $stateParams.id;

        vm.returnRoute = returnRoute;
        vm.editPatient = editPatient;


        activate();
        function activate() {
            return getPatient(vm.patientId).then(function() {
                // console.log('Activated Patients View');
            });
        }

        //////////////////////////////////////////////////////////

        function editPatient(patient){
            // console.log(patient);
            return PatientsService.edit(patient).then(function(data){
                $location.path("/dashboard");
                // vm.patients.push(patient);
            },
            function(){
                alert('erro');
            });
        }


        function returnRoute(){
            $location.path("/dashboard");
        }
       function getPatient(id){
            return PatientsService.getPatient(id).then(function(data){
                vm.patientEdit = data;
                console.log("PACIENTE :"+id+" - ",vm.patientEdit);
                return vm.patientEdit;
            },
            function(){
                alert('erro');
            });
        }



    }
})();
