import { useState } from 'react'
import { FiImage } from 'react-icons/fi'
import { FieldRow, TextField } from '../../FormField/index.js'
import { ImageFields, ImagePickerGrid, PreviewFrame } from './ImagePicker.styles.js'

function ImagePicker({
  label,
  value,
  onChange,
  alt,
  onAltChange,
  credit,
  onCreditChange,
  hint,
}) {
  const [imageError, setImageError] = useState(false)
  const hasImage = Boolean(value)

  const handleUrlChange = (nextUrl) => {
    setImageError(false)
    onChange?.(nextUrl)
  }

  return (
    <ImagePickerGrid>
      <PreviewFrame>
        {hasImage && !imageError ? (
          <img
            src={value}
            alt={alt ?? ''}
            onError={() => setImageError(true)}
          />
        ) : (
          <FiImage aria-hidden="true" size={28} />
        )}
      </PreviewFrame>
      <ImageFields>
        <TextField
          label={label ?? 'Image URL'}
          type="url"
          value={value ?? ''}
          onChange={handleUrlChange}
          hint={hint}
        />
        {onAltChange ? (
          <FieldRow>
            <TextField
              label="Alt text"
              value={alt ?? ''}
              onChange={(event) => onAltChange(event.target.value)}
              hint="Describes the image for accessibility and SEO."
            />
            {onCreditChange ? (
              <TextField
                label="Credit"
                value={credit ?? ''}
                onChange={(event) => onCreditChange(event.target.value)}
              />
            ) : null}
          </FieldRow>
        ) : null}
      </ImageFields>
    </ImagePickerGrid>
  )
}

export default ImagePicker