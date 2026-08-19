import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  let cell;
  if (!isHeader) {
    cell = (
      <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
      </>
    );
  }
  else {
    if (textSecondCell) {
      cell = (
        <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </>
      );
    }
    else cell = (<th colSpan='2'>{textFirstCell}</th>);
  }
  return(<tr>{cell}</tr>);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;
