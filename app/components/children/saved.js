var React = require('react');

var Saved = React.createClass({
  getInitialState: function() {
    return ({
      saved: this.props.savedArticles
    })
  },
  render: function(){

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body">
        {this.state.saved ? this.state.saved.map(function(article, i)
          {
            return (
              <div key = {i} className = "container">
                <h4 key={i}>{article.title}</h4>
                <p>{"article date:" + article.date}</p>
                <a className = "btn btn-default" href = {article.URL}>Read Full Story</a>
              </div>
            )
          }
        ) : (<h3>No search has been entered.</h3>)}
        </div>
      </div>
    );
  }
});

module.exports = Saved;
