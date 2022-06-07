# Stack

• react

• react-router

• scss

• gsap

• i18next

• mobx

## Yarn is used to install dependencies

# Structure

• Custom global styles and fonts are defined in './src/styles/*.scss'

• Local styles are imported as module in components

• API calls from './src/common/api/api.js'

• GSAP can be used in './src/common/animations/animations.js'. Styles should be written in the same folder

• Mobx can be used in './src/common/store/*.js'

• Custom hooks in './src/common/hooks/*.js'

• Locales are stored in './public/locales/*/translation.json'

• Routes are defined in './src/common/routing/routes.js'

## Components are separated from pages

# What should be implemented in future

• Implement i18n 

• Language state in mobx store

• Add different components like 'Header', 'Footer', 'Menu', 'Search', 'Cart'

• Add different components like accordeon, tabs, etc.

• Create media queries for different screens