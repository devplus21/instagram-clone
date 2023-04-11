import { Add } from '@material-ui/icons';
import CreateExercise from 'components/Exercise/CreateExercise';
import Helmet from 'components/Helmet';

import React, { useState } from 'react';

const Exercise = () => {
  const [openJoinClass, setOpenJoinClass] = useState(false);
  return (
    <Helmet title="Bài tập về nhà">
      <div className="content container-class">
        <button
          className="btn"
          style={{ padding: '14px 22px', borderRadius: '50px' }}
          onClick={() => setOpenJoinClass(true)}
        >
          <Add />
          Tạo
        </button>
        {openJoinClass && (
          <CreateExercise
            openJoinClass={openJoinClass}
            setOpenJoinClass={setOpenJoinClass}
          />
        )}
        {/* <ItemExercise /> */}
      </div>
    </Helmet>
  );
};

export default Exercise;
