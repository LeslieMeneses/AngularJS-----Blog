var app = angular.module('app',[]);
app.controller('CtrlAlumnos', function ($scope) {
	$scope.alumnos=[
		{nombre: "Catalina Meneses", telefono:"12242", curso: "Angular 01"},
		{nombre: "Mery Carmona", telefono:"34612", curso: "Angular 02"},
		{nombre: "Anx Curs", telefono:"34556", curso: "Angular 03"},
		{nombre: "Lupe Caa", telefono:"34542", curso: "Angular 04"},
	];
	$scope.Save=function(){
		$scope.alumnos.push({
			nombre: 		$scope.nuevoAlumno.nombre,
			telefono: 	$scope.nuevoAlumno.telefono,
			curso: 			$scope.nuevoAlumno.curso
		});
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
	$scope.formVisibility=false;
	$scope.showForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
});

