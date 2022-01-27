import React, { Component } from 'react';
import "./style.css";
import GetLocalPosts from './LocalPosts/GetLocalPosts';
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends Component {
    render() {
        return (
            <div>
            <section class="bg-light" id="subscribe" >
                <div class="container">
                    <div class="row" >
                        <div class="col-sm-12 col-md-12" >
                            <h3 class="text-center mt-4 text-secondary">Subscribe</h3>
                        </div>
                    </div>
                    <form><div class="row">
                        <div class="col" >
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col" >
                            <input type="text" class="form-control" placeholder="Zip Code" />
                        </div>
                        <div class="col" >
                            <button type="button" class="btn btn-primary" >Subscribe </button>
                        </div>
                    </div>
                    </form>
                    </div>

                    <div class="container-fliud">
                        <div class="row">
                            <div class="col">
                                <GetLocalPosts />
                            </div>
                            </div>
                    </div>


                </section>

                <section id="coaching">
                <div class="container" > <div class="col-sm-12 col-md-12" >
                    <h3 class="text-center mt-4 text-secondary"> COACHING STAFF</h3>
                </div>
                </div>
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col-2"> Title </th>
                            <th scope="col"> </th >
                            <th scope="col" > </th>
                            <th scope="col"> Name </th>
                        </tr>
                    </thead>
                        <tbody >
                            <tr >
                                <th scope="row" > Head Coach </th>
                                <td> </td >
                                <td > </td>
                            <td> Steve Nash </td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach</th>
                            <td> </td >
                            <td > </td>
                            <td>Jacque Vaughn</td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach</th>
                            <td> </td >
                            <td > </td>
                            <td> David Vanterpool</td>
                        </tr>

                        <tr >
                            <th scope="row" >Assistant Coach </th>
                            <td> </td >
                            <td > </td>
                            <td>Brian Keefe</td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach/Director of Player Development </th>
                            <td> </td >
                            <td > </td>
                            <td>Adam Harrington</td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach </th>
                            <td> </td >
                            <td > </td>
                            <td>Jordan Ott</td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach/Player Development</th>
                            <td> </td >
                            <td > </td>
                            <td>Tiago Splitter</td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach</th>
                            <td> </td >
                            <td > </td>
                            <td> Royal Ivey </td>
                        </tr>
                        <tr >
                            <th scope="row" >Assistant Coach </th>
                            <td> </td >
                            <td > </td>
                            <td>Ryan Forehan-Kelly</td>
                        </tr>
                        <tr >
                            <th scope="row" >Player Development Assistant</th>
                            <td> </td >
                            <td > </td>
                            <td>Amare Stoudemire</td>
                        </tr>


                    </tbody>
                    </table>
            </section>
            </div>

        );
    }
}
export default Content;
