(function() {

	'use strict';

	angular
		.module('blueDental')
		.factory('PatientsService',PatientsService);

	PatientsService.$inject = ['$http', '$location','$q','APP_SETTINGS'];

	function PatientsService($http, $location,$q,APP_SETTINGS){

		var isPrimed = false;
	    var primePromise;

	    var service = {
	        listar: listar,
					create: create
	    };

	    return service;

		///////////////////////////

		function listar(sequencial) {

			var retorno = $q.defer();

			var limit = 5;
			var query = "";

			$http.get(APP_SETTINGS.API_URL+'/v1/patients/clinic/21').success(function(data) {
				retorno.resolve(data);
			})
			.error(function() {
				alert("Aconteceu algo ruim! Verifique sua conexão de internet");
			});

			return retorno.promise;
		}

		function getPatient(id){

				var retorno = $q.defer();

				var limit = 5;
				var query = "";

				$http.get(APP_SETTINGS.API_URL+'/v1/patients/21').success(function(data) {
					retorno.resolve(data);
				})
				.error(function() {
					alert("Aconteceu algo ruim! Verifique sua conexão de internet");
				});

				return retorno.promise;

		}

		function create(patient){

				var retorno = $q.defer();

				var patientToJson = function (){

						return angular.toJson({
						  "name": patient.name,
						  "agreement_id": 17,
						  "phone": patient.phone,
						  "cell_phone": patient.cell_phone,
						  "email": patient.email
						});
				};

				$http.post(APP_SETTINGS.API_URL+'/v1/patients', patientToJson())
				.success(function(result) {
						retorno.resolve(result);
						console.log(result);
				})
				.error(function() {
					alert("Aconteceu algo ruim! Verifique sua conexão de internet");
				});

				return retorno.promise;
		}

		function edit(id){

		}

	}

}());
