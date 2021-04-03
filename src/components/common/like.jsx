import React, { Component } from 'react';

class Like extends Component {

    render() {
        let classes="fa fa-heart";
        classes+=(this.props.liked===true)?"":"-o";
        return (
            <React.Fragment>
                <i style={{cursor:"pointer"}} onClick={this.props.onClick} className={classes}></i>
            </React.Fragment>
        );
    }
}

export default Like;