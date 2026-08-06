import { FiArrowRight, FiFacebook, FiInstagram } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import {
  footerContact,
  footerNavigationGroups,
  footerSocialLinks,
  routeMetadata,
} from '../../constants/navigation.js'
import Button from '../Button/index.js'
import {
  FooterBottom,
  FooterBrand,
  FooterContact,
  FooterContainer,
  FooterCta,
  FooterCtaCopy,
  FooterCtaEyebrow,
  FooterCtaTitle,
  FooterDescription,
  FooterGrid,
  FooterLink,
  FooterLinkGroup,
  FooterLinkHeading,
  FooterLinkList,
  FooterLinks,
  FooterShell,
  FooterSocials,
  FooterWatermark,
} from './Footer.styles.js'

const socialIcons = {
  Instagram: FiInstagram,
  Facebook: FiFacebook,
}

function Footer() {
  return (
    <FooterShell>
      <FooterContainer>
        <FooterGrid>
          <div>
            <FooterBrand>{routeMetadata.public.title}</FooterBrand>
            <FooterDescription>
              Thoughtful floral design and considered event styling for life&apos;s most beautiful gatherings.
            </FooterDescription>
            <FooterCta aria-labelledby="footer-enquiry-title">
              <FooterCtaEyebrow>Let&apos;s create something beautiful</FooterCtaEyebrow>
              <FooterCtaTitle id="footer-enquiry-title">Planning a celebration?</FooterCtaTitle>
              <FooterCtaCopy>
                Share your vision with us and we&apos;ll help shape an unforgettable event in full bloom.
              </FooterCtaCopy>
              <Button as={NavLink} to="/contact">
                Start an enquiry
                <FiArrowRight aria-hidden="true" color="currentColor" size={17} />
              </Button>
            </FooterCta>
          </div>

          <FooterLinks>
            {footerNavigationGroups.map((group) => (
              <FooterLinkGroup key={group.title}>
                <FooterLinkHeading>{group.title}</FooterLinkHeading>
                <FooterLinkList>
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <NavLink to={link.path}>
                        <FooterLink>{link.label}</FooterLink>
                      </NavLink>
                    </li>
                  ))}
                </FooterLinkList>
              </FooterLinkGroup>
            ))}
            <FooterLinkGroup>
              <FooterLinkHeading>Contact</FooterLinkHeading>
              <FooterContact>
                <span>{footerContact.location}</span>
                <a href={`mailto:${footerContact.email}`}>{footerContact.email}</a>
                <a href={`tel:${footerContact.phone.replaceAll(' ', '')}`}>{footerContact.phone}</a>
                <FooterSocials aria-label="Social links">
                  {footerSocialLinks.map((social) => {
                    const Icon = socialIcons[social.label]
                    return (
                      <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                        <Icon aria-hidden="true" color="currentColor" size={16} />
                        {social.label}
                      </a>
                    )
                  })}
                </FooterSocials>
              </FooterContact>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterGrid>

        <FooterBottom>
          <span>© {new Date().getFullYear()} Moments in Blooms</span>
          <span>Made for beautiful moments</span>
          <FooterWatermark aria-hidden="true">MOMENTS IN BLOOMS</FooterWatermark>
        </FooterBottom>
      </FooterContainer>
    </FooterShell>
  )
}

export default Footer
