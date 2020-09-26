import React from 'react';
import AllConversations from './all-conversations/AllConversations';

import './Messenger.scss';

const Messenger = () => {
  return (
    <div className='messenger'>
      <AllConversations></AllConversations>
    </div>
  );
};

export default Messenger;
