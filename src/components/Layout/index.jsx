import Head from 'next/head'
import Image from 'next/image.js'
import { Container, Row } from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import logoV2 from '../../assets/logoV2.svg'
import { useWindowSize } from '../../hooks/useWindowSize.js'
import { MenuDesktop } from '../Menu/MenuDesktop'
import { MenuMobile } from '../Menu/MenuMobile'
import {
  FooterBoxInfos,
  FooterBoxLogo,
  FooterContainer,
  HeaderContainer,
  MainContainer
} from './style.js'

export function Layout({ children }) {
  const { width } = useWindowSize()

  return (
    <>
      <Head>
        <title>Menos do mesmo</title>
      </Head>

      <Container className="p-0" fluid>
        <Row className="m-0">
          <HeaderContainer>
            <Image src={logo} alt="Logo" width={233.62} />

            {width >= 576 && <MenuDesktop />}
            {width < 576 && <MenuMobile />}
          </HeaderContainer>
        </Row>

        <Row className="m-0 justify-content-center">
          <MainContainer>{children}</MainContainer>
        </Row>

        <Row className="position-relative m-0">
          <FooterContainer id="footer">
            <FooterBoxInfos>
              <Image src={logoV2} alt="Logo" width={233.62} />
              <span>email@email.com</span>
              <span>17 9 4736-4958</span>
            </FooterBoxInfos>

            <FooterBoxLogo>
              <h2>F&MD</h2>
            </FooterBoxLogo>
          </FooterContainer>
        </Row>
      </Container>
    </>
  )
}
