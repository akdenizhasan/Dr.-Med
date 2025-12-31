
import React from 'react';
import { Project, Skill, TimelineItem, Publication, Collaborator } from './types.ts';
import { Github, Twitter, Linkedin, Mail, Globe, BookOpen, GraduationCap, BookText } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Hasan Akdeniz, Ph.D.",
  role: "Researcher & Educator",
  tagline: "Innovating Education through Technology, Research, and AI.",
  bio: "I am a dedicated Researcher and Educator with a double Ph.D. in Educational Technology and Curriculum & Instruction. My work focuses on gifted education, the integration of AI in classrooms, and developing innovative curriculum frameworks. I bridge the gap between theoretical research and practical application to empower teachers and students.",
  email: "hasanakdeniz.gazi@gmail.com",
  secondaryEmail: "hasan.akdeniz@meb.gov.tr",
  location: "Ankara, Turkey",
  website: "https://sites.google.com/view/eduresearchlab?usp=sharing"
};

export const SOCIALS = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/hasan-akdeniz-a71ab453/", icon: <Linkedin className="w-5 h-5" /> },
  { platform: "ResearchGate", url: "https://www.researchgate.net/profile/Hasan-Akdeniz", icon: <BookText className="w-5 h-5" /> },
  { platform: "Twitter", url: "https://twitter.com/H_Akdenzz", icon: <Twitter className="w-5 h-5" /> },
  { platform: "Research Lab", url: "https://sites.google.com/view/eduresearchlab?usp=sharing", icon: <Globe className="w-5 h-5" /> },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: <Mail className="w-5 h-5" /> },
];

export const RESEARCH_FOCUS = [
  "Artificial Intelligence in Education",
  "Gifted & Talented Education",
  "Twice-Exceptionality",
  "STEM & Computational Thinking",
  "Creativity & Problem Solving",
  "Curriculum Development",
  "Mixed Methods Research",
  "Teacher Professional Development"
];

