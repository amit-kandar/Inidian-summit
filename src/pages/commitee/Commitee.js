import React from 'react';
import './Commitee.css';
import { committees } from '../../utils/data';
import { Link } from 'react-router-dom';

const Committee = () => {
    return (
        <div className="committe-container">
            <div className="background-overlay"></div>
            <h1 className="committe-heading">Committees & Agenda's</h1>
            <div className="grid-container1">
                {committees.map((committee) => (
                    <div className="grid-item" key={committee.name}>
                        <Link to={`/committee-agenda/${committee.link}`}>
                            <div className="overlay"></div>
                            <img src={committee.image} alt={committee.name} />
                            <p>{committee.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Committee;