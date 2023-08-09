import React from 'react'
import styles from './Travit.module.scss'
import {
  Divider,
  IndicatorFeature,
  SectionHeader,
  ThemedCard,
  Typo,
  WhiteCard,
  useWindowSize,
} from 'MaaSIVO-UI'
import { CheckGreen, LoginMockup, PhoneOrangeCheck } from '../../assets/icons'
import { BusTrainImg } from '../../assets/img'
import {
  consistsOf,
  intro,
  leftCardFeatures,
  provides,
  qualities,
  rightCardFeatures,
} from 'data/travit'

export const Travit = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 576
  return (
    <div className={styles.travit}>
      <div className={styles.travit__section}>
        <div className={styles.travit__bannerImg}>
          <div className={styles.travit__blur}>
            <Typo variant="subtitle">Te presentamos</Typo>
            <Typo variant="title">Travit</Typo>
            <Divider />
          </div>
        </div>
      </div>
      <div
        className={[
          styles.travit__content,
          styles.travit__section,
          styles.travit__transform,
        ].join(' ')}
      >
        <LoginMockup className={styles.travit__loginMockup} />
        <div className={styles.travit__contentLeft}>
          <Typo>{intro}</Typo>
          <ThemedCard
            style={{ width: 'max-content' }}
            contentClassName={styles.travit__list}
            align="right"
          >
            {qualities.map((q) => (
              <div key={q} className={styles.travit__listItem}>
                <Typo variant="subtitle">{q}</Typo>
                <CheckGreen width={50} height={50} />
              </div>
            ))}
          </ThemedCard>
        </div>
      </div>
      <div className={styles.travit__sectionWithHeader}>
        <SectionHeader
          title="¿En que consiste?"
          align="left"
          className={styles.travit__headerLeft}
        />
        <ThemedCard align="center">
          <Typo>{consistsOf}</Typo>
        </ThemedCard>
      </div>
      <div className={styles.travit__sectionWithHeader}>
        <SectionHeader
          title="¿Qué nos puede aportar?"
          align="right"
          className={styles.travit__headerLeft}
        />
        <WhiteCard align="center">{provides.description}</WhiteCard>
        <div
          className={styles.travit__content}
          style={{ flexDirection: isMobile ? 'column' : 'row' }}
        >
          <img src={BusTrainImg} className={styles.travit__busTrain} />
          <div
            className={[
              styles.travit__contentLeft,
              styles.travit__listGap,
            ].join(' ')}
          >
            {provides.features.map((f) => (
              <IndicatorFeature
                contentWidth="100%"
                key={f.substring(0, 10)}
                style={{ marginLeft: isMobile ? 30 : 0 }}
              >
                <WhiteCard>{f}</WhiteCard>
              </IndicatorFeature>
            ))}
          </div>
        </div>
        <ThemedCard align="center">
          <Typo>
            Travit cuenta con diversas características que ayudan a garantizar
            viajes más cómodos y más seguros para el usuario, tales como son:
          </Typo>
        </ThemedCard>
        <div className={styles.travit__mockupRow}>
          <PhoneOrangeCheck
            height={isMobile ? 800 : '100%'}
            width={isMobile ? '50%' : undefined}
            className={styles.travit__mockPhone}
          />
          <div style={{ flex: 1 }}>
            {leftCardFeatures.map((f) => (
              <IndicatorFeature
                key={f.substring(0, 6)}
                position="left"
                contentWidth="100%"
                className={styles.travit__featureLeft}
              >
                <WhiteCard>{f}</WhiteCard>
              </IndicatorFeature>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {rightCardFeatures.map((f) => (
              <IndicatorFeature
                key={f.substring(0, 6)}
                contentWidth={isMobile ? '100%' : '80%'}
                position={isMobile ? 'left' : 'right'}
                className={
                  styles[
                    isMobile ? 'travit__featureLeft' : 'travit__featureRight'
                  ]
                }
              >
                <WhiteCard>{f}</WhiteCard>
              </IndicatorFeature>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