export const SKILLS: Skill[] = [
  { name: "MAXQDA", icon: "data", level: 95, category: 'research' },
  { name: "SPSS & Quantitative Analysis", icon: "stats", level: 90, category: 'research' },
  { name: "Mixed Methods Research", icon: "mix", level: 95, category: 'research' },
  { name: "Action Research", icon: "search", level: 90, category: 'research' },
  { name: "Generative AI for Educators", icon: "ai", level: 90, category: 'tech' },
  { name: "Curriculum Development", icon: "book", level: 100, category: 'teaching' },
  { name: "Gifted Education", icon: "gifted", level: 100, category: 'teaching' },
  { name: "Program Evaluation", icon: "eval", level: 85, category: 'research' },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: "exp1",
    title: "Biology Teacher & Researcher",
    organization: "Prof. Dr. Aziz Sancar Science and Art Center",
    period: "2024 - Present",
    location: "Ankara, Turkey",
    description: "Conducting research and teaching biology to gifted students in a specialized science and art center environment."
  },
  {
    id: "exp2",
    title: "Post-Doctoral Researcher",
    organization: "Western Kentucky University",
    period: "2022 - 2024",
    location: "Bowling Green, KY, USA",
    description: "Supervisor: Dr. Julia Link Roberts. Focused on gifted education, twice-exceptionality, and logic models for program evaluation."
  },
  {
    id: "exp3",
    title: "Curriculum Director & Coordinator",
    organization: "Ministry of National Education (Gifted Education Dept)",
    period: "2016 - 2022",
    location: "Ankara, Turkey",
    description: "Managed curriculum development frameworks and teacher coordination for gifted education programs across the nation."
  },
  {
    id: "exp4",
    title: "Biology Teacher",
    organization: "Ministry of National Education",
    period: "2009 - 2022",
    location: "Ankara, Turkey",
    description: "Implemented innovative teaching strategies including biomarkers and computational thinking in biology classrooms."
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: "edu1",
    title: "Ph.D. in Educational Technology",
    organization: "Gazi University",
    period: "2021",
    location: "Ankara, Turkey",
    description: "Dissertation: Creative problem-solving studies in the science and art center."
  },
  {
    id: "edu2",
    title: "Ph.D. in Curriculum and Instruction",
    organization: "Gazi University",
    period: "2020",
    location: "Ankara, Turkey",
    description: "Dissertation: Action research about the development of habits of mind that gifted students use while learning biology."
  },
  {
    id: "edu3",
    title: "M.A. in Curriculum Development",
    organization: "Gazi University",
    period: "2014",
    location: "Ankara, Turkey",
    description: "Thesis: The relationship between secondary school biology courses and students' creativity."
  },
  {
    id: "edu4",
    title: "B.A. Biology Teaching",
    organization: "Marmara University",
    period: "2009",
    location: "Istanbul, Turkey",
    description: ""
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Chatbot for Differentiated Instruction",
    description: "Leading the design of an AI-powered chatbot to assist K-12 teachers in implementing differentiated instruction tailored to student needs (gifted, twice-exceptional).",
    tags: ["AI", "EdTech", "K-12", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    period: "2025 - Present",
    role: "Lead Researcher"
  },
  {
    id: "2",
    title: "Empowering Immigrant Entrepreneurship",
    description: "Worked with The International Center to provide resources, mentorship, and training to immigrant entrepreneurs in Bowling Green, KY.",
    tags: ["Social Impact", "Entrepreneurship", "Mentorship"],
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    period: "2023 - 2024",
    role: "Learning Specialist"
  },
  {
    id: "3",
    title: "Project SER (Social Emotional Learning)",
    description: "Developed an intervention program and comprehensive curriculum to enhance educational technology in collaboration with NASH and WKU.",
    tags: ["SEL", "Curriculum", "EdTech"],
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    period: "2022 - 2023",
    role: "Co-Investigator"
  },
  {
    id: "4",
    title: "Early Indicators of Twice-Exceptionality",
    description: "Investigated indicators of twice-exceptionality in preschool-aged students from parental perspectives using grounded theory.",
    tags: ["Research", "Gifted Education", "Qualitative"],
    imageUrl: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=800",
    period: "2022 - 2024",
    role: "Researcher"
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub1",
    title: "The impact of emotional intelligence on gifted and talented students' creative problem-solving performance",
    citation: "Akdeniz, H. (2025). Gifted Education International. 10.1177/02614294251379619",
    year: "2025",
    type: "Journal Article",
    link: "https://doi.org/10.1177/02614294251379619"
  },
  {
    id: "pub2",
    title: "Can AI Generate Questions Aligned with Bloom's Taxonomy? A Framework for Gifted Education to Support Teachers",
    citation: "Akdeniz, H., Clark, T., & Roberts, J. (2025). Journal of Advanced Academics.",
    year: "2025",
    type: "Journal Article",
    link: "https://doi.org/10.1177/1932202X251349917"
  },
  {
    id: "pub3",
    title: "Impacts of a Residential STEM Program on Increasing Interest in Computer Science Careers for Gifted Female Students",
    citation: "Clark, T., Akdeniz, H., Roberts, J. & Breedlove, L. (2024). Gifted Education International.",
    year: "2024",
    type: "Journal Article",
    link: "https://doi.org/10.1177/02614294241268310"
  },
  {
    id: "pub4",
    title: "Fostering Innovation in Gifted Education",
    citation: "Akdeniz, H. (2024). WorldTalentWeb Newsletter, Issue 33, pp. 3-5.",
    year: "2024",
    type: "Journal Article",
    link: "https://wgc.ae/newsletter/prevNewsletter"
  },
  {
    id: "pub5",
    title: "Exploring curriculum development for gifted education in Türkiye",
    citation: "Akdeniz, H. (2024). Multi Colors: An International Journal of Educational Research and Theory, 3(1).",
    year: "2024",
    type: "Journal Article",
    link: "https://en.gordon.ac.il/Uploads/media/Files/1-Curriculum%20(Hasan)%20(1).pdf"
  },
  {
    id: "pub6",
    title: "A Systematic review of the factors affecting twice-exceptional individuals' social and emotional development",
    citation: "Duyar, S., Ozkaya, C. & Akdeniz, H. (2023). Gifted and Talented International, 38(2), 177–189.",
    year: "2023",
    type: "Journal Article",
    link: "https://doi.org/10.1080/15332276.2023.2245861"
  },
  {
    id: "pub7",
    title: "The Examination of emotional intelligence in gifted and talented students",
    citation: "Akdeniz, H. & G. Alpan (2022). Journal of National Education, 235, 1901-1916.",
    year: "2022",
    type: "Journal Article"
  },
  {
    id: "pub8",
    title: "Teaching Computational Thinking Skills with an Interdisciplinary Approach",
    citation: "Akdeniz, H. (2020). The Ministry of National Education. ISBN: 978-975-11-5329-6",
    year: "2020",
    type: "Book Chapter"
  },
  {
    id: "pub9",
    title: "In-Class Educational Arrangements for Gifted Students",
    citation: "Akdeniz, H. (2020). In A. Ataman, E. Özmen (Edits), Learning Difficulties and Special Ability.",
    year: "2020",
    type: "Book Chapter"
  },
  {
    id: "pub10",
    title: "Early Indicators of Twice-Exceptionality: Perspectives of Parents",
    citation: "Akdeniz, H, Roberts, J., Clark, T. (under review). Exceptional Children.",
    year: "2025",
    type: "Work in Progress"
  }
];

