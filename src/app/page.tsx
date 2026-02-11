'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
