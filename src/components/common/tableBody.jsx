import React, { Component } from "react";
import _ from "lodash";
import "./tableBody.css";
// import "./tableBody.js";
import photo1 from "../../images/singapore.jpg";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { columns, data } = this.props;
    return (
      // <tbody>
      //     {data.map(item=>
      //         <tr key={item._id}>
      //             {columns.map(column=><td key={item._id+(column.path||column.content)}>{this.renderCell(item,column)}</td>)}
      //         </tr>
      //     )}
      // </tbody>

      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#">
                      <img className="pic-1" src={item.imagePath[0].original} />
                      <img className="pic-2" src={photo1} />
                    </a>
                    <ul className="social">
                      <li>
                        <a href data-tip="Quick View">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                      <li>
                        <a href data-tip="Add to Wishlist">
                          <i className="fa fa-shopping-bag" />
                        </a>
                      </li>
                      <li>
                        <a href data-tip="Add to Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                    <span className="product-new-label">Offer</span>
                    <span className="product-discount-label">20%</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                  </ul>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <div className="price">
                      <span>from </span>${item.fromPrice}
                    </div>
                    <a className="add-to-cart btn-get-started" href>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TableBody;
