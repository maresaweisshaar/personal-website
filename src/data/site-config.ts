import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Maresa Weisshaar',
    subtitle: 'Product Owner & Business Analystin · Logistik & Mobility',
    description: 'Freiberufliche Product Owner & Business Analystin für B2B-Software, Schwerpunkt Logistik & Mobility. Requirements Engineering, AI-Use-Cases, Backlog bis Go-Live – agil mit Scrum.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'CV',
            href: '/cv'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'CV',
            href: '/cv'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi, ich bin Maresa.\nProduct Owner & Business Analystin für B2B-Software – Logistik & Mobility',
        tagline: `Ich frage so lange „Warum", bis das echte Problem klar ist.\nUnd mache aus unklaren Anforderungen Produkte, die wirklich gebraucht werden.`,
        text: `Seit 2026 bin ich freiberufliche Product Ownerin, Business Analystin und Requirements Engineer für B2B-Softwareprojekte mit Fokus auf Logistik & Mobility.\n\nIch begleite Produkte von der Discovery bis zum Go-Live: User Research, Requirements Engineering, Backlog-Management, Refinement und Qualitätssicherung – am liebsten agil, mit Scrum/ Kanban und den Tools, die dein Team schon nutzt (Jira, Confluence, Azure DevOps).\n\nAI ist Teil meiner Arbeit. Ich übersetze Geschäftsprozesse in validierte KI-Use-Cases mit messbarem Business Value, von der ersten Idee bis zum Betrieb, mit klarem Blick auf Risiken und Compliance. Statt zu schnell zu entwickeln, validiere ich zuerst das echte Problem und prüfe, ob und wie KI wirklich Nutzen stiftet.`,
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: "Let's talk about your projects",
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
