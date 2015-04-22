/*
 * Open Status jQuery plugin version 1.0
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	'use strict';

	$.fn.openStatus = function (options) {

		var settings = $.extend({
				string1 : 'Today is <strong>',
				string2 : '</strong>; we are ',
				string3 : '.'
			}, options),
			$container = this,
			days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			daysHours = [settings.sunday, settings.monday, settings.tuesday, settings.wednesday, settings.thursday, settings.friday, settings.saturday],
			todaysDate = new Date(),
      currentHour = todaysDate.getHours(),
			todayDayNumber = todaysDate.getDay(),
			todayDayString = days[todayDayNumber],
			openingHoursToday = daysHours[todayDayNumber];

      $container.html(openingHoursToday);
      
		return this;

	};

})(jQuery);
