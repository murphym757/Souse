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
         // Styled Components
        const BasicFontStyling = styled.h2 ` /* Game Header */
            color: yellow;
        `;
        return (
            <div>
                <BasicFontStyling>
                    List of posts display here
                </BasicFontStyling>
                <div class="collapse" id="postCreateCollapse">
                    <div class="postCreateCollapse">
                        <PostCreate/>
                    </div>
                </div>
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large red">
                        <i class="fas fa-plus"></i>
                    </a>
                    <ul>
                        <li>
                            <a class="btn-floating red addPostButton">
                                <i class="fas fa-pen fa-xs" 
                                    data-toggle="collapse" 
                                    href="#postCreateCollapse" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="postCreateCollapse">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a class="btn-floating yellow darken-1">
                                <i class="fas fa-search fa-xs"
                                    data-toggle="collapse" 
                                    href="#collapseExample" 
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="collapseExample">
                                </i>
                            </a>
                        </li>
                    </ul>
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