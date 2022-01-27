import React, { Component } from 'react';


import posts from './posts.js';

class GetLocalPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts
        };
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="container-fluid" >
                <div className="row" >
                    {posts.map((post) => {
                        return (

                                <div className="col-4">
                                    <div className="container" >
                                        <div className="row" >
                                            <div className="col-fluid">
                                                <div className="card">
                                                        <div className="card-body">
                                                        <h5 className="card-title">{post.fn} {post.ln} </h5>
                                                        <br />
                                                        <h5 className="card-title">Average</h5>
                                                    <p className="card-text">games played: {post.avg.gp}</p>
                                                    <p className="card-text">Points: {post.avg.pts}</p>
                                                    <p className="card-text">Steals: {post.avg.stl}</p>
                                                    <p className="card-text">Blocks: {post.avg.blk}</p>
                                                    <h5 className="card-title">Total</h5>
                                                    <p className="card-text">games played: {post.tot.gp}</p>
                                                    <p className="card-text">Points: {post.tot.pts}</p>
                                                    <p className="card-text">Steals: {post.tot.stl}</p>
                                                    <p className="card-text">Blocks: {post.tot.blk}</p>
                                                    </div>
                                                </div>
                                         </div>
                                    </div>
                                 </div>
                               </div>
                );
            })
        } </div> </div>
        );
    }
}

export default GetLocalPosts;