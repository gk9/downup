import React from "react";
import styles from "./bike.module.css";


let bikeDown = false;

class Bike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      destination: -400,
      down: 0,
      wheelRotate: 0,
    };
  }

  handleClick = (todo) => {
    if (bikeDown) {
      this.setState({
        destination: -400,
        wheelRotate: 0,
      });
      bikeDown = false;
    } else {
      this.setState({
        destination: this.state.down,
        wheelRotate: this.state.down * 1.5,
      });
      bikeDown = true;
    }
  }

  bikeAngle = () => {
    let a = window.innerWidth;
    let b = window.innerHeight;
    let angle = Math.atan(b/a) * -180 / Math.PI;
    return angle;
  }
  bikeDestination = () => {
    let a = window.innerWidth;
    let b = window.innerHeight;
    let c_sq = Math.pow(a,2) + Math.pow(b,2);
    let c = (Math.sqrt(c_sq) * -1) + 200;
    return c;
  }

  updateDimensions = () => {
    this.setState({
      angle: this.bikeAngle(),
      down: this.bikeDestination(),
    })
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div
        className={styles.bikeWrap}
        onClick={this.handleClick}
        style={{transform: "rotate(" + this.state.angle + "deg)"}}>
        <div
          className={styles.bikeMain}
          style={{transform: "translateX(" + this.state.destination + "px)"}}>
          <div
            className={styles.bikeWheel}
            style={{transform: "rotate(" + this.state.wheelRotate + "deg)"}}>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
          </div>
          <div
            className={styles.bikeWheel}
            style={{transform: "rotate(" + this.state.wheelRotate + "deg)"}}>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
            <div className={styles.bikeSpoke}></div>
          </div>
          <div className={styles.rider}>
            <div
              className={styles.leg}>
              <div
                className={styles.legLower}></div>
            </div>
            <div
              className={`${styles.leg} ${styles.leg2}`}>
              <div
                className={`${styles.legLower} ${styles.legLower2}` }></div>
            </div>
            <div className={styles.riderBody}>
              <div className={styles.riderHead}></div>
              <div className={styles.riderArm}>
                <div className={styles.riderArmLower}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <Bike />
)
