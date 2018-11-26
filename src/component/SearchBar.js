import React from 'react';


class SearchBar extends React.Component{

  state={terms :''};

  onInputChange =(event)=>
  {
    this.setState({terms :event.target.value});
  }

onFormSubmit =(event) =>
{
  event.preventDefault();
  this.props.onFormSubmit(this.state.terms);
}

  render(){
    return(
      <div className="search-bar ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="filed">
          <label>Video Search </label>
          <input
          type="text"
           value={this.state.terms}
           onChange={this.onInputChange}/>
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;
