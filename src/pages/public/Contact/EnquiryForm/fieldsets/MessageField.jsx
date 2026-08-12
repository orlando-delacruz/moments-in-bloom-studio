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
    </S.Fieldset>
  )
}

export default MessageField