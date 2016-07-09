define(['html!./General.vue', 'css!./General.css'], function(html, css){
    return {
        template: html,
        data: function() {
            return {}
        },
        ready: function() {
            //update data 
        },
        route: {
            data: function() {
                console.log('General hook data!' + location.hash)
            },
            activate: function (transition) {
                console.log('General hook activated!')
                transition.next()
            },
            deactivate: function (transition) {
                console.log('General hook deactivated!')
                transition.next()
            }
        }
    }
});