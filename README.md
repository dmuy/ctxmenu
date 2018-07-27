# ctxmenu
Material inspired context menu plugin

## How to use
Make sure you include the jQuery library first. Include `ctxmenu.min.css` and `ctxmenu.min.js` in your html markup:
``` html
<link rel="stylesheet" type="text/css" href="ctxmenu.min.css">
<script type="text/javascript" src="ctxmenu.min.js"></script>
```

### Initialize 
Initialize with default settings using an array of menu objects.
``` javascript
$(document).ready(function(){
  $('#elementId').ctxmenu([{
    menu: 'Cut', action: function(e) { // do something }
  }, {
    menu: 'Copy', action: function (e) { // do something }
  }, {
    menu: 'Paste', action: function(e) { // do something }
  }, 
  { divider: true }, // Adds a divider
  {
    menu: 'Select All', action: function (e) { // do something }
  }]);
});
```
Sample:

![alt text](https://lh3.googleusercontent.com/jhcZgnUcD2FenTymXnAenCagvI7pughkJAdMoK8VCsqgh4H2iSPLJiixE28IB5NEz5Y5rywC8HCICdSaOf4mRnxtUqcXYN7ast2pCORgADcXIX_9HYu072SG_Lxu_wYuaJ8c-eJ0jTVFeFbPi20zz_Xx7N7TaJll9h53fVwy5upPPp0WDfd-z7LRJ7G52vw0EpW0wChUbhy0YUcmhVAFXnrlFH8FzG5Vs-SycyRc6UnQP9yqrZb2GCjS_llUW3aO3Xc_nfWGYXDgmyN9mzIaMQFbu8jWHocEgqPluennuyniinWdfGUZRHucELmkeyPqH0f_XlMPjhzQbyqzGUUAQtj84Ijs3RnuOy9fGYFm6CMCl3Gv2wTPJLs3GbU4XjPglnBy7bwWJt13FgLqHPmWNO1UG9ftxpr1rB05rdJESqfF6uedVyBEI67aEED1316hqT19ED4QLqPuDBB5ZFoWcIPXl-pAz5FklNdG2Pk6tUYVBs_bICDJDwp-S66pgX4EBNxGNw9Sv0Jx-okmvbXq5sU-A8jxT3Na8DZGYoIeAICAjzrIkaKUDWdU_hQfvoNQgcid0f0cThHMbxlRj2SgSe-OFEFFjBjy5p_SwGk=w196-h281-no "ctxmenu")

Initialize with additional settings
``` javascript
$(document).ready(function(){
  $('#elementId').ctxmenu({ theme: 'dark', trigger: 'click' }, [{
    menu: '<i class="material-icons">content_cut</i>Cut', 
    action: function(e) { // do something }
  }, {
    menu: '<i class="material-icons">content_copy</i>Copy',
    action: function (e) { // do something }
  }, {
    menu: '<i class="material-icons">content_paste</i>Paste', 
    action: function(e) { // do something }
  }, 
  { divider: true }, // Adds a divider
  {
    menu: '<i class="material-icons">select_all</i> Select All',
    action: function (e) { // do something }
  }]);
});
```
Sample:

![alt text](https://lh3.googleusercontent.com/9-G8UIpVNZdW3s4vDRfK55MIIeKb_QEKfXzmF2wIYjccstOjsSmZq0kZCGAd57qzAP4Gn1jQgmiqPvKyNExPymH5uConX_fa5uKhyeTwcKzWpiQUYkgWQt209NAgRJZof5oATm-aDuPYP6rPc22zZEly1NFTICzC3QziPndip7yggaU6KkxBRR3mzbN2y6rKIU6UfCkMgZo4jK4c74GanMqZcBosn58yP4BiQlg3MjNumB642V42IBe3NByc0RBJAXvmEfKPK7GQa6i6fnJO1faKejFI5pspMkGd8Nuk0IfIXX45Qba3ll9-O5mhYdzqcHvQ7TEVQlYQ8Yu6GPtBxeLCnZ0-IuYo2EUnbxflKTKFUWJelL_ieVF5c23xbUvvDyYppcTpI-ROEh5V-9DEdLF8vlp160ikdiCoMJuJC9ibue4Xn6tmyRNJVIdO1rX_6fFgXxlvADr91AxAemWnlTvBBGG-dIyvZm-mQZJ_S5s49l1ToiXYkWBr2PCo1R2FmbV40jua-4ExO5PE1ncbCrmWs6vz-ZEZhi5BLVXKxmr8Em23zDmSygVCDTLpDhQDkaJqcPznWLYndjeQYjTWD8DPowA2EBhkV3f_YMs=w174-h252-no "dark ctxmenu with icons")


## Menu object
``` javascript
{
  menu: 'Menu 1', // Menu label; accepts plain text or html
  action: function(el, evt){}, // Performed when clicking then menu item: el (element), evt (click event)
  divider: true  // Use this only when you want to add a divider
}
```
## Configurations
Below is the default configuration of ctxmenu.
``` javascript
{
  theme: 'light',			// Color theme of the menu: light || dark
  compact: false,			// Determines if menu item spacing is compact
  trigger: 'right-click',	// Click type to show the menu: click || right-click
  anchor: false,			// Determines if menu is anchored to the element
  anchorPos: 'right'		// Determines the positioning of the menu (if anchored to element): left || right
}
```
