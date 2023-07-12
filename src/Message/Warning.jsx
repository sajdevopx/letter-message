import classes from './Warning.module.css';
import ReactDOM from 'react-dom';
import exit from '../assets/exit.png';
import '../App.css';
import { useState } from 'react';
import NoChoice from './NoChoice';
import Message from './Message';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [message, setMessage] = useState(false);
  const [no, setNo] = useState(false);
  const noHandler = () => {
    setNo(!no);
  };

  const showMessageHandler = () => {
    setMessage(!message);
  };
  return (
    <div>
      {no && <NoChoice onConfirm={noHandler} />}
      {message && <Message onConfirm={showMessageHandler} />}
      <div className={classes.modal}>
        <div className={classes.header}>
          <p className={classes.title}>Caution!</p>
          <img
            onClick={props.onConfirm}
            className={classes.exit}
            src={exit}
            alt="exit"
          />
        </div>
        <div className={classes.warningMessage}>
          <p>Do you want to open this letter?</p>
          <p className={classes.no}>( please, wag ka mag noooo)</p>
          <div className="heart">⚠️</div>
          <div className={classes.button_container}>
            <button onClick={noHandler}>No</button>
            <button onClick={showMessageHandler}>Yes</button>
          </div>
        </div>
        <div className={classes.letter}></div>
      </div>
    </div>
  );
};

const Warning = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-warning')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById('warning-root')
      )}
    </div>
  );
};

export default Warning;
