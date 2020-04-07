import React from 'react';
import './UserProfile.css'


const UserProfile = ({ personDetails }) => (
    //this component is just rendering some styles for each user I have on the state of Play.js
    <div className="github-card">
        <h3 className="github-card-name">{personDetails.login}</h3>
        <img className="github-card-img" src={personDetails.avatar_url} alt={personDetails.login} />
        <div className="flex-it">
            <div>
                <p>Number of repos: {personDetails.public_repos}</p>
                <p>Number of followers: {personDetails.followers}</p>
            </div>
            <div className="button-container">
                <button className="button-choose">Choose!</button>
            </div>
        </div>
    </div>
)

export default UserProfile;