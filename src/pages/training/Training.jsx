import React from "react";
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

  return (
    <div className={styles.carouselContainer}>
      <div id={styles.carouselText}>Training Programs</div>
      <div className={styles.carousel}>
        {trainingData.map((item, index) => {
          return (
            <TrainingCard
              type={trainingData[index].type} //get props from here from down function
              imgUrl={trainingData[index].imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

//pass props from here
function TrainingCard({ type, imgUrl }) {
  return (
    <div className={styles.cardBox}>
      <img className={styles.card} src={imgUrl}></img>
      <div id={styles.cardTypeText}>{type}</div>
    </div>
  );
}
