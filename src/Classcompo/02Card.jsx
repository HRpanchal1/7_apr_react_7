import React from 'react';

import { Component } from 'react';
import Maincard from './03Maincard';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
class Card extends Component {
    render() {
        return (
            <>
                <MDBRow>
                    <MDBCol sm='6'>
                        <Maincard imgsrc="https://picsum.photos/id/237/200/300"/>
                    </MDBCol>
                    <MDBCol sm='6'>
                        <Maincard imgsrc="https://picsum.photos/id/238/200/300"/>
                    </MDBCol>
                </MDBRow>
            </>
        );
    }
}

export default Card;