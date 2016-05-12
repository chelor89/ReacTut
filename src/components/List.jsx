var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham","something":"A"},{"id":2,"text":"cheese","something":"B"},{"id":3,"text":"potatoes","something":"C"}];
var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item){
        return <ListItem key={item.id} ingredient={item.text} smth={item.something} />
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
