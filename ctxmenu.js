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
			this.create(menulist);
		}

	CTXMenu.prototype = {

		constructor : CTXMenu,

		create : function(list) {
			var that = this;

			that.ctxwrapper = $("<nav class='ctxmenu'></nav>");

            if (that.options.compact) that.ctxwrapper.addClass('ctxmenu--compact');
            if (that.options.theme === 'dark') that.ctxwrapper.addClass('ctxmenu--dark');

            addMenuItems(list, that.ctxwrapper, false);

			that.ctxwrapper.appendTo('body');

			function addMenuItems(items, elem, isSub) {
				var menuWrapper = isSub ? $('<nav class="ctxmenu--sub"></nav>') : elem;

				$.each(items, function (idx, item) {
					if (item.divider) {
						menuWrapper.append('<nav-item class="ctxmenu--divider"></nav-item>');
					} else {
						var menu = $("<nav-item class='ctxmenu--item'></nav-item>");

						if (item.action)
							menu.click(function(e) {
								item.action(that.elem, e);
								that.hide();
							});

						menu.html(item.menu).appendTo(menuWrapper);

						if (item.subs && item.subs.length > 0) {
							menu.addClass('ctxmenu--hassubs');

							addMenuItems(item.subs, menu, true);
						}
					}
				});

				if (isSub) menuWrapper.appendTo(elem);
			}
		},

		show : function(e) {
			var _anchored = this.options.anchor, _anchorPos = this.options.anchorPos,
				topPos = _anchored ? this.elem.offset().top + this.elem.outerHeight() : e.clientY + 10;

			this.ctxwrapper.css({ top: topPos, 'transform-origin' : 'top ' + (_anchored ? _anchorPos : 'left') })
				.css(_anchored ? _anchorPos : 'left', 
					_anchored ? 
						(_anchorPos === 'left' ? this.elem.offset().left 
							: $(window).width() - (this.elem.offset().left + this.elem.outerWidth()))
						: e.clientX + 10
				).addClass('ctxmenu--open');
		},

		hide : function() {
			this.ctxwrapper.removeClass('ctxmenu--open');
        },

        destroy: function () {
            this.elem.removeData('ctxmenu_data');
            this.ctxwrapper.remove();
        }
	}

	$.fn.ctxmenu = function(opts, list) {
		return $(this).each(function(index, elem) {
			var that = this;
 			var $this = $(that),
 				data = $(that).data('ctxmenu_data'),
 				options = $.extend({}, $.fn.ctxmenu.defaults, $this.data(), !Array.isArray(opts) && opts);

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
 						$this.click(function(e) {
 							e.preventDefault();

 							data['show'](e);
 						});
 					break
 				}

				$(document).bind("mousedown.contextmenu touchstart.contextmenu", function (e) {
	                // Close menu when clicked outside menu
	                if (!$(e.target).closest('.ctxmenu').length) { data['hide'](); }
	            });
 			}
 			if(typeof opts === 'string') data[opts]();
		});
	}

	$.fn.ctxmenu.defaults = {
		theme: 'light',			// Color theme of the menu: light || dark
		compact: false,			// Determines if menu item spacing is compact
		trigger: 'right-click',	// Click type to show the menu: click || right-click
		anchor: false,			// Determines if menu is anchored to the element
        anchorPos: 'right'		// Determines the positioning of the menu (if anchored to element): left || right
	};
}(jQuery);