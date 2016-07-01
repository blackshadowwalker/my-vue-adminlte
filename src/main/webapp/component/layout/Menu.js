define(
    //The name of this module
    // "component/layout/Menu",

    //The array of dependencies
    ["vue", 'text!./Menu.vue'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function (Vue, html) {
        return Vue.extend({
            name: 'app-menu',
            template: html,
            replace: false,
            components: {
                'sidebar-user-panel': function(resolve) { require(['/component/widgets/sidebar-user-panel.js'], resolve); },
                'sidebar-search': function(resolve) { require(['/component/widgets/sidebar-search.js'], resolve); },
                'sidebar-menu': function(resolve) { require(['/component/widgets/sidebar-menu.js'], resolve); }
            }
        });
    }
);