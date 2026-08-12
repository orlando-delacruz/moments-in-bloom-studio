import { FiAlertCircle } from 'react-icons/fi'
import {
  eventTypeOptions,
  guestCountOptions,
} from '../../../../../constants/contact.js'
import { todayIsoDate } from '../../../../../utils/validation.js'
import * as S from '../EnquiryForm.styles.js'

function EventDetails({ register, errors, titleId }) {
  return (
    <S.Fieldset>
      <legend className="sr-only">Event Details</legend>
      <S.FieldsetHeading id={titleId} tabIndex={-1}>
        <S.FieldsetKicker>Part 02</S.FieldsetKicker>
        <S.FieldsetTitle>Event Details</S.FieldsetTitle>
      </S.FieldsetHeading>

      <S.FieldRow>
        <S.Field>
          <S.FieldLabel htmlFor="contact-event-type">
            Event Type <S.RequiredMark aria-hidden="true">*</S.RequiredMark>
          </S.FieldLabel>
          <S.Select
            id="contact-event-type"
            $error={Boolean(errors.eventType)}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={
              errors.eventType
                ? 'contact-event-type-error'
                : 'contact-event-type-hint'
            }
            {...register('eventType', {
              required: 'Please select the type of event.',
            })}
          >
            <option value="" disabled hidden>
              Select an event type
            </option>
            {eventTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </S.Select>
          <S.HelpText id="contact-event-type-hint">
            For anything else, choose Other and tell us more below.
          </S.HelpText>
          {errors.eventType ? (
            <S.ErrorText id="contact-event-type-error" aria-live="polite">
              <FiAlertCircle aria-hidden="true" size={13} />
              {errors.eventType.message}
            </S.ErrorText>
          ) : null}
        </S.Field>

        <S.Field>
          <S.FieldLabel htmlFor="contact-event-date">Event Date</S.FieldLabel>
          <S.Input
            id="contact-event-date"
            type="date"
            $error={Boolean(errors.eventDate)}
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={
              errors.eventDate
                ? 'contact-event-date-error'
                : 'contact-event-date-hint'
            }
            {...register('eventDate', {
              validate: (value) =>
                !value ||
                value >= todayIsoDate() ||
                'Please choose today or a later date.',
            })}
          />
          <S.HelpText id="contact-event-date-hint">
            This is an enquiry date, not a booking confirmation.
          </S.HelpText>
          {errors.eventDate ? (
            <S.ErrorText id="contact-event-date-error" aria-live="polite">
              <FiAlertCircle aria-hidden="true" size={13} />
              {errors.eventDate.message}
            </S.ErrorText>
          ) : null}
        </S.Field>
      </S.FieldRow>

      <S.FieldRow>
        <S.Field>
          <S.FieldLabel htmlFor="contact-event-location">
            Event Location / Venue
          </S.FieldLabel>
          <S.Input
            id="contact-event-location"
            type="text"
            placeholder="Venue, suburb or city"
            autoComplete="street-address"
            aria-describedby="contact-event-location-hint"
            {...register('eventLocation')}
          />
          <S.HelpText id="contact-event-location-hint">
            Venue, suburb or city — we service Greater Melbourne and beyond.
          </S.HelpText>
        </S.Field>

        <S.Field>
          <S.FieldLabel htmlFor="contact-guest-count">
            Approximate Guest Count
          </S.FieldLabel>
          <S.Select
            id="contact-guest-count"
            aria-describedby="contact-guest-count-hint"
            defaultValue=""
            {...register('guestCount')}
          >
            <option value="" disabled hidden>
              Select a range
            </option>
            {guestCountOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </S.Select>
          <S.HelpText id="contact-guest-count-hint">
            A rough idea helps us understand the scale of your celebration.
          </S.HelpText>
        </S.Field>
      </S.FieldRow>
    </S.Fieldset>
  )
}

export default EventDetails