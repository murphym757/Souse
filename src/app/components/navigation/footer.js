import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div class="container">
                <div class="d-md-none"> {/* For tables and phone Sceens */}
                    <div class="souseFooter float-left">
                        <h6><i class="far fa-copyright"></i> Footer</h6>
                    </div>
                </div>
                <div class="d-none d-md-block"> {/* For larger Sceens */}
                    <div class="souseFooter">
                        <h6><i class="far fa-copyright"></i> Souse</h6>
                    </div>
                </div>
            </div>
          );
      }
}