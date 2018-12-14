## How to use
Make sure you include the jQuery library first. Include `ctxmenu.min.css` and `ctxmenu.min.js` in your html markup:
``` html
<link rel="stylesheet" type="text/css" href="ctxmenu.min.css">
<script type="text/javascript" src="ctxmenu.min.js"></script>
```

### CDN
Use the following if you don't want to host the `js` and `css` files:
```
https://cdn.jsdelivr.net/gh/dmuy/ctxmenu/ctxmenu.css
https://cdn.jsdelivr.net/gh/dmuy/ctxmenu/ctxmenu.js
```
Minified version:
```
https://cdn.jsdelivr.net/gh/dmuy/ctxmenu/ctxmenu.min.css
https://cdn.jsdelivr.net/gh/dmuy/ctxmenu/ctxmenu.min.js
```

[Learn more about the CDN](https://www.jsdelivr.com/features#gh)

### Menu object
``` javascript
{
  icon: '<icon markup here>',   // Menu icon markup - material icons already has styling; you need to add your own styling for other icon fonts
  menu: 'Menu 1',               // Menu label; accepts plain text or html
  action: function(el, evt){},  // Performed when clicking then menu item: el (element), evt (click event)
  subs: [],                     // Array of menu objects which serves as sub menu
  divider: true                 // Use this only when you want to add a divider
  disable: false                // Determines if menu item is disabled: default value is false, you can also use a function which returns a boolean value
}
```

### Configurations
Below is the default configuration of ctxmenu.
``` javascript
{
  theme: 'light',   // Color theme of the menu: light || dark
  compact: false,   // Determines if menu item spacing is compact
  trigger: 'right-click', // Click type to show the menu: click || right-click
  anchor: false,    // Determines if menu is anchored to the element
  anchorPos: 'right',  // Determines the positioning of the menu (if anchored to element): left || right
  menuElem: 'nav',  // Determines the wrapper DOM element to use
  itemElem: 'nav-item'  // Determines the menu item DOM element to use
}
```

### Initialize 
Initialize with default settings using an array of menu objects.
``` javascript
$(document).ready(function(){
  $('#elementId').ctxmenu([{
    menu: 'Cut', action: function(e) {
      // do something 
    }
  }, {
    menu: 'Copy', action: function (e) {
      // do something 
    }
  }, {
    menu: 'Paste', action: function(e) {
      // do something
    }
  }, 
  { divider: true }, // Adds a divider
  {
    menu: 'Select All', action: function (e) {
      // do something
    }
  }]);
});
```
Sample:

![alt text](https://lh3.googleusercontent.com/jhcZgnUcD2FenTymXnAenCagvI7pughkJAdMoK8VCsqgh4H2iSPLJiixE28IB5NEz5Y5rywC8HCICdSaOf4mRnxtUqcXYN7ast2pCORgADcXIX_9HYu072SG_Lxu_wYuaJ8c-eJ0jTVFeFbPi20zz_Xx7N7TaJll9h53fVwy5upPPp0WDfd-z7LRJ7G52vw0EpW0wChUbhy0YUcmhVAFXnrlFH8FzG5Vs-SycyRc6UnQP9yqrZb2GCjS_llUW3aO3Xc_nfWGYXDgmyN9mzIaMQFbu8jWHocEgqPluennuyniinWdfGUZRHucELmkeyPqH0f_XlMPjhzQbyqzGUUAQtj84Ijs3RnuOy9fGYFm6CMCl3Gv2wTPJLs3GbU4XjPglnBy7bwWJt13FgLqHPmWNO1UG9ftxpr1rB05rdJESqfF6uedVyBEI67aEED1316hqT19ED4QLqPuDBB5ZFoWcIPXl-pAz5FklNdG2Pk6tUYVBs_bICDJDwp-S66pgX4EBNxGNw9Sv0Jx-okmvbXq5sU-A8jxT3Na8DZGYoIeAICAjzrIkaKUDWdU_hQfvoNQgcid0f0cThHMbxlRj2SgSe-OFEFFjBjy5p_SwGk=w196-h281-no "ctxmenu")

Initialize with additional settings
``` javascript
$(document).ready(function(){
  // first parameter is an array of menu objects, second is the configuration object
  $('#elementId').ctxmenu([{
    icon: '<i class="material-icons">content_cut</i>',
    menu: 'Cut', 
    action: function(e) { 
      // do something 
    }
  }, {
    icon: '<i class="material-icons">content_copy</i>',
    menu: 'Copy',
    action: function (e) { 
      // do something 
    }
  }, {
    icon: '<i class="material-icons">content_paste</i>',
    menu: 'Paste', 
    action: function(e) { 
      // do something 
    }
  }, 
  { divider: true }, // Adds a divider
  {
    icon: '<i class="material-icons">select_all</i>',
    menu: 'Select All',
    action: function (e) { 
      // do something 
    }
  }], { theme: 'dark', trigger: 'click' });
});
```
Sample:

![alt text](https://lh3.googleusercontent.com/9-G8UIpVNZdW3s4vDRfK55MIIeKb_QEKfXzmF2wIYjccstOjsSmZq0kZCGAd57qzAP4Gn1jQgmiqPvKyNExPymH5uConX_fa5uKhyeTwcKzWpiQUYkgWQt209NAgRJZof5oATm-aDuPYP6rPc22zZEly1NFTICzC3QziPndip7yggaU6KkxBRR3mzbN2y6rKIU6UfCkMgZo4jK4c74GanMqZcBosn58yP4BiQlg3MjNumB642V42IBe3NByc0RBJAXvmEfKPK7GQa6i6fnJO1faKejFI5pspMkGd8Nuk0IfIXX45Qba3ll9-O5mhYdzqcHvQ7TEVQlYQ8Yu6GPtBxeLCnZ0-IuYo2EUnbxflKTKFUWJelL_ieVF5c23xbUvvDyYppcTpI-ROEh5V-9DEdLF8vlp160ikdiCoMJuJC9ibue4Xn6tmyRNJVIdO1rX_6fFgXxlvADr91AxAemWnlTvBBGG-dIyvZm-mQZJ_S5s49l1ToiXYkWBr2PCo1R2FmbV40jua-4ExO5PE1ncbCrmWs6vz-ZEZhi5BLVXKxmr8Em23zDmSygVCDTLpDhQDkaJqcPznWLYndjeQYjTWD8DPowA2EBhkV3f_YMs=w174-h252-no "dark ctxmenu with icons")

### Sub menu
You can add sub menu by using the `subs` property of the menu object. You can still specify the `action` property even if the menu item has subs, or you can ditch it (as shown below).

*Note: Sub menu will show open hover of the parent menu.*
``` javascript
$(document).ready(function(){
  $('#elementId').ctxmenu([{
    menu: 'Open', action: function (e) { 
      // do something 
    }
  }, {
    menu: 'Save', action: function(e) { 
      // do something 
    }
  }, 
  { divider: true }, // Adds a divider
  {
    menu: 'Options', subs: [{
      menu: 'Option 1', action: function(el, evt){ 
        // do something 
      }
    },{
      menu: 'Option 2', action: function(el, evt){ 
        // do something 
      }
    },{
      menu: 'Option 3', action: function(el, evt){ 
        // do something 
      }
    }]
  }]);
});
```
Sample: 

![alt text](https://lh3.googleusercontent.com/XfCg0Ede1S-2iAdv4bo63PR6JebmGtJLC4E6sbikX5qil-jPFDkTygPLh7O7dJ7mQ8hASMtRnU5wV4QFmCqduUt4-DB-pS5S30tpxffwYpPK03r1fr4kgog1KR4Asgl4IL3vamYCVTVLNGoFN2QSysk7h-Kr1-Mqk76qbyqLIIzGrBrYMzkZvStu4cqwXzOY-_5jJ2vAEioHWuSvsU4Etw18u5zMECbg-dBjCFC2xrOoodYS4xxY0J3AuYJpp7qrot_cMpnJdoVxR_vVgDfxI_uBZDgXrJOl--iLp_5Byc31a9SbDaoe2wezR0p_Sc0l7joV6WnY4VlRc02njTe6DcIkloufulNrAFC1T6VeUU1oTOZzGraFf9w7whTKDssXdIA4MoqyIiFnBGJV72u7zNE2OLb3sbjLdziXWYH2et4ugg-YGgxfk1o5G6gD9fdZvtsydNZtVUy8J5bI0Dg6giVWiokSrvzCyb-awdserK5krtxvjmZT2EJRXN9yEjvDEJ7DKw13Oe0rrZrUlXNtjvRbXSBXdZnJAI42Mm7Mf0ZvtnEg3l8RsWEJT8ZdFtVz0AGRTkSk4Krm7-S3M1FlslEuKqEEzj6vI_lz9kM=w318-h298-no "ctxmenu with subs")