import React from 'react';
import './24-fragment.css';

// 리액트 <React.Fragment> === 웹 표준 <template>

function Exercise() {
  // ❌
  //  return <div>one</div><div>two</div>;

  // ❌
  // return React.createElement(/* type */'div', /* props */{})React.createElement(/* type */'div', /* props */{})

  // ✅
  // return [
  //   React.createElement(/* type */ 'div', /* props */ {}, 'one'),
  //   React.createElement(/* type */ 'div', /* props */ {}, 'two'),
  // ];

  // ✅
  return (
    <React.Fragment>
      <div>one</div>
      <div>two</div>
    </React.Fragment>
  );
}

export default Exercise;
