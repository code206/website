import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class PublicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default withStyles(styles)(PublicContainer);
