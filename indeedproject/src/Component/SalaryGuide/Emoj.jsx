import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { active, inactive } from "./data";
import styles from "./Salary.module.css";
import { Heading } from "@chakra-ui/react";

const EmojisRating = () => {
  const [emoji, setEmoji] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState();
  

  const handleDisplay = (e) => {
    if (!emoji) {
      const { id } = e.target;
      e.target.src = active[id - 1];
    }
  };
  const handleHide = (e) => {
    if (!emoji) {
      const { id } = e.target;
      e.target.src = inactive[id - 1];
    }
  };

  var handleRating = (e) => {
    if (activeEmoji) {
      const { id } = activeEmoji;
      activeEmoji.src = inactive[id - 1];
    }
    setEmoji(true);
    const { id } = e.target;
    setActiveEmoji(e.target);
    e.target.src = active[id - 1];
  };

  return (
    <div className={styles.emojiContainer}>
      <div className={styles.findEarning}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={5}>
            <div >
              <Heading >Was this page helpful?</Heading>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
            <div>
              {inactive.map((item, index) => {
                return (
                  <img
                    key={index}
                    onMouseOver={handleDisplay}
                    onMouseOut={handleHide}
                    onClick={handleRating}
                    id={index + 1}
                    src={inactive[index]}
                    alt="rating emoji"
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { EmojisRating };
