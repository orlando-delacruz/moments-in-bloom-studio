import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants/ui.js'
import { Button as StyledButton, ButtonSpinner } from './Button.styles.js'

function Button({
  children,
  loading = false,
  disabled = false,
  size = BUTTON_SIZES.MEDIUM,
  variant = BUTTON_VARIANTS.PRIMARY,
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <StyledButton
      $size={size}
      $variant={variant}
      aria-busy={loading}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {loading ? <ButtonSpinner aria-hidden="true" /> : children}
    </StyledButton>
  )
}

export default Button
