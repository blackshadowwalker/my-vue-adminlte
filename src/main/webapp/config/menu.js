define(
    //The name of this module
    // "config/menu",

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function () {
          return [
            {
              name: 'Dashboard',
              link: '/dashBoard',
              icon: 'fa-home'
            },
            {
              name: 'UI Elements',
              icon: 'fa-laptop',
              child: [
                {
                  name: 'General',
                  link: '/ui/general',
                  icon: 'fa-circle-o'
                },
                {
                  name: 'Icons',
                  link: '/ui/icons',
                  icon: 'fa-circle-o'
                },
                {
                  name: 'Buttons',
                  link: '/ui/buttons',
                  icon: 'fa-circle-o'
                },
                {
                  name: 'Sliders',
                  link: '/ui/sliders',
                  icon: 'fa-circle-o'
                },
                {
                  name: 'Timeline',
                  link: '/ui/timeline',
                  icon: 'fa-circle-o'
                },
                {
                  name: 'Modals',
                  link: '/ui/modals',
                  icon: 'fa-circle-o'
                }
              ]
            },
            {
              name: 'Configurations',
              link: '/configurations',
              icon: 'fa-cogs'
            }
          ]
    }
);

