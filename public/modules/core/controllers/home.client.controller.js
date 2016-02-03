/* jshint -W033 */
'use strict'


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.test = 'Work Experience'

		$scope.projectCollection = [

			{
				id:1,
				title:'CLP',
				imageURL:'/modules/core/img/CLPLogin2.png',
				hoverImageURL:'/modules/core/img/clp.gif',
				checked:false,
				details:'CLP (Consolidated List of Projects) is a web application that houses all of the ideas, proof of concepts, pilots, and projects for the Southern California region.',
				technology: 'Node/Express , AngularJS , HTML , CSS',
				highlight1:'-Implemented the interface + interactions provided by the UX/UI team',
				highlight2:'-Wrote the REST API to communicate with our client application',
				highlight3:'-Provided bug fixes and wrote unit tests',
				extraLink:''

			},
			{
				id:2,
				title:'COFFEE',
				imageURL:'/modules/core/img/coffee-display.png',
				hoverImageURL:'/modules/core/img/coffeedisplay.gif',
				checked:false,
				details:'A digital news feed that pulls real-time updates from Twitter and allows users to post their own content via admin panel or Slack integration.',
				technology:'Bootstrap , AngularJS , Node/Express , HTML , CSS/SASS , Slack API , Twitter API',
				highlight1:'-Worked on the REST API and DB schema',
				highlight2:'-Integrated Twitter and Slack API and wrote a slackbot to post user content',
				highlight3:'-Wrote a scheduling algorithm to determine the order/frequency of the content',
				extraLink:''


			},
			{
				id:3,
				title:'WALK ON',
				imageURL:'/modules/core/img/walkon2.png',
				hoverImageURL: 'modules/core/img/walkon.gif',
				checked:false,
				details:'KP WalkOn is a web application for a research project to help KP health coaches monitor the physical activity of patients currently recovering in therapy. '
						+'This application was previously being developed by an external vendor until we decided to migrate the development effort to in-house resources.', 
				technology:'Bootstrap , jQuery , Node/Express , Jade , CSS ',
				highlight1:'-Led the in-house deployment effort and implemented bug fixes to improve the experience',
				highlight2:'-Delivered an enhanced feature set to our client ahead of schedule',
				highlight3:'-Wrote code to automate the file upload process to eliminate the need for the client to do so on a daily basis'

			},
			{
				id:4,
				title:'PROJECT',
				imageURL:'/modules/core/img/roundrobin.png',
				hoverImageURL: 'modules/core/img/mockup-test.gif',
				checked:false
			}
		]



		$scope.jobs = [

			{
				id:1,
				company:'Kaiser Permanente',
				title: 'Software Engineer (Web)',
				period:'November 2014 - Present'

			},


			{
				id:2,
				company:'Western Digital',
				title: 'Controller Firmware Engineer',
				period:'June 2013 - November 2014'

			},

			{
				id:3,
				company:'GIAC',
				title: 'Firmware Engineer Intern',
				period:'October 2011 - June 2013'

			}


		]


		$scope.clickedProject = function(projectID){
			projectID = projectID - 1

			for(var i = 0 ; i < $scope.projectCollection.length; i++)
			{
				if(projectID === i)
				{
					$scope.projectCollection[i].checked = true

				}
				else
				{
					$scope.projectCollection[i].checked = false
				}
				
			}

			// $scope.projectCollection[projectID].checked = !$scope.projectCollection[projectID].checked




			$scope.updateText($scope.projectCollection[projectID].title)
		}


		$(window).scroll(function() {
			console.log('3')
		  var scrolledY = $(window).scrollTop();
		  $('#container').css('background-position', 'left ' + ((scrolledY)) + 'px');
		});


	}
]);



angular.module('core').directive('typewrite', ['$timeout', function ($timeout) {
		function linkFunction (scope, iElement, iAttrs) {
			var timer = null,
				initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
				typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
				blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
				cursor = iAttrs.cursor ? iAttrs.cursor : '|',
				blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === "true" : true,
				auxStyle;


			scope.updateText = function(val){
				console.log(iElement)
				if (iAttrs.text) {
					timer = $timeout(function() {
						updateIt(iElement, 0, val);
					}, initialDelay);
				}

			}



			if (iAttrs.text) {
				timer = $timeout(function() {
					updateIt(iElement, 0, iAttrs.text);
				}, initialDelay);
			}



			function updateIt(element, i, text){
				if (i <= text.length) {
					element.html(text.substring(0, i) + cursor);
					i++;
					timer = $timeout(function() {
						updateIt(iElement, i, text);
					}, typeDelay);
					return;
				} else {
					if (blinkCursor) {
						if (blinkDelay) {
							auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
										'-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
										'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
							element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
						} else {
							element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
						}
					} else {
						element.html(text.substring(0, i));
					}
				}
			}

			function getTypeDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
				}
			}

			function getAnimationDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
				}
			}


    


			scope.$on('$destroy', function() {
				if(timer) {
					$timeout.cancel(timer);
				}
			});
		}

		return {
			restrict: 'A',
			link: linkFunction,
			scope: false
		};

	}]);








