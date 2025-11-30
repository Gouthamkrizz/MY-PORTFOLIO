"use client";

import React from 'react';
import { ContactSection } from '@/components/ui/contact';

export default function ContactPage() {
    const customSocialLinks = [
        { id: '1', name: 'GitHub', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg', href: 'https://github.com/Gouthamkrizz' },
        { id: '2', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: '#' },
        { id: '3', name: 'Twitter', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg', href: '#' },
    ];

    const handleFormSubmit = (data: any) => {
        console.log("Form submitted:", data);
        alert("Thank you for your message! I will get back to you soon.");
    };

    return (
        <main>
            <ContactSection
                title="Let's build something amazing together!"
                mainMessage="Get in Touch"
                contactEmail="krishnagoutham058@gmail.com"
                socialLinks={customSocialLinks}
                onSubmit={handleFormSubmit}
                backgroundImageSrc="/assets/project_vision.png" // Using an existing asset as background or placeholder
            />
        </main>
    );
}
