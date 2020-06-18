import React, { useState } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlLayerGroup from 'ol/layer/Group';
import OlSourceTileJson from 'ol/source/TileJSON';

import { Drawer } from 'antd';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
//import './react-geo.css';

import {
  SimpleButton, 
  MapComponent,
  NominatimSearch,
  MeasureButton,
  LayerTree
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

const layerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      name: 'Food insecurity layer',
      minResolution: 200,
      maxResolution: 2000,
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure',
        crossOrigin: 'anonymous'
      })
    }),
    new OlLayerTile({
      name: 'World borders layer',
      minResolution: 2000,
      maxResolution: 20000,
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure',
        crossOrigin: 'anonymous'
      })
    })
  ]
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
          <MeasureButton
            key="measureButton"
            name="line"
            map={map}
            measureType="line"
            icon="pencil"
          >
            Measure distance
          </MeasureButton>
          <LayerTree
            layerGroup={layerGroup}
            map={map}
          />
        </Drawer>
        
    </div>
  );
}

export default App;
