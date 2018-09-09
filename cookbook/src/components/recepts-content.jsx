import React, { Component } from "react";
import { SearchBar }  from './search-bar.jsx'
import { ReceptItem }  from './recept-item.jsx'

export class ReceptsContent extends Component {
  render() {
    return (
        <div className="cb-recepts__content-wrapper fl fl-dir-col">
			<SearchBar />
			<div className="cb-recepts__wrapper">
				<ReceptItem />
				<ReceptItem />
				<ReceptItem />
			</div>
        </div>
        
    );
  }
}

