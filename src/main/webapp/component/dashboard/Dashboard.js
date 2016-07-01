define(
    ["vue", 'text!./Dashboard.vue'],
    function (Vue, html) {
        return Vue.extend({
            template: html,
            data: function(){
                return { }
            }
        });
    }
);