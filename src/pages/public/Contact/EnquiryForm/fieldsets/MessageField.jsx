import * as S from '../EnquiryForm.styles.js'

function MessageField({ register, titleId }) {
  return (
    <S.Fieldset>
      <legend className="sr-only">Your Event Vision</legend>
      <S.FieldsetHeading id={titleId} tabIndex={-1}>
        <S.FieldsetKicker>Part 05</S.FieldsetKicker>
        <S.FieldsetTitle>Your Event Vision</S.FieldsetTitle>
        <S.FieldsetHint>
          A few sentences is plenty. You might mention what you're celebrating, the
          style you love, decor ideas, photobooth or claw machine preferences, setup
          needs — or anything else you'd like the team to know.
        </S.FieldsetHint>
      </S.FieldsetHeading>

      <S.Field>
        <S.FieldLabel htmlFor="contact-message">
          Tell us a little more about your event
        </S.FieldLabel>
        <S.Textarea
          id="contact-message"
          placeholder="Describe the mood, colours, or details you have in mind…"
          {...register('message')}
        />
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="contact-custom-inquiry">
          Other Custom Inquiries or Requests
        </S.FieldLabel>
        <S.Textarea
          id="contact-custom-inquiry"
          placeholder="Anything else you'd like us to know — no detail is too small."
          aria-describedby="contact-custom-inquiry-hint"
          {...register('customInquiry')}
        />
        <S.HelpText id="contact-custom-inquiry-hint">
          Have something else in mind? Tell us about your request or any additional
          details you&apos;d like us to know. This field is optional.
        </S.HelpText>
      </S.Field>
    </S.Fieldset>
  )
}

export default MessageField