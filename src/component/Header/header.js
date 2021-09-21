import React from "react";
import "../styleBar/styleForm.scss"
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
// import Logo from "../../images/fundooLogo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./header.scss"


class header extends React.Component  {
    render() {
        return (
                <AppBar  className= "navbar_bgColor">
                    <Toolbar>
                        <div style={{ color: "black" }}>
                            <FormatAlignJustifyIcon
                                onClick={this.props.menuOpen}
                            ></FormatAlignJustifyIcon>
                           
                        </div>
                        <div className="logo">
                             <h1> FundooNotes App</h1>
                        </div>
                    </Toolbar>
                </AppBar>
        );
        
    }
}


export default header;