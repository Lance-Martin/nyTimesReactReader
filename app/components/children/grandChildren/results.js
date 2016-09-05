var React = require('react');

var Results = React.createClass({
  render: function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Your search results</h3>
        </div>
        <div className="panel-body">
          <h2>no results yet</h2>
        </div>
      </div>
    );
  }
});


module.exports = Results;
