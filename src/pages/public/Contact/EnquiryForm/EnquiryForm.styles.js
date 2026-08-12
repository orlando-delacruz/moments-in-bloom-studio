import styled, { css } from 'styled-components'

export const FormSection = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.ivory};
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const Rail = styled.div`
  position: sticky;
  top: calc(${({ theme }) => theme.layout.headerHeight} + 2rem);
  padding-block: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
    padding-block: 0;
  }
`

export const RailEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    width: 2.5rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`

export const RailTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: calc(${({ theme }) => theme.spacing.lg} - 0.1em);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.75rem, 3.2vw, 2.4rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.02em;
`

export const RailSteps = styled.ol`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const RailStep = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
`

export const RailStepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
`

export const RailStepTitle = styled.p`
  margin: 0 0 0.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.1rem;
`

export const RailStepDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.7;
`

export const RailNote = styled.p`
  margin: 0;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.75rem;
  line-height: 1.7;
`

export const FormPanel = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: clamp(1.5rem, 4vw, 2.5rem);
`

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  & + & {
    margin-top: ${({ theme }) => theme.spacing.xxl};
    padding-top: ${({ theme }) => theme.spacing.xxl};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const FieldsetHeading = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const FieldsetKicker = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export const FieldsetTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
  font-weight: 400;
  line-height: 1.15;
`

export const FieldsetHint = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.7;
`

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const FieldLabel = styled.label`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
  }
`

const fieldBase = css`
  width: 100%;
  min-height: ${({ theme }) => theme.controls.tapTarget};
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.9rem;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.65;
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ theme }) => theme.colors.taupe};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.danger};

      &:focus {
        border-color: ${theme.colors.danger};
        box-shadow: 0 0 0 4px rgba(201, 74, 70, 0.18);
      }
    `}
`

export const Input = styled.input`
  ${fieldBase}
`

export const Textarea = styled.textarea`
  ${fieldBase}
  min-height: 10rem;
  line-height: 1.6;
  resize: vertical;
`

export const HelpText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  line-height: 1.6;
`

export const ErrorText = styled.p`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.5;

  svg {
    flex: 0 0 auto;
    margin-top: 0.15rem;
  }
`

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-weight: 700;
`

export const ChoiceInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`

export const ChoicePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.1rem;
  border: 1px solid ${({ $checked, theme }) =>
    $checked ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $checked, theme }) =>
    $checked ? theme.colors.primary : theme.colors.background};
  color: ${({ $checked, theme }) =>
    $checked ? theme.colors.surface : theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  .choice-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ $checked, theme }) =>
      $checked ? theme.colors.gold : theme.colors.border};
  }
`

export const ChoiceGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

export const ChoiceLabel = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  ${ChoiceInput}:focus-visible + ${ChoicePill} {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  ${ChoiceInput}:disabled + ${ChoicePill} {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const StepPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  &[hidden] {
    display: none;
  }
`

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`

export const NavForward = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
  min-width: 0;
  margin-left: auto;

  button {
    flex: 0 0 auto;
  }
`

export const SubmitRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

export const SubmitNote = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  line-height: 1.6;
`

export const ErrorBanner = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 1rem 1.25rem;
  border: 1px solid rgba(201, 74, 70, 0.4);
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(201, 74, 70, 0.07);
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.82rem;
  line-height: 1.65;

  a {
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

export const SuccessPanel = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};

  .success-icon {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.ivory};
    color: ${({ theme }) => theme.colors.primaryHover};

    svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`

export const SuccessEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const SuccessTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 400;
  line-height: 1.15;
`

export const SuccessText = styled.p`
  margin: 0;
  max-width: 34rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.8;
`

export const SuccessActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`