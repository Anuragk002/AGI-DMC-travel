import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getPlaces } from "../services/dataService";
import PlacesTable from "./placesTable";
import _ from "lodash";

class Places extends Component {
  state = {
    places: getPlaces(),
    currentPage: 1,
    pageSize: 8,
    sortColumn: { path: "", orderBy: "asc" },
  };

  handleDelete = (value) => {
    const mo = this.state.places.filter((place) => place.id !== value);
    this.setState({ places: mo });
  };
  handleLike = (place) => {
    const places = [...this.state.places];
    const index = places.indexOf(place);
    places[index] = { ...places[index] };
    places[index].liked = !places[index].liked;
    this.setState({ places });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  render() {
    return <main className="container">{this.renderList()}</main>;
  }
  renderList() {
    const { length: count } = this.state.places;
    const { currentPage, pageSize, places: allPlaces, sortColumn } = this.state;
    if (count === 0) return "There are no places in the database";

    const sorted = _.orderBy(
      allPlaces,
      [sortColumn.path],
      [sortColumn.orderBy]
    );
    const places = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <div>
            {/* <Link
              to="/places/new"
              className="btn btn-primary"
              style={{ marginBottom: "20px" }}
            >
              {" "}
              + New Place{" "}
            </Link> */}
            <p>'There are {allPlaces.length} places in the database'</p>
            <PlacesTable
              places={places}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              sortColumn={sortColumn}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={allPlaces.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
