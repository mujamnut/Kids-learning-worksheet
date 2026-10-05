export interface ProblemItem {
  id: string;
  emoji: string;
  text: string;
  description: string;
}

export interface InsideCategory {
  id: string;
  title: string;
  iconName: string;
  color: string;
  description: string;
  tags: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  badgeColor: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  colorClass: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
