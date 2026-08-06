import styled from 'styled-components'

export const AdminShell = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: ${({ theme }) => theme.layout.adminSidebarWidth} minmax(0, 1fr);
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`

export const AdminWorkspace = styled.div`
  min-width: 0;
`

export const AdminMain = styled.main`
  min-height: calc(100vh - 4.5rem);
`
