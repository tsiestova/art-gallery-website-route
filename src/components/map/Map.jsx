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
        }).addTo(map);

        var iconOptions = {
            iconUrl: icon,
            iconSize: [66,88]
        }

        var customIcon = window.L.icon(iconOptions);
        var markerOptions = {
            icon: customIcon,
        }

        var marker = window.L.marker([41.48169209345018, -71.31036492647061], markerOptions).addTo(map);


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