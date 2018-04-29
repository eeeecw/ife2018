const san = require('san');
window.onload = function() {
    var MyApp = san.defineComponent({
        template: '<p>Hello {{name}}!</p>',

        initData: function() {
            return {
                name: 'San'
            };
        }
    });


    var myApp = new MyApp();
    myApp.attach(document.body);
}