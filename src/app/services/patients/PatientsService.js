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
	        listar: listar
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

		function returnPerId(id){

		}

		function create(patient){

		}

		function edit(id){

		}

	}

}());
