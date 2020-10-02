import React from 'react';
import { data } from '../../data';
import './ProfileTable.css';

var Sally = data.profile;
function ProfileTable() {
    return (
        // used css grid instead, had troubles getting image alignment with htmnl table
        <div>
            <h1>Profile</h1>
            <div className="grid-container">
                <div className="grid-item pic">
                    <img className="profilepic" alt="avatar" src={Sally.avatarImage}></img>
                </div>
                <div className="grid-item fname">
                    <span className="bolded">first name</span>
                </div>
                <div className="grid-item fname_val">
                    <span>{Sally.firstName}</span>
                </div>
                <div className="grid-item lname">
                    <span className="bolded">last name</span>
                </div>
                <div className="grid-item lname_val">
                    <span>{Sally.lastName}</span>
                </div>
                <div className="grid-item phone">
                    <span className="bolded">phone</span>
                </div>
                <div className="grid-item phone_val">
                    <span>{Sally.phone}</span>
                </div>
                <div className="grid-item email">
                    <span className="bolded">email</span>
                </div>
                <div className="grid-item email_val">
                    <span>{Sally.email}</span>
                </div>
                <div className="grid-item bio">
                    <span className="bolded">bio</span>
                </div>
                <div className="grid-item bio_val">
                    <span>{Sally.bio}</span>
                </div>
            </div>
        </div>
    );
}



export default ProfileTable;
