import React, { useEffect, useState } from "react";
import { NaverMap, Marker } from "react-naver-maps";
import './NaverApiMap.css';

function NaverApiMap() {
  const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용

  const [myPosi, setMyPosi] = useState({ lat: 37.3595704, lon: 127.105399 });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyPosi({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치 Error");
    }
  }, []);
  console.log(myPosi);
  return (
    <NaverMap
      className='map-style'
      id="maps-examples-marker"
      defaultCenter={
        typeof myPosi !== "string"
          ? new navermaps.LatLng(myPosi.lat, myPosi.lon)
          : new navermaps.LatLng(37.3595704, 127.105399)
      }
      defaultZoom={13}
    >
      <Marker
        position={
          typeof myPosi !== "stirng"
            ? new navermaps.LatLng(myPosi.lat, myPosi.lon)
            : new navermaps.LatLng(37.3595704, 127.105399)
        }
        animation={navermaps.Animation.BOUNCE}
        onClick={() => {
          alert("여기가 현재 위치 입니다.");
        }}
      />
    </NaverMap>
  );
}

export default NaverApiMap;
