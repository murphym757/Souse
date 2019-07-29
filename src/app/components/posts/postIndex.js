import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostCreate from './postForm';
import M from 'materialize-css';
import styled from 'styled-components';
class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        M.AutoInit();
    }
    render() {
        return (
            <div>
                <div class="collapse" id="postCreateCollapse">
                    <div class="postCreateCollapse">
                        <PostCreate/>
                    </div>
                </div>
                <div class="fixed-action-btn"> {/* Create Post Button */}
                    <a class="btn-floating btn-large red addPostButton">
                        <i class="fas fa-plus fa-xs"
                            data-toggle="collapse" 
                            href="#postCreateCollapse" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="postCreateCollapse"></i>
                    </a>
                </div>
            </div>
          );
      }
}
PostIndex.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostIndex)