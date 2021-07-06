import React from 'react';

interface AddItemModalProps {
  toggleHandler: () => void;
  isModalVisible: boolean;
}

export const AddItemModal: React.FC<AddItemModalProps> = ({
  toggleHandler,
  isModalVisible,
}) => {
  const [style, setStyle] = React.useState({ display: 'none', padding: '0' });

  React.useEffect(() => {
    function hangleStyleToggle() {
      if (isModalVisible) {
        setStyle({ display: 'block', padding: '0 17px 0 0' });
        return;
      }
      setStyle({ display: 'none', padding: '0' });
    }
    hangleStyleToggle();
  }, [isModalVisible]);

  function saveItem() {
    // логика запроса к апи
    toggleHandler();
  }

  return (
    <div
      className={isModalVisible ? 'modal fade in' : 'modal fade'}
      style={style}
      id="myModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden={isModalVisible}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={toggleHandler}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Add new item
            </h4>
          </div>
          <div className="modal-body">
            <p className="modal-label">Item name</p>
            <input type="text" className="form-control" />
            <p className="modal-label">Text</p>
            <textarea className="form-control" rows={3} defaultValue={''} />
          </div>
          <div className="modal-footer">
            <button
              onClick={toggleHandler}
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={saveItem}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
