import React from 'react';

import './Notification.scss';

const Notification = (props) => {
  /**
   * Permet d'ajouter du text à la façon innerHTML
   */
  const addContent = () => {
    return { __html: props.content };
  };

  /**
   * Permet d'avoir le type de la notification
   */
  const getNotificationType = () => {
    return props.status ? `is-${props.status}` : 'is-primary';
  };

  return (
    <div className={`notification ${getNotificationType()}`}>
      <button onClick={props.close} className='delete'></button>
      <p dangerouslySetInnerHTML={addContent()}></p>
    </div>
  );
};

export default Notification;
