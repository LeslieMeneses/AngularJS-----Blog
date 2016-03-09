var app = angular.module('app',[]);
app.controller('CtrlPost', function ($scope) {
	$scope.posts=[
		{image:"img1", title:"Tile1", contentSmall:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", content:"Content1"},
		{image:"img2", title:"Tile2", contentSmall:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", content:"Content2"},
		{image:"img3", title:"Tile3", contentSmall:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", content:"Content3"},
		{image:"img4", title:"Tile4", contentSmall:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", content:"Content4"},
	];
	$scope.Save=function(){
		$scope.posts.push({
			image: 						$scope.nuevoPost.image,
			title: 						$scope.nuevoPost.title,
			contentSmall: 		$scope.nuevoPost.contentSmall,
			content: 					$scope.nuevoPost.content
		});
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
	$scope.formVisibility=false;
	$scope.showForm=function(){
		$scope.formVisibility=true;
	}
});

