var React = require('react');

var Saved = require('./children/saved.js');
var Search = require('./children/search.js');
var Helpers = require('./utils/helpers.js');

var Main = React.createClass({
  getInitialState: function() {
    return {
      savedArticles: []
    }
  },
  componentWillMount: function () {
    var that = this;
    Helpers.getSaved().then(function(docs){
      console.log("my docs",docs)
      that.setState({
        savedArticles: docs.data
      })
    });
  },
  componentDidUpdate: function () {
    var that = this;
    Helpers.getSaved().then(function(docs){
      console.log("my docs",docs)
      that.setState({
        savedArticles: docs.data
      })
    });
  },
  removeSaved: function(id){
    console.log("remove on main hit");
    var that = this;
    Helpers.deleteSaved(id).then(function(results){
      console.log("my results",results)
      that.setState({
        savedArticles: results.data
      });
    });
  },
  render: function() {
    console.log(this.state.savedArticles);
    //this.checkSaved();
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       savedArticles: this.state.savedArticles,
       checkSaved: this.checkSaved,
       removeSaved: this.removeSaved
     })
    );
    var jumboStyle = {
      textAlign: 'center'
    };
  return (
    <div className = "container">
      <div className="jumbotron" style = {jumboStyle}>
        <h1>New York Times Article Search</h1>
        <p>Search for and pin articles of interest!</p>
      </div>
      <nav className="navbar navbar-inverse">
        <div className = "container">
          <a href = "#/Search"><button type="button" className="btn btn-default navbar-btn">Search</button></a>
          <a href = "#/Saved"><button type="button" className="btn btn-default navbar-btn">Saved Articles</button></a>
        </div>
      </nav>
      <div className = "row">
        {childrenWithProps}
      </div>
    </div>
  );
  }
});

module.exports = Main;
