import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);

  return (
    <Fragment>
      {alerts &&
        alerts.map((alert) => {
          return <div className={`alert-${alert.alertType}`} key={alert.id}>{alert.alertMessage}</div>;
        })}
    </Fragment>
  );
};

export default Alert;
