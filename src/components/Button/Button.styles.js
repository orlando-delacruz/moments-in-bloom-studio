import styled, { css } from 'styled-components'

const variantStyles = {
  primary: css`
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primaryHover};
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primaryHover};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.surface};
    }
  `,
  outline: css`
    border-color: ${({ theme }) => theme.colors.primary};
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryHover};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondary};
    }
  `,
  ghost: css`
    border-color: transparent;
    background: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
}

const sizeStyles = {
  small: css`
    min-height: ${({ theme }) => theme.controls.tapTarget};
    padding-inline: 1rem;
    font-size: 0.8125rem;
  `,
  medium: css`
    min-height: ${({ theme }) => theme.controls.tapTarget};
    padding-inline: 1.25rem;
  `,
  large: css`
    min-height: 3.25rem;
    padding-inline: 1.75rem;
  `,
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: ${({ theme }) => theme.controls.tapTarget};
  padding-block: ${({ theme }) => theme.spacing.sm};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1;
  transition: ${({ theme }) => theme.transitions.standard};
  ${({ $size }) => sizeStyles[$size] || sizeStyles.medium};
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary};

  &:hover:not(:disabled) {
    box-shadow: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.shadows.ctaHover : 'none'};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
  }

  &:disabled {
    opacity: 0.55;
  }
`

export const ButtonSpinner = styled.span`
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: ${({ theme }) => theme.radii.pill};
  animation: button-spin 0.75s linear infinite;

  @keyframes button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`
