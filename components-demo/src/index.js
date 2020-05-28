import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today 4:45PM'
          imgSrc={faker.image.avatar()}
          commentText='Nice post!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today 6:45PM'
          imgSrc={faker.image.avatar()}
          commentText='This was helpful!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday 3:55PM'
          imgSrc={faker.image.avatar()}
          commentText='Good writing!'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
