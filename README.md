# Socialsend readme
`npm i` and `gulp serve` run development server

## Automated tasks

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
