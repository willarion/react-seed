import React from 'react';
import { AddItemModal } from '../AddItemModal/AddItemModal';

export const Search: React.FC = ({}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '0';
      return;
    }
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = '17px';
  }

  return (
    <div className="searchForm row">
      <div className="col-sm-14">
        <form
          name="search"
          action="index.html"
          method="get"
          className="form-inline form-search pull-left"
        >
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <a href="index.html" className="btn btn-search">
              <i className="icon-search"></i>
            </a>
          </div>
        </form>
      </div>

      <div className="options col-sm-10">
        <button
          onClick={toggleModal}
          title="Add new item"
          type="button"
          className="newItem"
          data-toggle="modal"
          data-target="index.htmlmyModal"
        >
          <i className="icon-plus-small"></i>
          <span>New Item</span>
        </button>

        <AddItemModal
          toggleHandler={toggleModal}
          isModalVisible={isModalVisible}
        />

        <a href="index.html" className="btn btn-sm btn-option">
          <i className="icon-sliders"></i>
        </a>
      </div>
    </div>
  );
};
