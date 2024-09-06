'use client'
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [id, setId] = useState()
  const [advice, setAdvice] = useState()
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
      .then(result => (
        setId(result.data.slip.id), setAdvice(result.data.slip.advice)
      ))
  }, [toggle])

  const handleClick = () => {
    setToggle(prevToggle => !prevToggle)
  }
  console.log(toggle)

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.quoteContainer}>
        <p className={styles.adviceId}>ADVICE #{id}</p>
        <h1 className={styles.advice}>"{advice}"</h1>

        <div className={styles.linesWrapper}>
          <hr className={styles.line} />
          <hr className={styles.dot} />
          <hr className={styles.dot} />
          <hr className={styles.line} />
        </div>
      </div>

      <div className={styles.btn} onClick={handleClick}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
      </div>
    </div>
  );
}
