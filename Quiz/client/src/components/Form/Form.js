import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js';
import { createPost } from '../../actions/posts.js'

const Form = () => {
    const[postData, setPostData] = useState({ name: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const [submitted, setSubmitted] = React.useState(0);

    const handleSubmit = (e, newsubmit) => {
        e.preventDefault();

        dispatch(createPost(postData));

        setSubmitted(1);
    }

   /*  const [submitted, setSubmitted] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
 */

    if (submitted === 0) {
        return(
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography cariant="h6">Enter your name to be placed on the leaderboard!</Typography>
                    <TextField name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({...postData, name: e.target.value })}/>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" width="small">Submit</Button>
                </form>
            </Paper>
        );
    }
    return(<Paper className={classes.paper}>You have been added to the leaderboard!</Paper>);
}

export default Form; 