// MapContainer.js

import React, { useEffect } from 'react';
import Element from '../components/Element';
import store from '../store';
import './MapContainer.css';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
    useEffect(() => {
      
      
      const tmpStyle={
        width:"10px",
        height:"10px",
        border:"1px solid black",
        margin:"1px",   
    }

      const infowindow = new kakao.maps.InfoWindow({zIndex:1});
      const container = document.getElementById("myMap");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
  
      const ps = new kakao.maps.services.Places();
  
      ps.keywordSearch(searchPlace, placesSearchCB);
  
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
  
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
  
          map.setBounds(bounds);
        }
      }
      
      function StayClick(e){
        e.preventDefault();
        alert('ss');
      }
      
      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            var position = new kakao.maps.LatLng(place.y, place.x)
            var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
                        place.place_name +                                    
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">  </div>' + 
            '            <div class="desc">' + 
            '                <div><a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + place.place_name + '" target="_blank" class="link">네이버 검색</a>'+
                            
            '            </div>' +                         
            '        </div>' + 
            '    </div>' +    
            '</div>';
            var customOverlay = new kakao.maps.CustomOverlay({
              position: position,
              content: content   
            });

            var overlay = new kakao.maps.CustomOverlay({
              position: position,
              content: contentt 
            });
            var contentt = document.createElement('div');
            contentt.innerHtml = "place.place_name";
            contentt.style.cssText = 'background: white; border: 1px solid black';

            var StayBtn = document.createElement('button');
            StayBtn.innerHTML = '+Stay';
            StayBtn.style.cssText = 'position: absolute;left: -50px;bottom: 70px;';
            StayBtn.onclick = function () {
              store.dispatch({type:'INCREMENT',id:1,name:place.place_name});
            }.bind(this);

            var FoodBtn = document.createElement('button');
            FoodBtn.innerHTML = '+Food';
            FoodBtn.style.cssText = 'position: absolute;left: +3px;bottom: 70px;';
            FoodBtn.onclick = function () {
              store.dispatch({type:'INCREMENT',id:2,name:place.place_name});
            }.bind(this);

            var PlayBtn = document.createElement('button');
            PlayBtn.innerHTML = '+Play';
            PlayBtn.style.cssText = 'position: absolute;left: +60px;bottom: 70px;';
            PlayBtn.onclick = function () {
              store.dispatch({type:'INCREMENT',id:3,name:place.place_name});
            }.bind(this);

            var CloseBtn = document.createElement('button');
            CloseBtn.innerHTML = 'X';
            CloseBtn.style.cssText = 'position: absolute;left: +110px;bottom: 145px;';
            CloseBtn.onclick = function () {
              customOverlay.setMap(null);
              overlay.setMap(null);
            }.bind(this);
            
            contentt.appendChild(StayBtn);
            contentt.appendChild(FoodBtn);
            contentt.appendChild(PlayBtn);
            contentt.appendChild(CloseBtn);
            overlay.setContent(contentt);
            

          // 커스텀 오버레이를 지도에 표시합니다
          customOverlay.setMap(map);
          overlay.setMap(map);  
            
        }.bind(this));  
      }
    }, [searchPlace]);

    return (
        <div id='myMap' style={{
            position: "absolute",
            width: '50%', 
            margin : '20px',
            bottom : '20px',
            height: '85vh',
            zIndex:'1'
        }}></div>
    );
}

export default MapContainer;