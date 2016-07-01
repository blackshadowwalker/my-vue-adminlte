define(
    //The name of this module
    // 'app-header',

    //The array of dependencies
    ['html!/component/layout/Header.vue'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function (html) {
        return {
            name: 'layout-header',
            template: html,
            data: function(){
                return { title: 'header title'};
            }
        };
    }
);