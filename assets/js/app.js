global.$ = global.jQuery = require('jquery')
const ReactDOM = require("react-dom")
const React = require("react")
const FontAwesome = require('react-fontawesome');
require("bootstrap-sass")
// require("bootstrap-sass/assets/stylesheets/_bootstrap.scss");

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <h3>Requirements:</h3>
        <ul>
            <li><FontAwesome name={'home'}/> PHP 7.1+</li>
            <li>Yarn</li>
            <li>Composer</li>
        </ul>
        <h3>Setup:</h3>
        <ul>
            <li>Run <em>composer install</em></li>
            <li>Run <em>yarn install</em></li>
        </ul>
        <h3>To start the app:</h3>
        <ul>
            <li>Run <em>php bin/console server:start</em></li>
            <li>Run <em>yarn run encore watch</em> to compile sass+js</li>
        </ul>
        <h3>Important info:</h3>
        <ul>
            <li>Frontend App is inside ./assets</li>
            <li>Backend code is in ./src</li>
            <li>Backend templates is in ./templates</li>
        </ul>
    </div>
    ,
    document.getElementById('root')
)