import React from "react";
import { Button, Grid } from "@mui/material";
import TabPostagem from '../../components/postagens/tabpostagens/TabPostagem';
import "./Home.css";


function Home() {
    return (
        <>

            <div className="container"   >
                <div className="home">
                    <div className="texto"  >
                        <h3 >Seja bem vindo(a)!</h3>
                        <h5>expresse aqui os seus pensamentos e opiniões!</h5>
                    </div>
                    <Button>
                        <span className="front text"> Ver Postagens
                        </span>
                    </Button>
                </div>
                <div className="img" >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />

                </div>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </div>

        </>


    )
}

export default Home;