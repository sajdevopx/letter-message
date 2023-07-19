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
          <p>Nakakalungkot kung bakit ka nag-Nooo! :(</p>
          <p>
            Wala kang choice, Elli. Kailangan mo talaga buksan yung letter, joke lang
            hahaha.
          </p>
          <p className={classes.charot}>
            (You can also view it on the desktop to see the magic. HAHAHAHAHA,
            charot!)
          </p>
          <div class="sad">😔</div>
        </div>
      </div>
    </div>
  );
};

export default NoChoice;
