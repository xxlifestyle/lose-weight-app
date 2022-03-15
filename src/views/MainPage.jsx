import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel} from "antd";
import styles from './MainPage.module.css'
import PartyIcon from '../assets/party.png'
import {lose_weight_exercises} from "../data/exercises";



const MainPage = () => {

    const [data, setData] = useState(null)
    useEffect(()=>{
        localStorage.userData !== undefined ?  setData(localStorage.userData) : dataConstructor()


    },[])

    async function dataConstructor() {
        await localStorage.userData !== undefined ? await console.log('') : await localStorage.setItem('userData', JSON.stringify(lose_weight_exercises))
        await setData(localStorage.userData)
        await console.log(data)
    }



    return (
       <Card className={styles.cardBlock}>
            <h1 className={styles.cardTitle}> День 1 <img className={styles.titleIcon} src={PartyIcon} alt=""/></h1>
           <Carousel className={styles.carousel} dots={false} >
               <div className={styles.carouselBlock}>
                   <div className={styles.carouselContent}>
                   <iframe align={'middle'} width="760" height="430" src="https://www.youtube.com/embed/7t1qhpDLSi0"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
                       <div>
                           <Button type={'primary'} size={'large'}>Сделано!</Button></div>
                   </div>
               </div>

           </Carousel>,
       </Card>
    );
};

export default MainPage;