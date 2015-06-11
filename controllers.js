var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, $firebaseArray, threadsRef){

	$scope.threads = $firebaseArray(threadsRef);

	$scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

	$scope.createThread = function(username, title){
		$scope.threads.$add({
			username: username,
			title: title
		})
	}


})

app.controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject){

	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text){
		$scope.comments.$add({
			username: username,
			text: text
		})
	}
})