/**
 * Shared types for Digital Enterprise Group landing page
 */

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  iconName: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface AutomateItem {
  id: string;
  title: string;
  description: string;
}

export interface ReasonItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CertificationItem {
  name: string;
  role: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
}
