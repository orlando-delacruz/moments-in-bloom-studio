import { motion } from "framer-motion";
import styled from "styled-components";

export const CollectionNav = styled.nav`
  width: 100%;
`;

export const CollectionNavList = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    scroll-snap-type: x mandatory;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

export const CollectionItem = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex: 1 1 0;
  min-width: 0;
  padding: 1.15rem 1.5rem;
  background: transparent;
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  text-align: left;
  outline: none;
  scroll-snap-align: start;
  -webkit-tap-highlight-color: transparent;
  transition: background ${({ theme }) => theme.transitions.standard};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? "transparent" : "rgba(165, 137, 116, 0.05)"};
  }

  &:hover [data-arrow] {
    opacity: 1;
    transform: translateX(3px);
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 82%;
    padding: 1rem 1.25rem;
    min-height: ${({ theme }) => theme.controls.tapTarget};
  }
`;

export const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(165, 137, 116, 0.08) 0%,
    rgba(165, 137, 116, 0.02) 100%
  );
  box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;

export const CollectionIndex = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.textSecondary};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.45)};
  transition: all ${({ theme }) => theme.transitions.standard};
`;

export const CollectionTextGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
  flex: 1;
`;

export const CollectionName = styled.span`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 500)};
  line-height: 1.2;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color ${({ theme }) => theme.transitions.standard};
`;

export const CollectionSubBrand = styled.span`
  align-self: flex-start;
  padding: 0.1rem 0.45rem;
  border: 1px solid ${({ theme }) => theme.colors.blush};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.blush};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-transform: uppercase;
  white-space: nowrap;
  transition: color ${({ theme }) => theme.transitions.standard},
    border-color ${({ theme }) => theme.transitions.standard};
`;

export const CollectionDesc = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CollectionMeta = styled.span`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.primaryHover};
  transition: color ${({ theme }) => theme.transitions.standard};
`;

export const CollectionArrow = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.textSecondary};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transform: translateX(0);
  transition: all ${({ theme }) => theme.transitions.standard};

  svg {
    width: 14px;
    height: 14px;
  }
`;
