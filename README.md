# React Fast Performance
React App focused on performance

### General Tools Used in this project
React, Babel, Webpack, Webpack-Dev-Server, Hot-Reloading, PostCSS (faster SaSS alternative), FlexBox

### Performance Tools Used to optimize the size of the App (90% reduction of original app size)
Clean build, optimize html, extract css, dedupe (optional), separate js bundles, js minification,
react production settings, Webpack Analysis Tool

### Reusable React Components:
* To embed YouTube videos.
* To display Font Awesome icons.
* To display data from the GitHub API (using lifecycle methods).
* To keep track of a project workflow and tasks.
* To customize the html button tag.
* To display a group of button components.
* To customize the html input, input label and form tags.
* To display charts (using rumble-charts module).

### Routing
* Using react-router. The landing component acts like main holder of the subpages.

### Multi-device UI Testing
* Using Browsersync to test the UI in different mobile devices (to be tested with XCode
  and iOS Simulator). Use the script in package.json to run this test.

### Linting Tools
* Installed modules for linting with ESLint.
* Installed modules for CSS linting with StyleLint.

### Testing Tools and important notes.
* Main tools: Mocha (test runner in the server), Chai (assertion library), Sinon (spies) and Instanbul (test coverage).
* Passing arrow functions to Mocha is discouraged when the test uses the "this" keyword. Their lexical binding of the "this"
value makes them unable to access the Mocha context.
* We do not need to supply the path to our tests as Mocha picks up ./test/ by default for tests to run.

### Refactoring exercises.
* Refactored ES5 Todo App presented in React's documentation page.
* Use of SVG icons instead of Font Awesome icons: see IconSvg.jsx component (not implemented: use of IconSvg instead of IconText).

### Redux implementation
* Implemented in Features List App.

### Firebase implementation
* Firebase hosting

### Miscellanea
* Redux DevTools integration
