# About

Sample project showing how to enable HTML 5 mode with Angular + Sinatra.

1. configure route: `$locationProvider.html5Mode(true);`
2. set app base:  `<base href="/">`
3. link without prefix: `<a href="/feature">Go to Feature</a>`
4. Server side rewrite: `error Sinatra::NotFound { <render index> }`

# Setup

1. `bower install`
2. `npm install`
3. `bundle install`
4. `rackup` -> http://localhost:9292/
5. `grunt server` (optional) -> http://127.0.0.1:9000/

Access either of the above URLs.

# Links

* https://code.angularjs.org/1.5.7/docs/guide/$location
* https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
* http://stackoverflow.com/questions/8452253/override-sinatra-default-notfound-error-page
