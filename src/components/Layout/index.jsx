import Head from 'next/head'
import Image from 'next/image.js'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import { useWindowSize } from '../../hooks/useWindowSize.js'
import { MenuDesktop } from '../Menu/MenuDesktop'
import { MenuMobile } from '../Menu/MenuMobile'
import { HeaderContainer } from './style.js'

export function Layout({ children }) {
  const { width } = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState('xl')

  useEffect(() => {
    if (width >= 1400) return setCurrentWidth('xxl')
    if (width >= 1200) return setCurrentWidth('xl')
    if (width >= 992) return setCurrentWidth('lg')
    if (width >= 768) return setCurrentWidth('md')
    if (width >= 576) return setCurrentWidth('sm')
    if (width < 576) return setCurrentWidth('xs')

    setCurrentWidth(width)
  })

  return (
    <>
      <Head>
        <title>Menos do mesmo</title>
      </Head>

      <Container fluid>
        <Row>
          <HeaderContainer>
            <Image src={logo} alt="Logo" width={233.62} />

            {width >= 576 && <MenuDesktop />}
            {width < 576 && <MenuMobile />}
          </HeaderContainer>
        </Row>

        <Row>
          <main>{children}</main>
        </Row>

        <Row>
          <footer>footer</footer>
        </Row>
      </Container>
    </>
  )
}