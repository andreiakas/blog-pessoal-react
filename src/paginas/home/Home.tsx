import React from "react";
import {Button} from "@material-ui/core";
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
                        <span  className="front text"> Ver Postagens
                        </span>
                    </Button>
                </div>
                <div className="img" >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />

                </div>

            </div>
        </>


    )
}

export default Home;