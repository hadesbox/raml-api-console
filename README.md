# RAML API Console

Modified RAML API Console so it can autoload files by using a url parameter.

Please refer to the official repo to get the latest versión of this tool.

### Changes

I have added a service to autoload the RAML files based on the "api" parameter.

This version of the API Console CAN be installed in the same server as the [modified version of the API Designer](https://github.com/hadesbox/raml-api-designer-store), this will permit to use the SAME local mongo instances an REST RAML service (on port 10000), so the Console can be used by the API integrators without having to load the RAML each time.

If you go the root of the service it will act as the normal API Console http://localhost:9000/

![API CONSOLE](http://i.imgur.com/81pUe55.png)

but if you send the query parameter "api" with the same name as a local RAML file in your api designer, http://localhost:9000/?api=__myapi__


![API CONSOLE](http://i.imgur.com/wT6iTEm.png)

it will try to call the corresponding rest service http://localhost:10000/__myapi__ to fetch the RAML file, and show its console

 
Remember you MUST have the Api Designer [from this repo installed](https://github.com/hadesbox/raml-api-designer-store) on the same server , also the "Proxy" setting should be properlly configured.
 
 
### First Time Setup

This follows the same procedure as the official API Console.

1. Install grunt-cli globally - `npm install -g grunt-cli`
2. Install bower globally - `npm install -g bower`
3. Install the console's NPM packages - `npm install`
4. Install the console's Bower packages - `bower install`

### Running the server

    $ grunt server
    $ open http://localhost:9000

 
Remember to change the proxy settings in app/scripts/directives/raml_console_initializer.js
```
 $scope.consoleLoader.location = 'http://localhost:10000/' + api;
```
 
 and app/scripts/settings.js
```
 'RAML.Settings.proxy = 'http://localhost:10000/proxy/';
```
