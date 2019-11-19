  import React, { Component } from 'react';

export default class SouseFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        return (
            <h6 class="souseFooter p-0 m-0"><i class="far fa-copyright"></i>{this.state.currentYear} Souse</h6>
          );
      }
}