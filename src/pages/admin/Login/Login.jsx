import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import logoPrimary from '../../../assets/images/logo-old-primary.png'
import Button from '../../../components/Button/index.js'
import { RequiredMark, TextField } from '../../../components/FormField/index.js'
import { adminLogin } from '../../../constants/admin.js'
import useAuth from '../../../hooks/useAuth.js'
import { isSupabaseConfigured } from '../../../services/supabaseClient.js'
import { EMAIL_PATTERN } from '../../../utils/validation.js'
import {
  LoginBackLink,
  LoginBrand,
  LoginBrandLogo,
  LoginCard,
  LoginDemoNote,
  LoginError,
  LoginEyebrow,
  LoginForm,
  LoginShell,
  LoginTitle,
} from './Login.styles.js'

function Login() {
  const { session, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [authError, setAuthError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  if (session) {
    return <Navigate to="/admin/dashboard" replace />
  }

  const onSubmit = async (values) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setAuthError(null)

    const result = await signIn(values.email, values.password)
    setIsSubmitting(false)

    if (result.error) {
      setAuthError(result.error.message)
      return
    }

    const from = location.state?.from
    navigate(from || '/admin/dashboard', { replace: true })
  }

  return (
    <LoginShell>
      <LoginCard>
        <LoginBrand>
          <LoginBrandLogo src={logoPrimary} alt="" aria-hidden="true" />
          <LoginEyebrow>{adminLogin.eyebrow}</LoginEyebrow>
          <LoginTitle>{adminLogin.title}</LoginTitle>
        </LoginBrand>

        <LoginForm noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label={
              <>
                {adminLogin.emailLabel}
                <RequiredMark aria-hidden="true"> *</RequiredMark>
              </>
            }
            type="email"
            placeholder={adminLogin.emailPlaceholder}
            error={errors.email?.message}
            {...register('email', {
              required: 'Please enter your email address.',
              pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' },
            })}
          />
          <TextField
            label={
              <>
                {adminLogin.passwordLabel}
                <RequiredMark aria-hidden="true"> *</RequiredMark>
              </>
            }
            type="password"
            error={errors.password?.message}
            {...register('password', {
              required: 'Please enter your password.',
              minLength: { value: 6, message: 'Your password must be at least 6 characters.' },
            })}
          />

          {authError ? <LoginError role="alert">{authError}</LoginError> : null}

          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? adminLogin.loadingLabel : adminLogin.submitLabel}
          </Button>

          <LoginDemoNote>
            <FiMail aria-hidden="true" size={15} />
            <span>
              {isSupabaseConfigured()
                ? adminLogin.supabaseHint
                : adminLogin.demoHint}
            </span>
          </LoginDemoNote>
        </LoginForm>

        <LoginBackLink to="/">
          <FiArrowLeft aria-hidden="true" size={15} />
          {adminLogin.backToSiteLabel}
        </LoginBackLink>
      </LoginCard>
    </LoginShell>
  )
}

export default Login