import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  role?: string;
  period?: string;
}

export interface Skill {
  name: string;
  icon: string; 
  level: number; // 0-100
  category?: 'research' | 'tech' | 'teaching';
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface Publication {
  id: string;
  title: string;
  citation: string;
  year: string;
  type: 'Journal Article' | 'Book Chapter' | 'Presentation' | 'Work in Progress';
  link?: string;
}