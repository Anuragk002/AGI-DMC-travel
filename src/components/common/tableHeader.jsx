import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.orderBy = sortColumn.orderBy === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.orderBy = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.orderBy === "asc")
      return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };
  render() {
    return (
      <>
        <h5>sortBy:</h5>
        <ul className="list-group list-group-horizontal-sm">
          {this.props.columns.map((column) => (
            <li
              className="clickable list-group-item"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TableHeader;
