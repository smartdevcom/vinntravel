import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import ErrorMessage from "../common/ErrorMessage";
import Loading from "../common/Loading";
import HolidayRowItem from "./HolidayRowItem";

class Holidays extends Component {
  constructor(props, context) {
    super(props, context);

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(pageNumber) {
    this.props.onPageChange(pageNumber);
  }

  render() {
    const {error, loading, totalItemsCount, activePage, itemsCountPerPage, pageRangeDisplayed, items} = this.props;

    if (error) {
      return <ErrorMessage message={error.message}/>;
    }

    if (loading) {
      return <Loading/>;
    }
    return (
      <div className="search-result-area">
        <div className="title ">
          <h1>{this.props.title}</h1>
        </div>
        <section id="holidays">
          <div className="holiday-wrapper">
            {
              items.map(function (d) {
                return <HolidayRowItem key={d.id} holiday={d}/>;
              })
            }
          </div>
        </section>
        <div className="pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

Holidays.propTypes = {
  totalItemsCount: PropTypes.number.isRequired,
  activePage: PropTypes.number,
  itemsCountPerPage: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string
};

export default Holidays;