export const COLLABORATORS: Collaborator[] = [
  {
    id: "col1",
    name: "Dr. Julia Link Roberts",
    role: "Distinguished Professor",
    institution: "Western Kentucky University",
    collaborationType: "Supervisor & Co-Author"
  },
  {
    id: "col2",
    name: "Dr. Tyler Clark",
    role: "Researcher",
    institution: "Western Kentucky University",
    collaborationType: "Co-Author"
  },
  {
    id: "col3",
    name: "Dr. Lynette Breedlove",
    role: "Director",
    institution: "The Gatton Academy",
    collaborationType: "Co-Author"
  },
  {
    id: "col4",
    name: "Dr. Saide Nur Duyar",
    role: "Assistant Professor",
    institution: "University",
    collaborationType: "Co-Author"
  },
  {
    id: "col5",
    name: "Dr. Canan Ozkaya",
    role: "Associate Professor",
    institution: "University",
    collaborationType: "Co-Author"
  },
  {
    id: "inst1",
    name: "The Center for Gifted Studies",
    role: "Institutional Partner",
    institution: "Western Kentucky University",
    collaborationType: "Research Network"
  },
  {
    id: "inst2",
    name: "The Mahurin Honors College",
    role: "Academic Partner",
    institution: "Western Kentucky University",
    collaborationType: "Education Network"
  },
  {
    id: "inst3",
    name: "Hong Kong Academy for Gifted Education",
    role: "International Partner",
    institution: "HKAGE",
    collaborationType: "International Network"
  },
  {
    id: "inst4",
    name: "Ministry of National Education",
    role: "National Authority",
    institution: "Republic of Türkiye",
    collaborationType: "Institutional Network"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s professional portfolio.
Your goal is to answer visitor questions about Dr. Akdeniz's research, academic background, and projects.

Context:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}
- Bio: ${PERSONAL_INFO.bio}
- Education: Double Ph.D. in Educational Technology (2021) and Curriculum & Instruction (2020) from Gazi University.
- Experience: Currently a Biology Teacher & Researcher. Former Post-Doc at Western Kentucky University. Extensive experience with the Ministry of National Education.
- Research Interests: AI in Education, Gifted Education, Twice-Exceptionality, STEM.
- Key Skills: MAXQDA, SPSS, Mixed Methods Research, AI in Education, Gifted Education, Program Evaluation.
- Key Projects: AI Chatbot for Teachers, Immigrant Entrepreneurship, Project SER, Twice-Exceptionality Research.
- Publications: Has numerous peer-reviewed publications in journals like High Ability Studies, Gifted Education International, Journal of Advanced Academics, and book chapters on Computational Thinking and Gifted Education.
- Contact: ${PERSONAL_INFO.email}
- Network: Collaborated with experts like Dr. Julia Link Roberts, Dr. Tyler Clark, and Dr. Lynette Breedlove.
- Key Institutional Partners: The Center for Gifted Studies (WKU), The Mahurin Honors College, HKAGE, Ministry of National Education (Türkiye).

Guidelines:
1. Answer in a professional, academic, yet accessible tone.
2. Focus on his research contributions, teaching philosophy, and expertise in AI/EdTech.
3. If asked about contact, provide his email: ${PERSONAL_INFO.email}.
4. Keep answers concise.
`;
