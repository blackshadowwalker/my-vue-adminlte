(function (exports) {

    'use strict';

    require.config({
        baseUrl: "static/plugins",
        xhtml: true,
        paths: {
            "jquery": "jQuery/jQuery-2.1.4.min",
            "vue": "vue/vue",
            "vue-router": [ "https://cdnjs.cloudflare.com/ajax/libs/vue-router/0.7.10/vue-router",
                            "vue/vue-router"],
            "vue-resource": "https://cdn.jsdelivr.net/vue.resource/0.9.1/vue-resource.min",
            "text": "require/text/requirejs-text",
            "html": "require/html/requirejs-html",
        },
        shim: {
            'bootstrap': '/static/bootstrap/js/bootstrap.min.js',
            'DashBoard': '/static/dist/js/pages/dashboard1.js',
            'DashBoard2': '/static/dist/js/pages/dashboard2.js',
            'Demo': '/static/dist/js/demo.js'
        }
    });

    require(['vue', 'vue-router', 'vue-resource', "html!/component/app/app.vue"],
    function (Vue, VueRouter, VueResource, appHtml) {

        Vue.use(VueRouter);
        Vue.use(VueResource);

        var router = new VueRouter({ linkActiveClass: 'active', history: true })

        var Header    = function(resolve) { require(['/component/layout/Header.js'], resolve); }
        var NotFound  = function(resolve) { require(['/component/layout/NotFound.js'], resolve); }
        var Menu      = function(resolve) { require(['/component/layout/Menu.js'], resolve); }
        var Content   = function(resolve) { require(['/component/layout/Content.js'], resolve); }
        var Footer    = function(resolve) { require(['/component/layout/Footer.js'], resolve); }
        var DashBoard = function(resolve) { require(['/component/dashboard/Dashboard.js'], resolve); }

        exports.Vue = Vue;
        Vue.config.debug = true
        exports.App = Vue.extend({
            name: 'app',
            template: appHtml,
            data: function(rev) {
                return {
                    title: 'CRM',
                    menu: []
                }
            },
            ready: function(){
                var _this = this;
                require(['/config/menu.js'], function(m) {
                    _this.menu = m;
                })
            },
            replace: false,
            components: {
                'app-header': Header,
                'app-menu': Menu,
                'app-content': Content,
                'app-footer': Footer
            }

        });


        router.map({
            '/*': {
                component: NotFound
            },
            '/dashBoard': {
                component: DashBoard
            },
            '/ui/general': {
                component: Header
            }
        })

        router.start(App, "#app");

    })

})(window);