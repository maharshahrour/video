import axios from 'axios';
const KEY='AIzaSyAMtlCQrF8nzWb7H61FoWru4ZELxKEnK30';

export default axios.create({

  baseURL : 'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }

});
