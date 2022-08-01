import React from 'react';
import "../navbar/Navbar.css";
import { Toolbar, AppBar} from "@mui/material";
import {Link} from 'react-router-dom';

function Navbar() {


    return (
        <>
            <AppBar position="static">
                <Toolbar className='header' variant="dense">
                    <div className="containerBlog">
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               Blog Pessoal
                            </h2>
                            
                        </div>

                    </div>

                    <div className="containerNav">

                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               home 
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                postagens
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                temas
                            </h2>
                        </div>
                        <div className="Box" style={{ cursor: "pointer" }}>
                            <h2>
                                cadastrar tema
                            </h2>
                        </div>
                        <Link to='/login' className='text-decorator-none'>                   
                        <div className="Box"  style={{ cursor: "pointer", color:'white' }}>
                            <h2 >
                                logout
                            </h2>
                        </div>
                        </Link>

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;