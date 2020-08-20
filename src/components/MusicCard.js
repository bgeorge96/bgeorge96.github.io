import React from 'react';
import { Card, CardContent, Button, CardActions, Typography } from '@material-ui/core';


class MusicCard extends React.Component {
    render(){
        return(
            <Card variant='outlined'>
                <CardContent>
                    <Typography>{this.props.songInfo.name}</Typography>
                </CardContent>
                <CardActions>
                    <Button  size='small'>View on Spotify</Button>
                </CardActions>
            </Card>
        )
    }
}

export default MusicCard;