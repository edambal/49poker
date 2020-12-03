import axios from 'axios';

const quakeData = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`

class QuakesModel {

  static all = () =>{
    let request = axios.get(quakeData);
    return request;
  }
}

export default QuakesModel;