import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import CareerInfo  from '../careerInfo/CareerInfo';
import './resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <Sidebar />
            <CareerInfo />
        </div>
    )
}
