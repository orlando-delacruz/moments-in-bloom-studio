import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { publicNavigation } from '../../constants/navigation.js'
import { BUTTON_VARIANTS, MENU_KEYS, NAVBAR_SCROLL_THRESHOLD } from '../../constants/ui.js'
import useBodyScrollLock from '../../hooks/useBodyScrollLock.js'
import useScrolled from '../../hooks/useScrolled.js'
import Button from '../Button/index.js'
import MobileMenu from './MobileMenu.jsx'
import { Brand, DesktopActions, Header, HeaderContainer, MobileActions, NavigationLink, PrimaryNav } from './Navbar.styles.js'
import { MenuIcon, MenuLine, MobileMenuButton } from './MobileMenu.styles.js'

function Navbar() {
  const isScrolled = useScrolled(NAVBAR_SCROLL_THRESHOLD)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const hadMenuOpen = useRef(false)

  useBodyScrollLock(isMenuOpen)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      hadMenuOpen.current = true
      return undefined
    }

    if (hadMenuOpen.current) {
      menuButtonRef.current?.focus()
      hadMenuOpen.current = false
    }

    return undefined
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === MENU_KEYS.ESCAPE) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeMenu, isMenuOpen])

  return (
    <>
      <Header $scrolled={isScrolled}>
        <HeaderContainer>
        <NavLink to="/" end aria-label="Moments in Blooms home">
          <Brand>Moments in Blooms</Brand>
        </NavLink>
        <PrimaryNav aria-label="Primary navigation">
          {publicNavigation.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              <NavigationLink>{item.label}</NavigationLink>
            </NavLink>
          ))}
        </PrimaryNav>
          <DesktopActions>
            <Button as={NavLink} to="/contact" variant={BUTTON_VARIANTS.PRIMARY}>
              Enquire Now
            </Button>
          </DesktopActions>
          <MobileActions>
            <MobileMenuButton
              ref={menuButtonRef}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            >
              <MenuIcon aria-hidden="true">
                <MenuLine
                  animate={isMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                />
                <MenuLine
                  animate={isMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                />
              </MenuIcon>
            </MobileMenuButton>
          </MobileActions>
        </HeaderContainer>
      </Header>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navbar
