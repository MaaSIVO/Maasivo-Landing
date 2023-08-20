import React from 'react'
import styles from './Travit.module.scss'
import {
  Divider,
  Image,
  IndicatorFeature,
  SectionHeader,
  ThemedCard,
  Typo,
  WhiteCard,
  useWindowSize,
} from 'maasivo-ui'
import { CheckGreen, LoginMockup } from '../../assets/icons'
import { PhoneTrips, ProfileMockupImg, WalletMockupImg } from '../../assets/img'
import {
  consistsOf,
  intro,
  leftCardFeatures,
  provides,
  qualities,
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
          <div className={styles.travit__contentLeft}>
            <Image
              bordered
              src={PhoneTrips}
              className={styles.travit__busTrain}
            />
          </div>
          <div
            className={[
              styles.travit__contentLeft,
              styles.travit__listGap,
            ].join(' ')}
          >
            {provides.features.map((f) => (
              <IndicatorFeature
                contentWidth="100%"
                key={f.title.substring(0, 10)}
                style={{
                  marginLeft: isMobile ? 30 : 0,
                  width: isMobile ? '90%' : '100%',
                  textAlign: 'end',
                }}
              >
                <Typo
                  theme="themedColor"
                  style={{ marginBottom: 10, fontWeight: 500 }}
                >
                  {f.title}
                </Typo>
                <WhiteCard>{f.description}</WhiteCard>
              </IndicatorFeature>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.travit__section}>
        <ThemedCard align="center">
          <Typo>
            Travit cuenta con diversas características que ayudan a garantizar
            viajes más cómodos y más seguros para el usuario, tales como son:
          </Typo>
        </ThemedCard>
      </div>
      <div
        className={[styles.travit__mockupRow, styles.travit__section].join(' ')}
      >
        {leftCardFeatures.map((f) => (
          <WhiteCard align="center" key={f.title.substring(0, 6)}>
            <Typo
              theme="themedColor"
              variant="subtitle"
              style={{ marginBottom: 10 }}
            >
              {f.title}
            </Typo>
            {f.description}
          </WhiteCard>
        ))}
      </div>
      <div
        className={[styles.travit__mockups, styles.travit__section].join(' ')}
      >
        <div className={styles.travit__mockup}>
          <Typo
            theme="themedColor"
            variant="subtitle"
            style={{ marginBottom: 10 }}
          >
            Perfil del usuario
          </Typo>
          <Typo style={{ textAlign: 'center', order: isMobile ? 1 : 2 }}>
            Con la opción de tener una lista de discapacidades, esto para
            ofrecer información de la unidad de servicio especial que le sea
            útil al usuario, misma que contará con rampas, altavoces, guías podo
            táctiles y personal capacitado.
          </Typo>
          <img
            src={ProfileMockupImg}
            width="50%"
            style={{ order: isMobile ? 2 : 1 }}
          />
        </div>
        <div className={styles.travit__mockup}>
          <Typo
            theme="themedColor"
            variant="subtitle"
            style={{ marginBottom: 10 }}
          >
            “Cartera digital”
          </Typo>
          <Typo style={{ textAlign: 'center', order: isMobile ? 1 : 2 }}>
            Donde se podrá consultar saldo de la cuenta y recargar el mismo
            mediante tarjeta de crédito o débito, Paypal o pago en efectivo en
            tiendas de autoservicio. Además de poder pagar con el celuflar
            mediante código QR o NFC.
          </Typo>
          <img
            src={WalletMockupImg}
            width="50%"
            style={{ order: isMobile ? 2 : 1 }}
          />
        </div>
      </div>
    </div>
  )
}

/***
 *  con la opción de tener una lista de
                discapacidades, esto para ofrecer información de la unidad de
              servicio especial que le sea útil al usuario, misma que contará
              con rampas, altavoces, guías podo táctiles y personal capacitado.


              , donde se podrá consultar
              saldo de la cuenta y recargar el mismo mediante tarjeta de crédito
              o débito, Paypal o pago en efectivo en tiendas de autoservicio.
              Además de poder pagar con el celuflar mediante código QR o NFC.
 */
