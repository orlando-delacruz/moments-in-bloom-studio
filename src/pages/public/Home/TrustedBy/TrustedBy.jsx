import { motion } from 'framer-motion'
import {
  TrustEyebrow,
  TrustMarks,
  TrustStatement,
  TrustStatementLead,
  TrustedByContainer,
  TrustedByRoot,
} from './TrustedBy.styles.js'

function TrustedBy({ marks, id = 'home-trusted-by' }) {
  return (
    <TrustedByRoot id={id}>
      <TrustedByContainer>
        <TrustEyebrow>Trusted by beautiful celebrations</TrustEyebrow>
        <TrustStatement
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TrustStatementLead>We believe a celebration should feel</TrustStatementLead>{' '}
          as beautiful as the reason you&apos;re gathering.
        </TrustStatement>
        <TrustMarks
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {marks.map((mark) => (
            <motion.li
              key={mark}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.35 }}
            >
              {mark}
            </motion.li>
          ))}
        </TrustMarks>
      </TrustedByContainer>
    </TrustedByRoot>
  )
}

export default TrustedBy
