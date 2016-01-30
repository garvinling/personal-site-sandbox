/* jshint -W033 */
'use strict'


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;



		$scope.projectCollection = [

			{
				id:1,
				title:'C L P',
				imageURL:'/modules/core/img/CLP_mockup.png',
				hoverImageURL:'/modules/core/img/mockup-test4.gif'
			},
			{
				id:2,
				title:'C O F F E E',
				imageURL:'/modules/core/img/coffee-display.png',
				hoverImageURL:'/modules/core/img/coffeedisplay.gif'

			},
			{
				id:3,
				title:'P R O J E C T',
				imageURL:'/modules/core/img/coffeehousebg.jpg',
				hoverImageURL: 'modules/core/img/CLP_mockup.png'
			},
			{
				id:4,
				title:'P R O J E C T',
				imageURL:'/modules/core/img/hero.png',
				hoverImageURL: 'modules/core/img/mockup-test.gif'
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


		$scope.clickedProject = function(){

			console.log('project')
		}

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








