var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant("fb", {
	url: "https://scorching-torch-8554.firebaseio.com/"
})

app.config(function($routeProvider){
	$routeProvider
	.when('/threads', {
		templateUrl: 'threads.html',
		controller: 'threadsCtrl',
		resolve: {
			threadsRef: function(threadService){
				return threadService.getThreads();
			}
		}
	})
	.when('/threads/:threadId', {
		templateUrl: 'thread.html',
		controller: 'threadCtrl',
		resolve: {
			threadRef : function(threadService, $route){
				return threadService.getThread($route.current.params.threadId)
			},
			commentsRef: function(threadService, $route){
				return threadService.getComments($route.current.params.threadId);
			}
		}
	})
	.otherwise('/threads')
});
