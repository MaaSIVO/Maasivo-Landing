import { SectionHeader, ThemedCard, Typo } from 'MaaSIVO-UI'
import React from 'react'
import styles from './Home.module.scss'
import { YoutubeCap } from 'assets/img'

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__bannerImg}>
        <div className={styles.container__darkBg}>
          <SectionHeader
            className={styles.container__sectHeader}
            align="right"
            title="Un Sistema de Transporte Multimodal"
          />
          <ThemedCard className={styles.container__videoContainer}>
            <img src={YoutubeCap} width="100%" height="100%" />
          </ThemedCard>
          <ThemedCard bordered className={styles.container__imgDescription}>
            <Typo variant="content" style={{ textAlign: 'center' }}>
              Desarrollamos productos innovadores con impacto positivo en la
              sociedad, solucionando necesidades de seguridad, calidad y tiempos
              de espera.
            </Typo>
          </ThemedCard>
        </div>
      </div>
    </div>
  )
}

/*
            <iframe
              className={styles.container__iframe}
              allowFullScreen
              title="YouTube video player"
              src="https://www.youtube.com/embed/vL60745Q4Wo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
*/
