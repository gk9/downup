import React from "react";
import styles from "./index.module.css";
import Container from "../components/container";
import Bike from "../components/Bike/Bike";

const Background = () =>
  <div className={styles.background}>
    <div></div>
  </div>

export default () => (
  <Container>
    <Background />
    <Bike
      dest="-200"
      theme="purple" />
    <Bike
      dest="-400"
      theme="purple" />
  </Container>
);
