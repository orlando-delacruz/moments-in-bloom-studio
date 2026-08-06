import { AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import {
  QuoteMark,
  TestimonialArrow,
  TestimonialAvatar,
  TestimonialControls,
  TestimonialDot,
  TestimonialDots,
  TestimonialEvent,
  TestimonialMeta,
  TestimonialName,
  TestimonialQuote,
  TestimonialSlide,
  TestimonialViewport,
  TestimonialsContainer,
  TestimonialsRoot,
  TestimonialEyebrow,
} from './Testimonials.styles.js'

function Testimonials({ items, id = 'home-testimonials' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = items[activeIndex]

  const goTo = (nextIndex) => {
    setActiveIndex((nextIndex + items.length) % items.length)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goTo(activeIndex - 1)
    } else if (e.key === 'ArrowRight') {
      goTo(activeIndex + 1)
    }
  }

  return (
    <TestimonialsRoot id={id} onKeyDown={handleKeyDown} tabIndex={0} aria-label="Client Testimonials Carousel">
      <TestimonialsContainer>
        <TestimonialEyebrow>Kind words from good people</TestimonialEyebrow>
        <QuoteMark aria-hidden="true">“</QuoteMark>
        <TestimonialViewport aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <TestimonialSlide
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialQuote>“{activeTestimonial.quote}”</TestimonialQuote>
              <TestimonialMeta>
                <TestimonialAvatar src={activeTestimonial.image.src} alt={activeTestimonial.image.alt} loading="lazy" />
                <TestimonialName>{activeTestimonial.name}</TestimonialName>
                <TestimonialEvent>
                  {activeTestimonial.event} · {activeTestimonial.location}
                </TestimonialEvent>
              </TestimonialMeta>
            </TestimonialSlide>
          </AnimatePresence>
        </TestimonialViewport>
        <TestimonialControls>
          <TestimonialArrow
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(activeIndex - 1)}
          >
            <FiArrowLeft aria-hidden="true" color="currentColor" size={16} />
          </TestimonialArrow>
          <TestimonialDots aria-label="Testimonial selection">
            {items.map((item, index) => (
              <TestimonialDot
                key={item.name}
                type="button"
                $active={index === activeIndex}
                aria-label={`Show testimonial from ${item.name}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </TestimonialDots>
          <TestimonialArrow
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(activeIndex + 1)}
          >
            <FiArrowRight aria-hidden="true" color="currentColor" size={16} />
          </TestimonialArrow>
        </TestimonialControls>
      </TestimonialsContainer>
    </TestimonialsRoot>
  )
}

export default Testimonials
