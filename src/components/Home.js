import React from 'react';
import { Typography } from '@material-ui/core';


class Home extends React.Component {
    render(){
        return(
            <div>
                <Typography>This is my app home!</Typography>
                &nbsp;&nbsp;
                
                <Typography>I am seeking to expand and learn more about the world of <b>application development</b>.</Typography>
                <iframe src="https://giphy.com/embed/8dYmJ6Buo3lYY" width="480" height="352" frameBorder="0" allowFullScreen title='Baby Reading'></iframe>

                &nbsp;&nbsp;
                <Typography>
                    While this should be a fun time it is serious. I want to include and learn about things like:
                </Typography>
                <ul>
                    <li><Typography>State</Typography></li>
                    <li><Typography>Forms</Typography></li>
                    <li><Typography>NoSQL</Typography></li>
                </ul>
            </div>
        )
    }
}

export default Home;