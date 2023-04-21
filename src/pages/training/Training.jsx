import React, { useState, useRef } from "react";
import styles from "./Training.module.css";

export default function Training() {
  const trainingData = [
    {
      type: "Yoga",
      imgUrl:
        "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      type: "Body Building",
      imgUrl:
        "https://images.unsplash.com/photo-1636007596622-90bf5679f5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      type: "Aerobic",
      imgUrl:
        "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFlcm9iaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      type: "Flexibility",
      imgUrl:
        "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxleGliaWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      type: "Zumba",
      imgUrl:
        "https://media.istockphoto.com/id/1441559219/photo/zumba-fitness.jpg?b=1&s=612x612&w=0&k=20&c=FcwUo56FpgMQljhNF9ijmL_YKS9plZLZ6RvPdAvHJv0=",
    },
    {
      type: "Yoga",
      imgUrl:
        "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      type: "Body Building",
      imgUrl:
        "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const programsRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    setScrollPosition((prevPosition) => prevPosition + scrollOffset);
    console.log(scrollOffset);
  };

  const handleScrollLeft = () => {
    const scrollOffset = programsRef.current.offsetWidth / 6;
    handleScroll(-scrollOffset);
  };

  const handleScrollRight = () => {
    const scrollOffset = programsRef.current.offsetWidth / 6;
    handleScroll(scrollOffset);
  };

  return (
    <div>
      <div className={styles.carouselContainer}>
        <div className={styles.trainning}>
          <div id={styles.carouselText}>Training Programs</div>
          <p>
            Choose a category that best suits the workout you're searching for.
            Once in the category,
            <br />
            use the sort and filter options to find the right workout for your
            experience and goals. The most downloaded workouts in our database
            during the past 24 hours. You can also find top/trending workouts by
            choosing a category (above) and scrolling to the "trending" view.
          </p>
        </div>

        <div className={styles.carousel} ref={programsRef}>
          {trainingData.map((item, index) => {
            return (
              <TrainingCard
                type={trainingData[index].type} //get props from here from down function
                imgUrl={trainingData[index].imgUrl}
                scrollPosition={scrollPosition}
              />
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
            margin: "auto",
          }}
        >
          <button
            className="scroll-button scroll-left"
            onClick={handleScrollLeft}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Left⬅️
          </button>
          <button
            className="scroll-button scroll-right"
            onClick={handleScrollRight}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Right➡️
          </button>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Training Chart </h1>
      <div className={styles.list}>
        <table>
          <tr>
            <th>Sr No.</th>
            <th> Exercises</th>
            <th>Days</th>
          </tr>

          <tr>
            <td>1.</td>
            <td>ABS</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Arms</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>LEGS</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>SHOULDERS</td>
            <td>2</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>CHEST</td>
            <td>1</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>FULL-BODY</td>
            <td>1</td>
          </tr>
          <tr>
            <td>7</td>
            <td>BACK</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

//pass props from here
function TrainingCard({ type, imgUrl, scrollPosition }) {
  return (
    <div
      className={styles.cardBox}
      style={{
        transform: `translateX(${scrollPosition}px)`,
      }}
    >
      <img className={styles.card} src={imgUrl}></img>
      <div id={styles.cardTypeText}>{type}</div>
    </div>
  );
}
