define(
    //The name of this module
    // "component/layout/Footer",

    //The array of dependencies
    ["vue", 'text!./Footer.vue'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function (Vue, html) {
        return Vue.extend({
            name: 'app-footer',
            template: html
        });
    }
);