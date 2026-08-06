import { FiArrowUpRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  ServiceBody,
  ServiceCard,
  ServiceDescription,
  ServiceEyebrow,
  ServiceImage,
  ServiceImageFrame,
  ServiceImageLink,
  ServiceLink,
  ServicesContainer,
  ServicesEyebrow,
  ServicesGrid,
  ServicesIntro,
  ServicesIntroCopy,
  ServicesRoot,
  ServicesTitle,
  ServiceTitle,
} from './Services.styles.js'

function Services({ items, id = 'home-services' }) {
  return (
    <ServicesRoot id={id}>
      <ServicesContainer>
        <ServicesIntro>
          <div>
            <ServicesEyebrow>Designed around your day</ServicesEyebrow>
            <ServicesTitle>Details with a point of view.</ServicesTitle>
          </div>
          <div>
            <ServicesIntroCopy>
              From the atmosphere in the room to the little moments guests take home, we style celebrations with warmth, intention and a hint of the unexpected.
            </ServicesIntroCopy>
            <Button as={NavLink} to="/services" variant={BUTTON_VARIANTS.GHOST}>
              Explore our services
              <FiArrowUpRight aria-hidden="true" color="currentColor" size={16} />
            </Button>
          </div>
        </ServicesIntro>
        <ServicesGrid>
          {items.map((service, index) => (
            <ServiceCard
              key={service.id}
              $offset={service.offset}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <ServiceImageLink as={NavLink} to={service.path} aria-label={`Explore ${service.title}`}>
                <ServiceImageFrame>
                  <ServiceImage src={service.image.src} alt={service.image.alt} loading="lazy" />
                </ServiceImageFrame>
              </ServiceImageLink>
              <ServiceBody>
                <ServiceEyebrow>{service.eyebrow}</ServiceEyebrow>
                <NavLink to={service.path}>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </NavLink>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink as={NavLink} to={service.path}>
                  Learn more
                  <FiArrowUpRight aria-hidden="true" color="currentColor" size={14} />
                </ServiceLink>
                <span className="sr-only">{service.image.credit}</span>
              </ServiceBody>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesRoot>
  )
}

export default Services
