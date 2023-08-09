import React from 'react'
import {
  Typo,
  WhiteCard,
  ThemedCard,
  RoundedCard,
  SectionHeader,
  GradientCircle,
  useWindowSize,
  IndicatorFeature,
} from 'MaaSIVO-UI'
import styles from './MaaS.module.scss'
import { BlueDotArrow, CheckBlueGreen, PurpleMockup } from 'assets/icons'
import {
  def,
  sub1,
  sub2,
  sub3,
  title,
  intro,
  intro2,
  features,
  iconSet2,
  iconSet1,
  function1,
  function2,
  difference,
  perks,
  leftCardFeatures,
  rightCardFeatures,
} from 'data/maas'

export const MaaS = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 576

  const getCircleCardSize = () => {
    if (width > 991) {
      return 200
    } else if (width > 576 && width <= 991) {
      return 150
    }
    return 100
  }

  return (
    <div className={styles.maas}>
      <div style={{ padding: '0 50px' }}>
        <Typo variant="title">{title}</Typo>
      </div>
      <div className={styles.maas__bannerImg}>
        <div className={styles.maas__bannerTop} />
        <div className={styles.maas__bannerBottom} />
        <SectionHeader
          align="left"
          title="¿Qué es la movilidad Integrada?"
          className={styles.maas__bannerHeader}
        />
      </div>
      <div className={styles.maas__content}>
        <ThemedCard align="center">
          <Typo>{intro}</Typo>
        </ThemedCard>
        <div className={styles.maas__row}>
          <ThemedCard align="center" className={styles.maas__contentLeft}>
            <Typo>{intro2}</Typo>
          </ThemedCard>
          <div className={styles.maas__contentRight}>
            <Typo>{features.title}</Typo>
            {features.list.map((f) => (
              <div key={f}>
                <CheckBlueGreen
                  width={isMobile ? 30 : 50}
                  height={isMobile ? 30 : 50}
                />
                <Typo>{f}</Typo>
              </div>
            ))}
          </div>
        </div>
        <GradientCircle size="50%" className={styles.maas__gradientCircle} />
      </div>
      <div className={styles.maas__content}>
        <GradientCircle
          size="50%"
          className={styles.maas__gradientCircleRight}
        />
        <div className={styles.maas__intro} style={{ zIndex: 1 }}>
          <Typo variant="title">{sub1}</Typo>
          <ThemedCard align="center">
            <Typo variant="title">{sub2}</Typo>
            <Typo>{def}</Typo>
          </ThemedCard>
          <Typo variant="title">{sub3}</Typo>
          <div className={styles.maas__rowIcons}>
            <RoundedCard size={getCircleCardSize()} icon={iconSet1[0]} />
            <div className={styles.maas__columnArrows}>
              <BlueDotArrow width={50} />
              <BlueDotArrow width={50} className={styles.maas__leftArrow} />
            </div>
            <RoundedCard size={getCircleCardSize()} icon={iconSet1[1]} />
          </div>
          <WhiteCard align="center">{function1}</WhiteCard>
          <div className={styles.maas__rowIcons}>
            {iconSet2.map((i) => (
              <RoundedCard key={i.name} size={getCircleCardSize()} icon={i} />
            ))}
          </div>
          <WhiteCard align="center">{function2}</WhiteCard>
        </div>
      </div>
      <div className={styles.maas__difference}>
        <SectionHeader
          align="left"
          title="¿Qué hace a MaaS diferente?"
          className={styles.maas__differenceHeader}
        />
        <ThemedCard align="center" style={{ zIndex: 1 }}>
          <Typo>{difference}</Typo>
        </ThemedCard>
        <div className={styles.maas__differenceBg}>
          <div className={styles.maas__relative}>
            <div className={styles.maas__bannerTop} />
            <div className={styles.maas__bannerBottom} />
          </div>
        </div>
      </div>
      <div className={styles.maas__difference}>
        <SectionHeader
          align="right"
          title="Beneficios"
          className={styles.maas__differenceHeader}
        />
        <div
          className={styles.maas__rowIcons}
          style={{ flexDirection: isMobile ? 'column' : 'row' }}
        >
          {perks.map((i) => (
            <div className={styles.maas__columnItem} key={i.title}>
              <WhiteCard align="center" className={styles.maas__columnTitle}>
                {i.title}
              </WhiteCard>
              <ThemedCard
                align="center"
                style={{ flex: 1 }}
                contentClassName={styles.maas__perkItem}
              >
                <Typo>{i.content}</Typo>
              </ThemedCard>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.maas__mockup}>
        <Typo variant="title">
          ¿Qué abarcaría una aplicación móvil de MaaS?
        </Typo>
        <div className={styles.maas__mockupRow}>
          <PurpleMockup
            height={isMobile ? 800 : '100%'}
            width={isMobile ? '100%' : undefined}
            className={styles.maas__mockPhone}
          />
          <div style={{ flex: 1 }}>
            {leftCardFeatures.map((f) => (
              <IndicatorFeature
                key={f.substring(0, 6)}
                position="left"
                contentWidth="80%"
                className={styles.maas__featureLeft}
              >
                <Typo>{f}</Typo>
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
                  styles[isMobile ? 'maas__featureLeft' : 'maas__featureRight']
                }
              >
                <Typo>{f}</Typo>
              </IndicatorFeature>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
