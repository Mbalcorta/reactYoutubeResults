import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

  render() {
      return (
         <div className="search-bar">
            <input value={this.state.term} onChange={ event => this.onInputChange({ term: event.target.value }) }/>
            value of the input is: {this.state.term}
        </div>
      )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;
