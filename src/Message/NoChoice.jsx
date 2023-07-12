import classes from './NoChoice.module.css';
import exit from '../assets/exit.png';

const NoChoice = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.noChoice}>
        <div className={classes.header}>
          <p>Hmmpp!</p>
          <img
            onClick={props.onConfirm}
            className={classes.exit}
            src={exit}
            alt="exit"
          />
        </div>
        <div className={classes.noChoiceMessage}>
          <p>Nakakalungkot ba't ka nag Nooo! :( </p>
          <p>
            Wala kang choice elli, need mo talaga buksan yung letter HAHAHAHAHAHA
            joke
          </p>
          <div class="sad">😔</div>
        </div>
      </div>
    </div>
  );
};

export default NoChoice;
