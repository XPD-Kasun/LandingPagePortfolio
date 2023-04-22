/** Menu data structure to swisscard for both desktop and mobile */

import { HeaderMenu } from "../../components/swisscard/types";

const headerMenu : HeaderMenu = {

       menuItems: [
              {
                     id: 1,
                     name: 'Platform',
                     subMenus: [
                            {
                                   id: 11,
                                   name: 'Personal',
                                   img: '',
                                   category: 'features',
                                   subtitle: 'The only card you need to have'
                            },
                            {
                                   id: 12,
                                   name: 'Vendors',
                                   img: '',
                                   category: 'features',
                                   subtitle: 'Open your business to the world'
                            },
                            {
                                   id: 13,
                                   name: 'Developers',
                                   img: '',
                                   category: 'features',
                                   subtitle: 'Learn SwissCard platform basics'
                            },
                            {
                                   id: 14,
                                   name: 'SwissCard Connect Released',
                                   img: '',
                                   category: 'whatsnew',
                                   subtitle: 'Now we support all major banks'
                            },
                            {
                                   id: 15,
                                   name: 'Documentation',
                                   img: '',
                                   category: 'whatsnew',
                                   subtitle: 'Read the newest platform documentation'
                            },
                            {
                                   id: 16,
                                   name: 'We are hiring',
                                   img: '',
                                   category: 'whatsnew',
                                   subtitle: 'Join With SwissCard Platform People'
                            },
                            {
                                   id: 17,
                                   name: 'SwissCard Social',
                                   img: '',
                                   category: 'whatsnew',
                                   subtitle: 'Update to the latest news from SwissCard'
                            }
                     ]
              },
              {
                     id: 2,
                     name: 'Cards',
                     subMenus: [
                            {
                                   id: 21,
                                   name: 'Platinum',
                                   img: '',
                                   subtitle: 'Practical, accepted and easy'
                            },                            
                            {
                                   id: 22,
                                   name: 'Gold',
                                   img: '',
                                   subtitle: 'Enterprise connection made easy'
                            },
                            {
                                   id: 21,
                                   name: 'Pearl',
                                   img: '',
                                   subtitle: 'For the superior and exclusive handling'
                            }
                     ]
              },
              {
                     id: 3,
                     name: 'Integrations',
                     subMenus: [                            
                            {
                                   id: 31,
                                   name: 'REST API',
                                   img: '',
                                   subtitle: 'Full access to the platform'
                            },
                            {
                                   id: 32,
                                   name: '.NET Integration',
                                   img: '',
                                   subtitle: 'Documentation for .NET'
                            },
                            {
                                   id: 32,
                                   name: 'NodeJS Integration',
                                   img: '',
                                   subtitle: 'Documentation for NodeJS'
                            }
                     ]
              },
              {
                     id: 4,
                     name: 'Pricing',
                     subMenus: []
              },
              {
                     id: 5,
                     name: 'About SwissCard&reg;',
                     subMenus: []
              }
       ]
};

export default headerMenu;