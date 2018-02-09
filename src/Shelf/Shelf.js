import React, {Component} from 'react';
import './Shelf.css';

class Shelf extends Component {
    constructor() {
        super();
   
    }


    render() {
        return(
            <div className="shelves">
                <div className="shelf">
                    <span className="shelf-type"> Shelf A </span>
                </div>
                <div className="shelf">
                    <span className="shelf-type"> Shelf B </span>
                </div>
                <div className="shelf">
                    <span className="shelf-type"> Shelf C </span>
                </div>
                <div className="shelf">
                    <span className="shelf-type"> Shelf D </span>
                </div>
            </div>
        )
    }
}

export default Shelf;