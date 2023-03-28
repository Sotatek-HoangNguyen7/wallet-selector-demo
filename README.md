### `dependencies`

```js
"dependencies": {
    "@babel/core": "^7.21.3",
    "@babel/preset-env": "^7.20.2",
    "@metamask/detect-provider": "^2.0.0",
    "@mui/material": "^5.11.13",
    "@reduxjs/toolkit": "^1.9.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.4",
    "bootstrap": "^5.3.0-alpha1",
    "bootstrap-icons": "^1.10.3",
    "bs58check": "^2.1.2",
    "buffer": "^6.0.3",
    "ethers": "^5.6.8",
    "mina-signer": "git+ssh://git@github.com/sotatek-dev/mina-signer-for-snap.git#master",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-scripts": "5.0.1",
    "react-wallet-selector": "^1.0.8",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "stream": "0.0.2",
    "stream-browserify": "^3.0.0",
    "styled-components": "^5.3.9",
    "web-vitals": "^2.1.4"
  },
```

### `use`

  - ```npm i react-wallet-selector```

```js
  import React from "react";
  import { SelectWalet, SendWalet, SignWalet } from "react-wallet-selector";
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  function App() {

    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-4">
            <SelectWalet />
          </div>
          <div className="col-4">
            <SignWalet />
          </div>
          <div className="col-4">
            <SendWalet />
          </div>
        </div>
      </div>
    );
  }

  export default App;
```
