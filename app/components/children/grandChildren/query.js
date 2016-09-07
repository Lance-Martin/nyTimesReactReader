var React = require('react');

var Query = React.createClass({
  getInitialState: function(){
		return {
			term: "",
      startDate:"",
      endDate: "",
		}
	},
  handleChange: function(e){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	var newState = {};
    	newState[e.target.name] = e.target.value;
    	this.setState(newState);

	},

	// When a user submits...
	handleClick: function(){
		// Set the parent to have the search term
		this.props.getArticles(this.state.term, this.state.startDate, this.state.endDate);
    this.setState({
      term: "",
      startDate: "",
      endDate: ""
    })
	},
  render: function(){
    var btnStyle = {
      marginTop: '5px'
    }
    return (
      <div className = "form-group" >
          <h3>Article title:</h3>
          <input type="text" className="form-control" name = "term" value={this.state.term} onChange= {this.handleChange} />
          <h3>Start date:</h3>
          <input type = "text" name = "startDate" value = {this.state.startDate} className = "form-control" onChange = {this.handleChange}/>
          <h3>End date:</h3>
          <input type = "text" value = {this.state.endDate} name = "endDate" className = "form-control" onChange = {this.handleChange} />
          <button type = "button" onClick = {this.handleClick} className = "btn btn-danger" style = {btnStyle}>Submit</button>
      </div>
    );
  }
});

module.exports = Query;
