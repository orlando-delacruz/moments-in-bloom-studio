import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TitleReveal from '../../../../components/Reveal/index.js'
import {
  fadeUp,
  popIn,
  softReveal,
  staggerContainer,
  stepIn,
  VIEWPORT_DEFAULT,
} from '../../../../styles/animations.js'
import {
  ProcessContainer,
  ProcessCopy,
  ProcessDescription,
  ProcessEyebrow,
  ProcessHeader,
  ProcessIntro,
  ProcessItem,
  ProcessLabel,
  ProcessList,
  ProcessRoot,
  ProcessStep,
  ProcessStepTitle,
  ProcessTitle,
  ProcessTrack,
} from './Process.styles.js'

function Process({ steps, id = 'home-process' }) {
  const listRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.8', 'end 0.7'],
  })
  const trackScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <ProcessRoot id={id}>
      <ProcessContainer>
        <ProcessHeader>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULT}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProcessEyebrow>From first thought to final flourish</ProcessEyebrow>
          </motion.div>
          <ProcessTitle>
            <TitleReveal>Let&apos;s make it feel easy.</TitleReveal>
          </ProcessTitle>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            <ProcessIntro>
              A clear, considered process keeps the creative part joyful and the practical part beautifully under control.
            </ProcessIntro>
          </motion.div>
        </ProcessHeader>
        <div style={{ position: 'relative' }}>
          <ProcessTrack
            aria-hidden="true"
            style={shouldReduceMotion ? {} : { scaleY: trackScale, x: '-50%' }}
          />
          <ProcessList
            ref={listRef}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {steps.map((step, index) => {
              const side = index % 2 === 0 ? 'left' : 'right'
              return (
                <ProcessItem key={step.step} variants={stepIn(side)}>
                  <ProcessCopy $side={side}>
                    <motion.div variants={softReveal}>
                      <ProcessLabel>{step.step}</ProcessLabel>
                    </motion.div>
                    <ProcessStepTitle>{step.title}</ProcessStepTitle>
                    <ProcessDescription>{step.description}</ProcessDescription>
                  </ProcessCopy>
                  <ProcessStep aria-hidden="true" variants={popIn}>
                    {String(index + 1).padStart(2, '0')}
                  </ProcessStep>
                </ProcessItem>
              )
            })}
          </ProcessList>
        </div>
      </ProcessContainer>
    </ProcessRoot>
  )
}

export default Process
