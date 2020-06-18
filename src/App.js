import React, { useState } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';

import { Drawer } from 'antd';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
//import './react-geo.css';

import {
  SimpleButton, 
  MapComponent,
  NominatimSearch
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
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  }

  return (
    <div className="App">
        <MapComponent
          map={map}
        >
        </MapComponent>
        <SimpleButton
          style={{position: 'fixed', top: '30px', right: '30px'}}
          onClick={toggleDrawer}
          icon="bars"
        />
        <Drawer
          title="react-geo-application"
          placement="right"
          onClose={toggleDrawer}
          visible={visible}
          mask={false}
        >
          <NominatimSearch
            key="search"
            map={map}
          />
        </Drawer>
    </div>
  );
}

export default App;
