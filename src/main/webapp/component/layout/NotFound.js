define(
    //The name of this module
    //The array of dependencies
    ["vue", 'text!./NotFound.vue'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function (Vue, html) {
        return {
            template: html
        };
    }
);