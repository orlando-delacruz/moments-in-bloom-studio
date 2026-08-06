import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'

import * as S from './InstagramPreview.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function InstagramPreview({ content, posts }) {
  return (
    <S.InstagramSection>
      <S.InstagramContainer>
        <S.SectionHeader>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <S.SectionEyebrow>{content.eyebrow}</S.SectionEyebrow>
            <S.SectionTitle>{content.title}</S.SectionTitle>
          </motion.div>
        </S.SectionHeader>

        <S.InstagramGrid>
          {posts.map((post, index) => (
            <S.InstagramItem
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <S.InstagramImage src={post.src} alt="Instagram post" loading="lazy" />
              <S.InstagramOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <S.InstagramIcon>
                  <FiInstagram size={32} />
                </S.InstagramIcon>
              </S.InstagramOverlay>
            </S.InstagramItem>
          ))}
        </S.InstagramGrid>
      </S.InstagramContainer>
    </S.InstagramSection>
  )
}

export default InstagramPreview
