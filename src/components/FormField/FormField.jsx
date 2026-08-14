import { useId } from 'react'
import {
  ErrorText,
  Field,
  FieldLabel,
  HelpText,
  Input,
  Select,
  Textarea,
} from './FormField.styles.js'

function TextField({
  label,
  hint,
  error,
  id: idProp,
  ...props
}) {
  const autoId = useId()
  const id = idProp || autoId

  return (
    <Field>
      {label ? <FieldLabel htmlFor={id}>{label}</FieldLabel> : null}
      <Input id={id} $error={Boolean(error)} {...props} />
      {error ? <ErrorText>{error}</ErrorText> : null}
      {hint ? <HelpText>{hint}</HelpText> : null}
    </Field>
  )
}

function TextAreaField({
  label,
  hint,
  error,
  rows,
  id: idProp,
  ...props
}) {
  const autoId = useId()
  const id = idProp || autoId

  return (
    <Field>
      {label ? <FieldLabel htmlFor={id}>{label}</FieldLabel> : null}
      <Textarea id={id} rows={rows} $error={Boolean(error)} {...props} />
      {error ? <ErrorText>{error}</ErrorText> : null}
      {hint ? <HelpText>{hint}</HelpText> : null}
    </Field>
  )
}

function SelectField({
  label,
  options = [],
  placeholder,
  hint,
  id: idProp,
  ...props
}) {
  const autoId = useId()
  const id = idProp || autoId

  return (
    <Field>
      {label ? <FieldLabel htmlFor={id}>{label}</FieldLabel> : null}
      <Select id={id} {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => {
          if (typeof option === 'string') {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            )
          }
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </Select>
      {hint ? <HelpText>{hint}</HelpText> : null}
    </Field>
  )
}

export { TextField, TextAreaField, SelectField }