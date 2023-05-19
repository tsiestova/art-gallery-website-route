import React, {useEffect, useRef} from 'react';
import mapStyles from "./map.module.scss"
import icon from "./icon-location.svg"

const Map = () => {
    const ref = useRef();

    useEffect(() => {
        var map = window.L.map(ref.current);
        map.backgroundColor = '#ff0000';

        console.log('map', map);

        map.setView([41.48169209345018, -71.31036492647061], 15);

        window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 1,
            'center': [0, 0],
            attribution: 'red',
            style: myStyle
        }).addTo(map);


        var myStyle = {
            "color": "orange",
            "opacity": 0.65
        };



        // var marker = window.L.marker([41.48169209345018, -71.31036492647061], {
        //     draggable: true,
        //     title: "MODERN ART GALLERY"
        // }).addTo(map).bindPopup("Hello");

        var iconOptions = {
            iconUrl: icon,
            iconSize: [66,88]
        }

        var customIcon = window.L.icon(iconOptions);
        var markerOptions = {
            icon: customIcon,
        }

        var marker = window.L.marker([41.48169209345018, -71.31036492647061], markerOptions).addTo(map);



        // var circle = window.L.circle([41.48169209345018, -71.31036492647061], {
        //     color: 'orange',
        //     // fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 50
        // }).addTo(map);

        return () => {
            console.log(map);
        }

    }, [ref])

    return (
        <div className={mapStyles.map__wrap}  ref={ref}>
        </div>
    );
};

export default Map;