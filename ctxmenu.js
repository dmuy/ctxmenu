/* -- DO NOT REMOVE --
 * Material inspired CTXMenu 1.0 plugin
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */
if (typeof jQuery === 'undefined') { throw new Error('CTXMenu: This plugin requires jQuery'); }
 
+function ($) {
	var CTXMenu = function(elem, options, menulist) {
		this.elem = $(elem);
		this.options = options;
		this.menus = menulist;
		this.ctxwrapper = $(document.createElement(options.menuElem));
	}, ctxMenuItem = { menu: '', action: null, divider: false, disable: false };

	CTXMenu.prototype = {

		constructor : CTXMenu,

		create : function(callback) {
			var that = this, list = that.menus;

			that.ctxwrapper.addClass('ctxmenu');

            if (that.options.compact) that.ctxwrapper.addClass('ctxmenu-compact');
            if (that.options.theme === 'dark') that.ctxwrapper.addClass('ctxmenu-dark');

			that.ctxwrapper.empty().appendTo('body').bind('contextmenu', function (e) { return false; });

            addMenuItems(list, that.ctxwrapper, false, callback);

			function addMenuItems(items, elem, isSub, cb) {
				var menuWrapper = isSub ? $(document.createElement(that.options.menuElem)) : elem;

				if (isSub) menuWrapper.addClass('ctxmenu-sub');

				$.each(items, function (idx, menu) {
					var item = $.extend({}, ctxMenuItem, menu);

					if (item.divider) {
						$(document.createElement(that.options.itemElem))
							.addClass('ctxmenu-divider').appendTo(menuWrapper);
					} else {
						var menuElem = $(document.createElement(that.options.itemElem)),
							_disabled = typeof item.disable === 'function' ? item.disable() : item.disable;

						menuElem.addClass('ctxmenu-item');

						if (item.action && !_disabled)
							menuElem.on('click touchstart', function(e) {
								item.action(that.elem, e);
								that.hide();
							});

						if (_disabled) menuElem.addClass('ctxmenu--disabled');
						if (item.icon) menuElem.append(item.icon);

						$(document.createElement('span'))
							.addClass('ctxmenu-text').text(item.menu).appendTo(menuElem);
						
						menuElem.appendTo(menuWrapper);

						if (item.subs && item.subs.length > 0) {
							menuElem.addClass('ctxmenu--hassubs');

							addMenuItems(item.subs, menuElem, true, cb);
						}
					}
				});

				if (isSub) menuWrapper.appendTo(elem);
				if (cb) setTimeout(cb, 0);
			}
		},

		show : function(e) {
			var that = this, _anchored = that.options.anchor, _anchorPos = that.options.anchorPos, _isTouch = e.type === 'touchstart',
				topPos = _anchored ? that.elem.offset().top + that.elem.outerHeight() : (_isTouch ? e.originalEvent.touches[0].pageY : e.clientY) + 10;

			that.create(function () {
				that.ctxwrapper.css({ top: topPos, 'transform-origin' : 'top ' + (_anchored ? _anchorPos : 'left') })
					.css(_anchored ? _anchorPos : 'left', 
						_anchored ? 
							(_anchorPos === 'left' ? that.elem.offset().left 
								: $(window).width() - (that.elem.offset().left + that.elem.outerWidth()))
							: (_isTouch ? e.originalEvent.touches[0].pageX : e.clientX) + 10
					).addClass('ctxmenu--open');
			});
		},

		hide : function() {
			var that = this;

			that.ctxwrapper.removeClass('ctxmenu--open');
			setTimeout(function () { that.ctxwrapper.remove(); }, 0);
        },

        destroy: function () { this.elem.removeData('ctxmenu_data'); }
	}

	/*
	* _ctxArgs[0] - menu list
	* _ctxArgs[1] - configurations
	*/
	$.fn.ctxmenu = function() {
		var _ctxArgs = arguments;

		return $(this).each(function(index, elem) {
			var that = this, $this = $(that), data = $(that).data('ctxmenu_data'), list = _ctxArgs[0], opts = _ctxArgs[1],
 				options = $.extend({}, $.fn.ctxmenu.defaults, !Array.isArray(opts) && opts);

 			if(!data) {
 				$this.data('ctxmenu_data', (data = new CTXMenu(this, options, Array.isArray(opts) ? opts : list)));

 				switch(options.trigger){
 					case 'right-click':
 						$this.bind('contextmenu', function (e) {
 							data['show'](e);
		 					return false; 
		 				});
 					break;
 					case 'click':
 						var clickTO = null;

 						$this.on('touchmove', function () {
 							clearTimeout(clickTO);
 						}).on('click touchstart', function(e) {
 							clickTO = setTimeout(function () {
	 							data['show'](e);
	 							$('.ctxmenu').not(data.ctxwrapper).removeClass('ctxmenu--open').remove(); 								
 							}, e.type === 'touchstart' ? 150 : 0);
 						});
 					break
 				}

				$(document).bind("mousedown.contextmenu touchstart.contextmenu", function (e) {
	                // Close menu when clicked outside menu
	                if (!$(e.target).not($this).closest('.ctxmenu').length) data['hide']();
	            });

	            $(window).bind('blur', function () { data['hide']() });
 			}
 			if(typeof _ctxArgs[0] === 'string') data[_ctxArgs[0]]();
		});
	}

	$.fn.ctxmenu.defaults = {
		theme: 'light',			// Color theme of the menu: light || dark
		compact: false,			// Determines if menu item spacing is compact
		trigger: 'right-click',	// Click type to show the menu: click || right-click
		anchor: false,			// Determines if menu is anchored to the element
        anchorPos: 'right',		// Determines the positioning of the menu (if anchored to element): left || right
        menuElem: 'nav',		// Determines the wrapper DOM element to use
        itemElem: 'nav-item'	// Determines the menu item DOM element to use
	};
}(jQuery);