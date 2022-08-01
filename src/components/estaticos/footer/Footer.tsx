import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@mui/material';
import './Footer.css';

function Footer(){
    return(

        <>
       <div className="bg-footer">
        <Grid  className="containerFooter" container direction="row" >
                <Grid alignItems="center" item xs={12}>
                    <div className="boxFooter" >
                        <Box className="rede" paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <div className='containerImg'>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className="containerImg"/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon  className="containerImg"/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className="containerImg"/>
                            </a>
                        </div>
                    </div>
                    <Box>
                        <Box>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }}> © 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a href="https://brasil.generation.org" target="_blank">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} align="center"> brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Footer;