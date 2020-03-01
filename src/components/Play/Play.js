import React, { Component } from 'react';
import axios from 'axios';
import ArrowBack from '../ArrowBack/ArrowBack';
import UserProfile from '../UserProfile/UserProfile'
import './Play.css'

class Play extends Component {

    state = {
        isLoaded: false, // I will use it to control if the API info is loaded or not
        people: [] // array of people, here I'll store the API data
    }

    async componentDidMount() { // I use async to let the code know that I'll be doing some asynchronous job inside, meaning that it will need to wait a bit for something

        // on the next line I use the axios package to make the api call to github, axios will go there and will come back with the data on a json format, since this might take a while, I need to tell javascript to wait until this call is done.
        // axios will give me back an object with a lot of information, the users I want are inside of the data key, so I can destructurate the data variable so later I won't need to do data.data
        const { data } = await axios('https://api.github.com/users/marcllopis/following')

        // at this point I have all the users I am following in this data variable, but I would like to know the personal information of those users, like their name, location, repos, gists... to access all that information I need to do another api call to each user url.
        // Thanks to my last api call, I have all the login name from all users and I know the endpoint where I could get that information, so I need to do 1 api call for each user I have to get that user information and store all of them in an array of users
        let users = []
        data.map(async person => { // since I'll be using an API call again, this needs async
            let { data } = await axios(`https://api.github.com/users/${person.login}`)
            users.push(data)
            // With the previous code, I managed to do an api call for each user and get his personal information back, I also pushed to a users array that information.
            this.setState({
                isLoaded: true, // at this moment the data is here so I changed to true for later use
                people: users // I store in the state that array of users I just filled so I can use it in my app
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoaded // I want to show a loading text if the API info is still not loaded and show the API info only when it's already loaded
                // so if isLoaded is true, it means the api is already loaded so I show the info
                // if it is not loaded, I show a Loading... text
                    ? <div>
                        <h1 className="play-header">Choose your player</h1>
                        <div className="play-container">
                            {/* I map over every person I have on my state and display that info in a UserProfile component */}
                            {this.state.people.map(person => <UserProfile personDetails={person} />)}
                            {/* I pass the current person as props to UserProfile with the name of personDetails */}
                        </div>
                        <ArrowBack back={this.props.back} />
                    </div>
                    : <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default Play;