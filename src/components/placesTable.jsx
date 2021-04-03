import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class PlacesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (place) => (
        <Link to={`./places/${place.id}`}>{place.title}</Link>
      ),
    },
    // { path: "imagePath[0].original", label: "Image" },
    { path: "fromPrice", label: "fromPrice" },
    // {
    //   key: "delete",
    //   content: (place) => (
    //     <button
    //       onClick={() => this.props.onDelete(place.id)}
    //       className={"btn btn-danger btn-sm"}
    //     >
    //       Delete
    //     </button>
    //   ),
    // },
  ];

  render() {
    const { places, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={places}
      />
    );
  }
}

export default PlacesTable;
