import qs from "qs";
import { Client } from "@googlemaps/google-maps-services-js";
import Geocode from "react-geocode";
import { useState } from "react";

function Result() {
  const qData = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const startPoint = qData["start"];
  const arrivePoint = qData["arrive"];
  const apiKey = "AIzaSyBfLkxpSsGYrZ3JUvEs7SIWfuvuQDmSr6I";

  //   const client = new Client();
  //   client
  //     .directions({
  //       params: { origin: startPoint, destination: arrivePoint, key: apiKey },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${arrivePoint}&key=${apiKey}`;

  //   fetch(apiUrl).then((response) => {
  //     console.log(response.json());
  //   });

  //   const [gpsData, setGpsData] = useState({ lat: 0, lng: 0 });

  //   const client = new Client();
  //   client
  //     .geocode({
  //       params: {
  //         key: apiKey,
  //         address: "충청남도 아산시 둔포면",
  //       },
  //     })
  //     .then((gcResponse) => {
  //       //   const str = JSON.stringify(gcResponse.data.results[0]);
  //       //   console.log(`First result is: ${str}`);
  //       console.log(gcResponse.data.results[0]);
  //       debugger;
  //     });
  //   //   if (gpsData.lat === 0 && gpsData.lng === 0) {
  //   //     Geocode.setApiKey(apiKey);
  //   //     Geocode.fromAddress("충청남도 아산시 둔포면").then((gcResponse) => {
  //   //       console.log(gcResponse.results[0].geometry.location);
  //   //       setGpsData(gcResponse.results[0].geometry.location);
  //   //     });
  //   //   }

  return (
    <div>
      {startPoint}, {arrivePoint}
    </div>
  );
}

export default Result;
