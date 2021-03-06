import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Link from 'next/link'
import Buscar from '../ui/Buscar'
import Boton from '../ui/Boton'
import Navegacion from './Navegacion'
import { FirebaseContext } from '../../firebase'


const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width:768px) {
      display: flex;
      justify-content: space-between;
  }
`
const Logo = styled.a`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Slap', serif;
  margin-right: 2rem;
  cursor: pointer;
`

const Header = () => {
  const {firebase, usuario} = useContext(FirebaseContext);

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>Header</Logo>
          </Link>
          <Buscar />
          <Navegacion />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          { usuario ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >Hola {usuario.displayName}</p>
              <Boton 
                bgColor='true'
                onClick={ () => firebase.cerrarSesion() }
              >Cerrar sesion</Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor='true'>Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          ) }
        </div>
      </ContenedorHeader>
    </header>
  )
}
export default Header
