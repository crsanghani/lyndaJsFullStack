import React from 'react';
import PropTypes from 'prop-types';

import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div>
    {Object.keys(contests).map(contestId =>
      <ContestPreview
        onClick={onContestClick}
        {...contests[contestId]}
        key={contestId}/>
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
