//=================================
// jQuery cookie manager
// By: ADER Lionel
// 2013-03-09
//
// Require jquery-1.9.1
//=================================

(function($) {
	var settings = {
		name: "",
		value: "",
		days: "",
		path: "/"
	}
	
	var methods = {
		init: function(options) {
			var today = new Date()
			var expire, cookie_string;
			if(options) {
				if(options.name) {
					$.extend(settings, options);
					expire = today.toCookieExpire(settings.days);
					cookie_string = settings.name + '=' + settings.value + "; expires=" + expire + "; path=" + settings.path;
					document.cookie = cookie_string;
				} else {
					$.error("A cookie must have a name !");
				}
			} else {
				$.error("A cookie must have a name !");
			}
		},
		read: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			var value = null;
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) value = c.substring(nameEQ.length,c.length);
			}
			if(value == null) $.error("Cookie '" + name + "' doesn't exists !");
			return value;
		},
		delete: function(cookie) {
			var today = new Date();
			document.cookie = cookie + "=; expires=" + today.toCookieExpire(-1) + "; path=/";
		}
	}
	
	Date.prototype.toCookieExpire = function(days) {
		var offset_date;
		if(days == "" || days == null) {
			offset_date = 365*24*60*60*1000;
		} else {
			offset_date = days*24*60*60*1000;
		}
		this.setTime(this.getTime() + offset_date);
		return this.toGMTString();
	}
	
	$.extend({
		cookie: function(method) {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method \'' + method + '\' doesn\'t exist on jQuery.cookie.');
			}
		}
	});
})(jQuery);
