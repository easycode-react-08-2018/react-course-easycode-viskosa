import React, { Component } from "react";
import { ReceptsWrapper }  from '../common/recepts-wrapper.jsx'
import { SearchBar }  from './search-bar.jsx'
import { ReceptItem }  from './recept-item.jsx'

export class ReceptsContent extends Component {
  render() {
    return (
        <ReceptsWrapper>
			<SearchBar />
			<div className="cb-recepts__items-wrapper">
				<ReceptItem />
				<ReceptItem />
				<ReceptItem />
			</div>
        </ReceptsWrapper>
        
    );
  }
}

