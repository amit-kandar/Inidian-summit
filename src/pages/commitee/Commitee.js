import React from 'react';
import './Commitee.css';
import { GALEGAL1IMAGE, GALEGAL2IMAGE, LOKSABHAIMAGE, MAHABHARATIMAGE, NCWIMAGE, PARALLELUNIVERSEIMAGE, UNHRCIMAGE, UNSCIMAGE } from '../../utils/constant';

const Committee = () => {
    return (
        <div className="committe-container" style={{ paddingTop: "8rem" }}>
            {/* Heading */}
            <h1 className="committe-heading">Committees & Agenda's</h1>

            {/* Image Containers */}
            <div className="grid-container1">
                <div className="grid-item">
                    <a href="../Pages/loksabha.html">
                        <div className="overlay"></div>
                        <img src={LOKSABHAIMAGE} alt="Lok Sabha" />
                        <p>Lok Sabha</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/parallelUniv.html">
                        <div className="overlay"></div>
                        <img src={PARALLELUNIVERSEIMAGE} alt="Parallel Universe" />
                        <p>Parallel Universe</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/gaLeagal.html">
                        <div className="overlay"></div>
                        <img src={GALEGAL1IMAGE} alt="GA Legal" />
                        <p>General Assembly Legal</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/unsc.html">
                        <div className="overlay"></div>
                        <img src={UNSCIMAGE} alt="United Nations Security Council" />
                        <p>United Nations Security Council</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/unhrc.html">
                        <div className="overlay"></div>
                        <img src={UNHRCIMAGE} alt="UNHRC" />
                        <p>United Nations Human Rights Council</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/ncw.html">
                        <div className="overlay"></div>
                        <img src={NCWIMAGE} alt="NCW" />
                        <p>National Commission for Women / Continues Crisis Committee</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/mahabharat.html">
                        <div className="overlay"></div>
                        <img src={MAHABHARATIMAGE} alt="Mahabharat/HCC" />
                        <p>Mahabharat / Historical Crisis Committee</p>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="../Pages/internationalPress.html">
                        <div className="overlay"></div>
                        <img src={GALEGAL2IMAGE} alt="International Press" />
                        <p>International Press</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Committee;