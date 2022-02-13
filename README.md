# SmartHome

You can configure backend api url in `src/constants.js`.

**Mock API disclaimer**: Backend mock is only for development purposes and it does not provide correct data sets. There might be wrong data in device details modal (up to refresh), because REST server doesnt know about changes from WebSocket server.

## Development build

#### Packages setup
`npm install`

#### REST API mock setup

`npx json-server --watch src/backend-mock/restData.json --routes src/backend-mock/routes.json --port 3001`

#### WebSocket API mock setup

`node ./src/backend-mock/websocketServer.js`

#### Webapp setup

`npm start`

#### View app
Visit `http://localhost:3000/`