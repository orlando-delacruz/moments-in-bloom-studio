import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import {
  InstagramSection,
  InstagramContainer,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  InstagramGrid,
  InstagramItem,
  InstagramImage,
  InstagramOverlay,
  InstagramIcon,
} from './InstagramPreview.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function InstagramPreview({ content, posts }) {
  return (
    <InstagramSection>
      <InstagramContainer>
        <SectionHeader>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
            <SectionTitle>{content.title}</SectionTitle>
          </motion.div>
        </SectionHeader>

        <InstagramGrid>
          {posts.map((post, index) => (
            <InstagramItem
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <InstagramImage src={post.src} alt="Instagram post" loading="lazy" />
              <InstagramOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <InstagramIcon>
                  <FiInstagram size={32} />
                </InstagramIcon>
              </InstagramOverlay>
            </InstagramItem>
          ))}
        </InstagramGrid>
      </InstagramContainer>
    </InstagramSection>
  )
}

export default InstagramPreview
