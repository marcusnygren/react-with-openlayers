import React from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
//import './react-geo.css';

import {
  SimpleButton, MapComponent
} from '@terrestris/react-geo';

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const center = [ 788453.4890155146, 6573085.729161344 ];

const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 16,
  }),
  layers: [layer]
});

function App() {
  return (
    <div className="App">
        <div className="App">
          <MapComponent
            map={map}
          />
        </div>
        <SimpleButton
          onClick={() => {alert('Hello World!');}}
          icon="bars"
        />
    </div>
  );
}

export default App;
