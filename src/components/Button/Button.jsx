import { NavLink } from 'react-router-dom'
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants/ui.js'
import { Button as StyledButton, ButtonSpinner } from './Button.styles.js'

function Button({
  children,
  loading = false,
  disabled = false,
  size = BUTTON_SIZES.MEDIUM,
  variant = BUTTON_VARIANTS.PRIMARY,
  fullWidth = false,
  type = 'button',
  to,
  as,
  ...props
}) {
  const isDisabled = disabled || loading
  const Component = as || (to ? NavLink : 'button')

  return (
    <StyledButton
      as={Component}
      to={to}
      $size={size}
      $variant={variant}
      $fullWidth={fullWidth}
      aria-busy={loading}
      disabled={isDisabled}
      type={to ? undefined : type}
      {...props}
    >
      {loading ? <ButtonSpinner aria-hidden="true" /> : children}
    </StyledButton>
  )
}

export default Button
