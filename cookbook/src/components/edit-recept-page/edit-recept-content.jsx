import React, { Component } from "react";
import { ReceptsWrapper }  from '../common/recepts-wrapper.jsx'
import { ReceptCard }  from './recept-card.jsx'

export class EditReceptContent extends Component {
  render() {
    return (
        <ReceptsWrapper>
        	<ReceptCard />
        </ReceptsWrapper>
        
    );
  }
}
