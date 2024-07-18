import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import './WorldMap.css';
import { colorUpdate, getComment, getMap, updateCountryComment } from "../api/countryUpdate";

Modal.setAppElement('#root');

const WorldMap = () => {
    const svgRef = useRef(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState({});
    const [selectedColor, setSelectedColor] = useState('#ff0000');
    const [colors, setColors] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState('');

    const token = localStorage.getItem('@world-trip:token');

    useEffect(() => {
        const loadSvg = async () => {
            try {
                const response = await getMap(token);
                const data = response;
                if (svgRef.current) {
                    svgRef.current.innerHTML = data;

                    for (const [countryId, color] of Object.entries(colors)) {
                        const paths = svgRef.current.querySelectorAll(`path[id='${countryId}']`);
                        paths.forEach(path => path.setAttribute('fill', color));
                    }
                }
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        loadSvg();

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

        const handleClick = async (e) => {
            if (e.target.tagName === 'path') {
                const countryId = e.target.getAttribute('id') || 'Unknown country';
                setSelectedCountry(countryId);
                setComment(comments[countryId] || '');
                setSelectedColor(colors[countryId] || '#ff0000');
                setModalIsOpen(true);
                setId(e.target.getAttribute('id'));

                try {
                    const fetchedComment = await getComment(token, countryId);
                    setComment(fetchedComment || '');
                } catch (error) {
                    console.error('Error fetching comment:', error);
                }
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
    }, [colors, comments, token]);

    const formatCountryName = (countryId) => {
        return countryId.replace(/_\d+$/, '').replace(/_/g, ' ');
    };

    const handleCommentSubmit = () => {
        setComments({
            ...comments,
            [selectedCountry]: comment
        });
        setColors({
            ...colors,
            [selectedCountry]: selectedColor
        });
        setComment('');
        console.log(comments);
        console.log(comment);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        const paths = document.querySelectorAll(`path[id='${selectedCountry}']`);
        paths.forEach(path => path.setAttribute('fill', color));
    };

    const handleCountrySubmit = async () => {
        console.log(token);
        console.log(id);
        console.log(selectedColor);
        handleCommentSubmit();
        closeModal();

        try {
            const result = await colorUpdate(token.toString(), id.toString(), selectedColor.toString());
            console.log(result);
        } catch (error) {
            console.error('Error updating country color:', error);
        }

        try {
            const r = await updateCountryComment(token, id, comment);
            console.log(r);
        } catch (error) {
            console.error('Error updating country comment:', error);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="map-container">
            <div
                ref={svgRef}
                className="world-map"
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Country Color Picker"
                className="Modal"
                overlayClassName="Overlay"
            >
                <h3>Selected Country: {selectedCountry ? formatCountryName(selectedCountry) : ''}</h3>
                <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add or edit a comment"
                />
                <button onClick={handleCountrySubmit}>Submit Comment</button>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default WorldMap;
