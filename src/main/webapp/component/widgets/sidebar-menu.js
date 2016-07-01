define(
    ['text!./sidebar-menu.vue'],
    function(html) {
        return  {
            template: html,
            data: function() {
                return {
                    menu: this.$root.$data.menu || []
                }
            }
        }
    }
)