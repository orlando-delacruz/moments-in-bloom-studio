import styled from 'styled-components'

export const Heading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: ${({ $size }) => $size || 'clamp(2.25rem, 5vw, 3.5rem)'};
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.05;
`
