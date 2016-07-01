define(
    //The name of this module
    // "component/layout/Content",

    //The array of dependencies
    ["vue", 'text!./Content.vue'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function (Vue, html) {
        return Vue.extend({
            template: html,
            data: function(){
                return { pathName : 'app/user/karl'}
            }
        });
    }
);