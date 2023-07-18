import classes from './Message.module.css';
import ReactDOM from 'react-dom';
import '../App.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.letter}>
        <div className={classes.header}>
          <p>Ordinary Letter</p>
        </div>
        <div className={classes.body}>
          <p>Hi elli,</p>
          <p className={classes.first}>
            Your voice is absolutely lovely, and I want to express my heartfelt
            gratitude for sharing your wonderful talent with all of us. Thank you!
          </p>
          {/* letting the world, career */}
          <p>I wish you nothing but happiness, good health, and safety always.</p>
          <p>Keep singing your heart out until we fall asleep! Hahaha (: </p>
          <p className={classes.linkTo}>(please tap the hearttt!!) </p>
          <div className={classes.last}>
            <p>-saj</p>
            <div className="heart">
              <a
                href="https://sajdevopx.github.io/ordinary-playlist/"
                target="_blank"
                rel="noreferrer"
              >
                🤍
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('modal-root')
      )}
    </div>
  );
};

export default Message;
