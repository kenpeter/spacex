'use strict';

const Hapi = require('hapi');
const jp = require('jsonpath');

const launches = require('./resources/launches.json');
const launchpads = require('./resources/launchpads.json');

const getLaunchesHandler = (req, resp) => {
  console.log('GET /launches');
  return resp(launches);
  
};

const getLaunchPadsHandler = (req, resp) => {
  console.log('GET /launchpads');
  return resp(launchpads);
};

/*
* 4 filters match
http://localhost:8001/launchAndPad?keyword=Intelsat&launchpadId=ksc_lc_39a&minYear=2006&maxYear=2017

* keyword not match, 3 match
http://localhost:8001/launchAndPad?keyword=Intelsat4&launchpadId=ksc_lc_39a&minYear=2006&maxYear=2017

* not keyword, 3 match
http://localhost:8001/launchAndPad?keyword=&launchpadId=ksc_lc_39a&minYear=2006&maxYear=2017
http://localhost:8001/launchAndPad?keyword=''&launchpadId=ksc_lc_39a&minYear=2006&maxYear=2017
http://localhost:8001/launchAndPad?launchpadId=ksc_lc_39a&minYear=2006&maxYear=2017

* year only
http://localhost:8001/launchAndPad?launchpadId=ksc_lc_39a&minYear=2017&maxYear=2018
http://localhost:8001/launchAndPad?launchpadId=ksc_lc_39a&minYear=2017
http://localhost:8001/launchAndPad?launchpadId=ksc_lc_39a&minYear=2018

* flight number
http://localhost:8001/launchAndPad?keyword=10
*/
const getLaunchAndPadHandler = (req, resp) => {
  console.log('GET /launchAndPad');

  // e.g. empty obj or req.query.keyword
  const data = mergeLaunchAndPad();

  // or condi: flight#, words in rocket_name, words in payload_id
  const keyword = req.query.keyword;
  const launchpadId = req.query.launchpadId;
  const minYear = req.query.minYear;
  const maxYear = req.query.maxYear;
  const out = searchLauchAndPad(data, keyword, launchpadId, minYear, maxYear);

  return resp(out);
};

const searchLauchAndPad = (data, keyword, launchpadId, minYear, maxYear) => {
  let out = [];
  for(let i=0; i<data.length; i++) {
    let item = data[i];

    // keyword
    if(isUndefined(keyword)) {
      // so no filter
    } else {
      if(
        isInFlightNumber(item.flight_number, keyword) || 
        item.rocket.rocket_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
        isInPayloadId(item.payloads, keyword)
      ) {
        console.log('keyword filter pass');

      } else {
        continue;
      }
    }
    
    // launchpadId
    if(isUndefined(launchpadId)) {
      
    } else {
      if(
        item.launch_site.site_id === launchpadId
      ) {
        console.log('site_id filter pass');

      } else {
        continue;
      }
    }

    // minYear
    if(isUndefined(minYear)) {
      
    } else {
      if(
        getFullYear(item.launch_date_local) >= minYear
      ) {
        console.log('min year filter pass');
      } else {
        continue;
      }
    }

    // maxYear
    if(isUndefined(maxYear)) {
      
    } else {
      if(
        getFullYear(item.launch_date_local) <= maxYear
      ) {
        console.log('max year filter pass');

      } else {
        continue;
      }
    }

    out.push(item);
  }

  return out;
}

const getFullYear = (time) => {
  const year = new Date(time).getFullYear();
  return year;
}

const isInFlightNumber = (flight_number, keyword) => {
  if(!isNaN(keyword)) {
    // It is number, flight_number is text
    return flight_number == keyword ? true : false;
  } else {
    return false;
  }
}

const isInPayloadId = (payloads, keyword) => {
  const arr = payloads.filter((p) => {
    let pId = p.payload_id.toLowerCase();
    // e.g. if keyword === 9, we will have lots of matches, 
    // because we doing partial match here
    return pId.indexOf(keyword.toLowerCase()) > -1 ? true: false;
  });

  return arr.length > 0 ? true : false; 
}

const isInRocketName = (rocket_name, keyword) => {
  return rocket_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ? true : false;
}

const isUndefined = (input) => {
  if(input === undefined || input === 'undefined' || input.trim() === '')
    return true;
  else
    return false
}

const mergeLaunchAndPad = () => {
  const lau = launches;
  const pad = launchpads;

  // test only
  //const lau = require('./resources/launchesTest.json');
  //const pad = require('./resources/launchpadsTest.json');

  let mergeArr = [];
  for(let i=0; i<lau.length; i++) {
    let rocketName = lau[i].rocket.rocket_name.toLowerCase();
    let siteId = lau[i].launch_site.site_id;

    for(let j=0; j<pad.length; j++) {
      let rocketName1 = pad[j].vehicles_launched;
      let siteId1 = pad[j].id;

      if(rocketName === rocketName1 && siteId === siteId1) {
        lau[i]['launchpad'] = pad[j];
        mergeArr.push(lau[i]);
        break;
      }
    }
  }

  return mergeArr;
}

const server = new Hapi.Server({
  connections: {
    routes: {
      cors: true,
    }
  }
});

server.connection({
  host: 'localhost',
  port: 8001,
});

server.route({
  method: 'GET',
  path: '/launches', 
  handler: getLaunchesHandler
});

server.route({
  method: 'GET',
  path: '/launchpads', 
  handler: getLaunchPadsHandler
});

server.route({
  method: 'GET',
  path: '/launchAndPad', 
  handler: getLaunchAndPadHandler
});

server.start((err) => {
  if (err) { throw err; }
  console.log(`Server running at: ${server.info.uri} 😎`)
});