import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterSearch extends React.Component {
  constructor (props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  render () {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Favourite</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderItems()}
        </TableBody>
      </Table>
    )
  }

  renderItems () {
    if(this.props.books.books.books != undefined)
    return this.props.books.books.books.items.map(this.renderItem)
  }

  renderItem (item, index) {
    let authors, categories
    if(item.volumeInfo.authors !== undefined) {
      authors = item.volumeInfo.authors[0]
    } else {
      authors = 'WA'
    }
    if(item.volumeInfo.categories !== undefined) {
      categories = item.volumeInfo.categories[0]
    } else {
      categories = 'WA'
    }
    return (
      <TableRow index={index}>
        <TableRowColumn>{item.volumeInfo.title}</TableRowColumn>
        <TableRowColumn>{authors}</TableRowColumn>
        <TableRowColumn>{categories}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton secondary="true">
            +<ActionGrade />
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
    )
  }

  heandleBooks () {
    console.log(this.props)
  }
}

export default CenterSearch;
