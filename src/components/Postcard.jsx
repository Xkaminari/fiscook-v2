import React, { Component } from "react";
import postPic from "../images/mehdi.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Postcard.css";
//import toast, { Toaster } from 'react-hot-toast';



export default class Postcard extends Component {
    constructor(props){
        super(props);
        this.state={
            like: 0,
        }
    }
    
    
    like(){
        this.setState({
            
            like: this.state.like + 1
        })
        

    }


    render() {
        
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <img src={postPic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                
                                <h5 className="card-title">Mehdi Lahak</h5>
                                <p className="card-text description">
                                    The 82th Anniversary of my second mother "Wydad"!
                                </p>
                                
                                <button className="btn btn-primary w-25" onClick={this.like.bind(this)} >Like {this.state.like}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }
}
