import React, { useState, useRef, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useJsApiLoader,
} from "@react-google-maps/api";
import { storeLocations } from "./storeLocations";

// Let the container fill the parent
const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = { lat: 18.5204, lng: 73.8567 };

const FullWidthMap = () => {
    const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'AIzaSyDah_mZu8rZGgEd_MziO6ESlFZHZ85usDQ';
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [hoveredId, setHoveredId] = useState(null);
    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    const handleMarkerMouseOver = (id) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setHoveredId(id);
    };

    const handleMarkerMouseOut = (id) => {
        closeTimeoutRef.current = setTimeout(() => {
            setHoveredId((curr) => (curr === id ? null : curr));
        }, 500);
    };

    const handleInfoWindowMouseOver = (id) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setHoveredId(id);
    };

    const handleInfoWindowMouseOut = (id) => {
        closeTimeoutRef.current = setTimeout(() => {
            setHoveredId((curr) => (curr === id ? null : curr));
        }, 500);
    };

    if (!isLoaded) return <div>Loading map…</div>;

    return (
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] border-8 border-white rounded-xl z-50 overflow-hidden">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >
                {storeLocations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={{ lat: loc.lat, lng: loc.lng }}
                        title={loc.name}
                        onMouseOver={() => handleMarkerMouseOver(loc.id)}
                        onMouseOut={() => handleMarkerMouseOut(loc.id)}
                    />
                ))}

                {hoveredId !== null && (() => {
                    const loc = storeLocations.find((l) => l.id === hoveredId);
                    return (
                        <InfoWindow
                            position={{ lat: loc.lat, lng: loc.lng }}
                            onCloseClick={() => setHoveredId(null)}
                            options={{
                                pixelOffset: new window.google.maps.Size(0, -5),
                                disableAutoPan: false,
                                maxWidth: 320
                            }}
                        >
                            <div
                                onMouseOver={() => handleInfoWindowMouseOver(loc.id)}
                                onMouseOut={() => handleInfoWindowMouseOut(loc.id)}
                                className="p-3 rounded-lg shadow-sm bg-white max-w-[280px]"
                            >
                                {/* Store name with icon */}
                                <div className="flex items-center mb-2">
                                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800">{loc.name}</h4>
                                </div>

                                {/* Address with subtle styling */}
                                <div className="flex mb-3 pl-1">
                                    <div className="border-l-2 border-gray-200 pl-3">
                                        <p className="text-gray-600 text-sm">{loc.address}</p>
                                    </div>
                                </div>

                                {/* Get directions button */}
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#285192] hover:bg-[#285192]/90 text-white text-center py-2 px-4 rounded-md transition duration-300 font-medium text-sm"
                                >
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        Get Directions
                                    </div>
                                </a>
                            </div>
                        </InfoWindow>
                    );
                })()}
            </GoogleMap>
        </div>
    );
};

export default FullWidthMap;
