import React from 'react';
import MusicCard from './MusicCard';
import { Grid } from '@material-ui/core';
import { chunk } from '../helpers';



class MusicPage extends React.Component {
    render(){
        const things=[
            {name:"Cool Song"},
            {name:"Cool Song.5"},
            {name:"Cool Song1"},
            {name:"Cool Song3"},
            {name:"Cool Song5"},
        ]
        const chunker = chunk ? chunk(things,2) : [things];
        console.log(chunk)
        return (
            <React.Fragment>
                {chunker.map( (groupedThings,index) =>
                    <Grid key={index} container spacing={2}>
                        {groupedThings.map(obj => {
                            return (
                                <Grid item xs key={obj.name}>
                                    <MusicCard songInfo={obj}></MusicCard>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </React.Fragment>
        )
    }
}

export default MusicPage;