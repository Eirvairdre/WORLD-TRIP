// src/components/WorldMap.js
import React, { useEffect, useRef } from 'react';
import mapSvg from '../assets/world-map.svg';
import './WorldMap.css';

const WorldMap = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        fetch(mapSvg)
            .then(response => response.text())
            .then(data => {
                if (svgRef.current) {
                    svgRef.current.innerHTML = data;
                }
            });

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'path') {
                const id = e.target.getAttribute('id');
                const paths = document.querySelectorAll(`path[id='${id}']`);
                paths.forEach(path => path.classList.add('highlight'));
            }
        };

        const handleMouseLeave = (e) => {
            if (e.target.tagName === 'path') {
                const id = e.target.getAttribute('id');
                const paths = document.querySelectorAll(`path[id='${id}']`);
                paths.forEach(path => path.classList.remove('highlight'));
            }
        };

        const handleClick = (e) => {
            console.log('CLICK!')
            if (e.target.tagName === 'path') {
                const countryId = e.target.getAttribute('id') || 'Unknown country';
                alert(`You clicked on ${countryId}`);
            }
        };

        const svgElement = svgRef.current;
        if (svgElement) {
            svgElement.addEventListener('mouseenter', handleMouseEnter, true);
            svgElement.addEventListener('mouseleave', handleMouseLeave, true);
            svgElement.addEventListener('click', handleClick, true);
        }

        return () => {
            if (svgElement) {
                svgElement.removeEventListener('mouseenter', handleMouseEnter, true);
                svgElement.removeEventListener('mouseleave', handleMouseLeave, true);
                svgElement.removeEventListener('click', handleClick, true);
            }
        };
    }, []);

    return (
        <div className="map-container">
            <div
                ref={svgRef}
                className="world-map"
            />
        </div>
    );
};

export default WorldMap;
