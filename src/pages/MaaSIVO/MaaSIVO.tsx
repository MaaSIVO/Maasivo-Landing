import React from 'react'
import styles from './MaaSIVO.module.scss'
import {
  CircleCardCarousel,
  GradientCircle,
  SectionHeader,
  TeamCarousel,
  ThemedCard,
  Typo,
  useWindowSize,
} from 'MaaSIVO-UI'
import { mission, teamMemberData, vision } from '@pages/data/maasivo'
import { values } from '@pages/data/home'

export const MaaSIVO = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  return (
    <div className={styles.maasivo}>
      <div className={styles.triangleContainer}>
        <div className={styles.triangle}>
          <div className={styles.triangle__imgContainer}>
            <div className={styles.triangle__img} />
          </div>
        </div>
      </div>
      <SectionHeader
        align="right"
        title="¿Quiénes somos?"
        className={styles.maasivo__headerRight}
      />
      <div className={styles.maasivo__section}>
        <TeamCarousel items={teamMemberData} />
      </div>
      <div className={styles.maasivo__contentContainer}>
        <div className={styles.maasivo__content}>
          <Typo variant="title">Misión</Typo>
          <ThemedCard bordered align="center">
            <Typo variant="content">{mission}</Typo>
          </ThemedCard>
        </div>
        <div className={styles.maasivo__content}>
          <Typo variant="title">Visión</Typo>
          <ThemedCard bordered align="center">
            <Typo variant="content">{vision}</Typo>
          </ThemedCard>
        </div>
      </div>
      <div className={styles.maasivo__valuesSection}>
        <SectionHeader
          align="left"
          title="Valores"
          className={styles.maasivo__headerLeft}
        />
      </div>
      <div className={styles.maasivo__section}>
        <CircleCardCarousel
          items={values}
          style={{
            boxSizing: 'border-box',
          }}
        />
      </div>
      <GradientCircle size="60%" className={styles.maasivo__gradientCircle} />
    </div>
  )
}
