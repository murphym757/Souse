import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { SouseButton } from '../../assets/styles/mainStyling';
import SouseFooter from '../navigation/souseFooter';
import PostEdit from './commentDeleteSection';
import CommentsSection from './commentsSection';
import { 
    SousePostMain,
    CloseIcon,
    EditIcon,
    PostPageIcon,
    PostPageImage,
    KeyboardBackspaceIcon,
    CommentsLinkFont,
    PostCreatorName,
    PostLocation,
    CaptionPreScrollable,
    CaptionPreScrollableLoggedIn,
    SouseDiv
} from '../../assets/styles/postsStyling';

class PostsGrid extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const sousePostCreatorId = this.props.obj.postCreator;
        const sousePostCaption = this.props.obj.sousePosts.postCaption;
        const sousePostLocation = this.props.obj.sousePosts.postLocation;
        const sousePostImage = this.props.obj.sousePosts.postImageURL;
        const sousePostUnixTimestamp = this.props.obj.sousePosts.postUnixTimestamp;
        const sousePostCreatorName = this.props.postCreatorName;
        const sousePostCreatorImage = this.props.postCreatorImage; 
        this.state = {
            sousePostCreatorId: loggedinUser,
            sousePostCreatorName: sousePostCreatorName,
            sousePostCreatorImage: sousePostCreatorImage,
            sousePostCreatorId: sousePostCreatorId,
            sousePostCaption: sousePostCaption,
            sousePostLocation: sousePostLocation,
            sousePostImage: sousePostImage,
            sousePostUnixTimestamp: sousePostUnixTimestamp,     
            commentSectionSelected: false,
            currentYear: new Date().getFullYear()
        };
        this.displayComments = this.displayComments.bind(this);
        this.closeComments = this.closeComments.bind(this);
        this.delete = this.delete.bind(this);
    }

    commentsFinder() {
        const souseCommentData = this.props.souseCommentData;
        const souseCommentList = ["" + this.props.obj._id + ""],
            souseCommentsList = new Set(souseCommentList),
            souseFilterData = souseCommentData.filter(souseCommentsData => souseCommentsList.has(souseCommentsData.originalPostId));
        return souseFilterData;
    }

    displayComments = (e) => {
        this.setState({
            commentSectionSelected: true
        });
    }
    
    closeComments = (e) => {
        this.setState({
            commentSectionSelected: false
        });
    }

    delete() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/" + userName);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const sousePostData = this.props.obj;
        const souseUserData = this.props.souseUserData;
        const souseCommentData = this.props.souseCommentData;
        const sousePostCreatorId = this.state.sousePostCreatorId;
        const sousePostImage = this.state.sousePostImage;
        const sousePostCaption = this.state.sousePostCaption;
        const sousePostLocation = this.state.sousePostLocation;
        const sousePostUnixTimestamp = this.state.sousePostUnixTimestamp;
        const sousePostCreatorName = this.state.sousePostCreatorName;
        const sousePostCreatorImage = this.state.sousePostCreatorImage;
        const commentSectionSelected = this.state.commentSectionSelected;
        const commentsTotal = "" + this.commentsFinder().length + "";  
        return (
            <SousePostMain>
                <div class="mx-auto d-block">
                    <div class="d-none d-xl-block pt-5 container"> {/* For larger Sceens */}
                        <div class="row pt-5 d-flex justify-content-center">
                            <div class="col-6 d-flex justify-content-center my-auto">
                                <PostPageImage className="souseUserPostsPage" 
                                    src={sousePostImage}
                                    alt="sousePostImage"
                                    width="1080px" 
                                    height="1080px"/>
                            </div>
                            <div class="col-6">
                                <div class="container">
                                {commentSectionSelected  
                                    ?   <div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div>
                                                        <div class="container">
                                                            <h6 class="d-flex justify-content-end" onClick={this.closeComments}><KeyboardBackspaceIcon /></h6>
                                                        </div>
                                                    </div>
                                                    <CommentsSection 
                                                        originalPostData={sousePostData}
                                                        souseUserData={souseUserData} 
                                                        souseCommentorImage={sousePostCreatorImage}
                                                        souseCommentData={souseCommentData}/> {/* Comments */}
                                                </div>
                                            </div>
                                        </div>
                                    :   <div>
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col-2 p-0 m-0">
                                                        <Link to={`/${sousePostCreatorName}`}>
                                                            <PostPageIcon className="souseUserIconComments" 
                                                                src={sousePostCreatorImage} 
                                                                alt="souseUserIconComments"
                                                                width="25px" 
                                                                height="25px"/>
                                                        </Link>
                                                    </div>
                                                    <div class="pl-2 col-8 p-0 my-auto">
                                                        <Link to={`/${sousePostCreatorName}`}>
                                                            <PostCreatorName className="sousePostCreatorName d-flex align-items-top  p-0 m-0"> {sousePostCreatorName}</PostCreatorName>
                                                        </Link>
                                                            <PostLocation className="sousePostLocation d-flex align-items-bottom  p-0 m-0"> {sousePostLocation}</PostLocation>
                                                        </div>
                                                    {isAuthenticated && sousePostCreatorId === loggedinUser
                                                            ?  <div class="col-1 my-auto"> {/*User Icon and Edit Button */}                                                  
                                                                    <div>
                                                                        <div class="form-group">
                                                                            <Link to={
                                                                                {
                                                                                    pathname: "/p/edit/" + this.props.obj._id,
                                                                                    state: {
                                                                                        postTimestamp: sousePostUnixTimestamp
                                                                                    }
                                                                                }
                                                                            }>
                                                                                <h6><EditIcon/></h6>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        :   <div></div>
                                                    }
                                                </div>
                                            </div>
                                            <div class="row">
                                                <CaptionPreScrollable className="col-12">
                                                    <div class="col-12">
                                                        <h6 class="sousePostCaption">{sousePostCaption}</h6>
                                                    </div>
                                                </CaptionPreScrollable>
                                                <div class="col-12 no-gutters sousePostUserCommentsLink">
                                                    {commentsTotal == 0
                                                        ?   <CommentsLinkFont className="pt-3 pb-3 m-0" onClick={this.displayComments}>This post has {commentsTotal} comments</CommentsLinkFont>
                                                        :   <CommentsLinkFont className="pt-3 pb-3 m-0" onClick={this.displayComments}>View all {commentsTotal} comments</CommentsLinkFont>
                                                        
                                                    }              
                                                </div>
                                            </div>
                                        </div>
                            }
                                </div>
                                <SouseFooter />
                            </div>
                        </div>
                    </div>
                    <div class="d-xl-none container-fluid"> {/* For smaller Sceens */}
                        <div class="row d-flex justify-content-center pt-5">
                            <SouseDiv className="d-flex justify-content-center my-auto p-0">
                                <div className="m-0 p-0 sousePortrait souseLandscape postDiv">
                                    <PostPageImage className="souseUserPostsPage" 
                                        src={sousePostImage}
                                        alt="sousePostImage"
                                        width="1080px" 
                                        height="1080px"/>
                                </div>
                            </SouseDiv>
                            <SouseDiv>
                                <div className="sousePortrait souseLandscape postDiv">
                                    <div class="container">
                                    {commentSectionSelected  
                                        ?   <div>
                                                <div class="row">
                                                    <div class="col-12 p-0 m-0">
                                                        <div>
                                                            <div class="container">
                                                                <h6 class="d-flex justify-content-end" onClick={this.closeComments}><KeyboardBackspaceIcon /></h6>
                                                            </div>
                                                        </div>
                                                        <CommentsSection 
                                                            originalPostData={sousePostData}
                                                            souseUserData={souseUserData} 
                                                            souseCommentorImage={sousePostCreatorImage}
                                                            souseCommentData={souseCommentData}/> {/* Comments */}
                                                    </div>
                                                </div>
                                            </div>
                                        :   <div>
                                                <div class="container-fluid">
                                                    <div class="row pt-3">
                                                        <div class="col-2 p-0 m-0 d-flex justify-content-center">
                                                            <Link to={`/${sousePostCreatorName}`}>
                                                                <PostPageIcon className="souseUserIconComments" 
                                                                    src={sousePostCreatorImage} 
                                                                    alt="souseUserIconComments"
                                                                    width="25px" 
                                                                    height="25px"/>
                                                            </Link>
                                                        </div>
                                                        <div class="pl-2 col-8 p-0 my-auto">
                                                            <Link to={`/${sousePostCreatorName}`}>
                                                                <PostCreatorName className="sousePostCreatorName p-0 m-0"> {sousePostCreatorName}</PostCreatorName>
                                                            </Link>
                                                            <PostLocation className="sousePostLocation p-0 m-0"> {sousePostLocation}</PostLocation>
                                                        </div>
                                                        {isAuthenticated && sousePostCreatorId === loggedinUser
                                                                ?  <div class="col-1 my-auto"> {/*User Icon and Edit Button */}                                                  
                                                                        <div>
                                                                            <div class="form-group">
                                                                                <Link to={
                                                                                    {
                                                                                        pathname: "/p/edit/" + this.props.obj._id,
                                                                                        state: {
                                                                                            postTimestamp: sousePostUnixTimestamp
                                                                                        }
                                                                                    }
                                                                                }>
                                                                                    <h6><EditIcon/></h6>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            :   <div></div>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="row">
                                                {isAuthenticated && sousePostCreatorId === loggedinUser
                                                    ?   <CaptionPreScrollableLoggedIn>
                                                            <div class="col-12">
                                                                <h6 class="sousePostCaption">{sousePostCaption}</h6>
                                                            </div>
                                                        </CaptionPreScrollableLoggedIn>
                                                    :   <CaptionPreScrollable>
                                                            <div class="col-12">
                                                                <h6 class="sousePostCaption">{sousePostCaption}</h6>
                                                            </div>
                                                        </CaptionPreScrollable>               
                                                }
                                                    <div class="col-12 no-gutters sousePostUserCommentsLink">
                                                        {commentsTotal == 0
                                                            ?   <CommentsLinkFont className="pt-3 pb-3 m-0">This post has {commentsTotal} comments</CommentsLinkFont>
                                                            :   <CommentsLinkFont className="pt-3 pb-3 m-0" onClick={this.displayComments}>View all {commentsTotal} comments</CommentsLinkFont>
                                                            
                                                        }              
                                                    </div>
                                                </div>
                                            </div>
                                }
                                    </div>
                                    <SouseFooter />
                                </div>
                            </SouseDiv>
                        </div>
                    </div>
                </div>
            </SousePostMain>
          );
      }
}
PostsGrid.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter (PostsGrid))