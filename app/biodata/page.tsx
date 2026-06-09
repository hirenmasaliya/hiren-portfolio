'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Image from 'next/image';

const MarriageBiodata = () => {
  // 🛑 EDIT YOUR DATE OF BIRTH HERE (Format: YYYY-MM-DD)
  const USER_DOB = '2003-11-14';

  const [age, setAge] = useState<number>(0);
  const [formattedDob, setFormattedDob] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const birthDate = new Date(USER_DOB);
    const today = new Date();
    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }

    setAge(currentAge);
    setFormattedDob(birthDate.toLocaleDateString('en-GB', {
      day: '2-digit', month: 'long', year: 'numeric'
    }));
  }, [USER_DOB]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // High-end cinematic easing function for staggered entrance
  const fadeUpClass = (delayClass: string) =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.96]'
    } ${delayClass}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 8s ease infinite; }
        
        /* Strict Print Layout Controls - Zero Margin for Edge-to-Edge Color */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0; 
          }
          body {
            background-color: #fcfbf9 !important; /* Subtle premium cream background for print */
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
            padding: 0;
          }
          ::-webkit-scrollbar {
            display: none;
          }
        }
      `}} />

      {/* ========================================================= */}
      {/* 1. ORIGINAL WEB UI (Hides completely during print)        */}
      {/* ========================================================= */}
      <div className="min-h-screen bg-[#fcfbf9] text-stone-800 font-sans antialiased selection:bg-rose-500/20 overflow-hidden relative print:hidden">

        {/* --- DYNAMIC GRADIENT AMBIENT BACKGROUND --- */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-rose-200/30 to-fuchsia-200/30 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-amber-200/30 to-orange-200/30 blur-[140px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>

        {/* Floating Action Header */}
        <header className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex justify-end relative z-10 transition-opacity duration-1000 delay-150 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handlePrint}
            className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-stone-900 to-stone-800 hover:from-rose-900 hover:to-stone-900 text-white rounded-full shadow-lg transition-all duration-500 overflow-hidden"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide relative z-10">Download / Print Biodata</span>
          </button>
        </header>

        {/* MAIN WEB WRAPPER */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24 relative z-10">
          
          <div className="w-full flex items-center justify-center mb-12 sm:mb-16 mt-2 relative">
            {/* Subtle backlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-50/50 to-transparent blur-xl"></div>
            
            <div className="relative flex items-center gap-4 sm:gap-6">
              {/* Left fading line */}
              <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-rose-300/80"></div>
              
              {/* Typography */}
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.5em] sm:tracking-[0.6em] text-rose-900/80 uppercase font-serif text-center whitespace-nowrap">
                <span className="text-rose-400/60 mr-2">||</span>
                Shree Ganeshay Namah
                <span className="text-rose-400/60 ml-2">||</span>
              </p>
              
              {/* Right fading line */}
              <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-rose-300/80"></div>
            </div>
          </div>

          {/* Web: HERO / PROFILE SECTION */}
          <div className={`relative flex flex-col items-center text-center mb-20 sm:mb-32 ${fadeUpClass('delay-200')}`}>
            
            {/* Premium Profile Image with Halo */}
            <div className="relative mb-12 group">
              {/* Outer slow-rotating decorative ring */}
              <div className="absolute -inset-6 border-[1px] border-dashed border-rose-300/60 rounded-t-full rounded-b-[3rem] animate-[spin_20s_linear_infinite] group-hover:border-rose-400 transition-colors duration-700"></div>
              
              {/* Inner glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-rose-300 via-amber-200 to-transparent rounded-t-full rounded-b-[2.5rem] opacity-70 blur-[3px] group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Actual Image */}
              <div className="relative w-48 h-64 sm:w-[280px] sm:h-[340px] rounded-t-full rounded-b-[2rem] overflow-hidden border-[5px] border-white shadow-2xl bg-stone-100 z-10">
                <Image 
                  src="/images/hiro.png" 
                  alt="Hiren Masaliya" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-stone-800 via-rose-800 to-stone-800 animate-gradient-x drop-shadow-sm">
              Hiren Masaliya
            </h1>
            
            {/* Typographical Quote */}
            <div className="relative inline-block max-w-xl mx-auto py-2 px-4 mt-2">
              <span className="absolute -top-8 -left-6 sm:-left-10 text-6xl sm:text-7xl text-rose-200/60 font-serif select-none pointer-events-none leading-none">
                &ldquo;
              </span>
              <p className="text-stone-600 text-[15px] sm:text-[18px] leading-relaxed italic font-serif relative z-10 text-center">
                Blending a modern, ambitious mindset with a profound respect for family and tradition. Seeking a grounded, supportive partner to build a life of shared goals and lasting happiness.
              </p>
              <span className="absolute -bottom-10 -right-4 sm:-right-8 text-6xl sm:text-7xl text-rose-200/60 font-serif select-none pointer-events-none leading-none">
                &rdquo;
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-14">
              <Badge text="M.Sc IT" />
              <Badge text="Software Developer" />
              <Badge text="Jetpur, Gujarat" />
            </div>
          </div>

          {/* Web: PERSONAL DETAILS */}
          <SectionDivider delay="delay-300" title="Personal Profile" />
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-28 ${fadeUpClass('delay-[400ms]')}`}>
            <EditorialCard>
              <DetailRow label="Full Name" value="Hiren Masaliya" />
              <DetailRow label="Date of Birth" value={formattedDob || "[Loading...]"} />
              <DetailRow label="Age" value={age > 0 ? `${age} Years` : "[Loading...]"} />
              <DetailRow label="Height" value="5 ft 8 in" />
            </EditorialCard>
            <EditorialCard>
              <DetailRow label="Blood Group" value="B+" />
              <DetailRow label="Religion" value="Hindu" />
              <DetailRow label="Caste" value="Prajapati, Kumbhar" />
              <DetailRow label="Native Place" value="Jetpur, Gujarat" />
            </EditorialCard>
          </div>

          {/* Web: EDUCATION & CAREER */}
          <SectionDivider delay="delay-[500ms]" title="Education & Professional Details" />
          <div className={`mb-16 sm:mb-28 ${fadeUpClass('delay-[600ms]')}`}>
            <EditorialCard className="md:w-[85%] lg:w-[75%] mx-auto">
              <DetailRow label="Master&apos;s Degree" value="M.Sc IT" subValue="Specialization in Mobile Application & UI Design" />
              <DetailRow label="Bachelor&apos;s Degree" value="B.Com CS" subValue="Saurashtra University" />
              <DetailRow label="Profession" value="Software Developer" subValue="Freelance / Independent Consultant" />
              <DetailRow label="Work Location" value="Jetpur, Gujarat (Remote)" />
            </EditorialCard>
          </div>

          {/* Web: FAMILY DETAILS */}
          <SectionDivider delay="delay-[700ms]" title="Family Background" />
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-28 ${fadeUpClass('delay-[800ms]')}`}>
            <EditorialCard title="Immediate Family">
              <DetailRow label="Father&apos;s Name" value="Dipakbhai Morrajibhai Masaliya" subValue="Business: J K Creation - Bandhani Dress Material" />
              <DetailRow label="Mother&apos;s Name" value="Nishaben Dipakbhai Masaliya" subValue="Homemaker" />
              <DetailRow label="Siblings" value="1 Sister (Unmarried)" />
            </EditorialCard>

            <EditorialCard title="Maternal Details (Mosal)">
              <DetailRow label="Maternal Grandfather" value="Kantibhai Maganbhai Machchhoya" />
              <DetailRow label="Maternal Uncle" value="Sandipbhai Kantibhai Machchhoya" />
              <DetailRow label="Mosal Location" value="Rajkot, Gujarat" />
            </EditorialCard>
          </div>

          {/* Web: PREMIUM CONTACT SECTION */}
          <div className={`mt-10 sm:mt-20 ${fadeUpClass('delay-[900ms]')}`}>
            <div className="relative overflow-hidden bg-white/60 backdrop-blur-2xl border border-stone-200/60 rounded-[2.5rem] p-8 sm:p-16 shadow-[0_8px_40px_rgba(0,0,0,0.04)] text-center">
              
              {/* Internal Glow Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-[11px] font-bold tracking-[0.25em] text-rose-500 uppercase mb-3">
                  Get In Touch
                </p>
                <h2 className="text-3xl sm:text-5xl font-serif text-stone-800 mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-12">
                  We look forward to speaking with you and your family. Please feel free to reach out via phone or WhatsApp.
                </p>

                {/* Contact Grid inside the banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                  
                  {/* Phone Block */}
                  <div className="flex items-center gap-5 bg-white/80 border border-stone-100 p-5 rounded-2xl hover:shadow-lg hover:border-rose-200 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Father&apos;s Contact</p>
                      <p className="text-stone-800 font-semibold text-[15px] sm:text-[17px]">+91 98247 27409</p>
                    </div>
                  </div>

                  {/* Location/WhatsApp Block */}
                  <div className="flex items-center gap-5 bg-white/80 border border-stone-100 p-5 rounded-2xl hover:shadow-lg hover:border-amber-200 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Residence</p>
                      <p className="text-stone-800 font-semibold text-[15px] sm:text-[17px]">Jetpur, Gujarat</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </main>
      </div>


      <div className="hidden print:block w-full min-h-[297mm] bg-[#fcfbf9] text-stone-900 font-sans mx-auto overflow-hidden relative border-[12px] border-white shadow-inner">

        {/* Subtle Print Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-100/30 via-rose-50/10 to-transparent rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/20 via-stone-100/10 to-transparent rounded-tr-full pointer-events-none"></div>

        <div className="px-12 py-10 relative z-10 h-full flex flex-col">

          {/* Top Spiritual Banner */}
          <div className="w-full text-center mb-8">
            <p className="text-[10px] font-bold tracking-[0.5em] text-rose-800/70 uppercase font-serif">
              || Shree Ganeshay Namah ||
            </p>
          </div>

          {/* Header Section: Text Left, Arched Image Right */}
          <div className="flex justify-between items-center border-b border-stone-200 pb-8 mb-8">

            {/* Left Header Info */}
            <div className="flex-1 pr-12">
              <p className="text-[10px] font-bold tracking-[0.35em] text-stone-400 uppercase mb-3">
                Biodata For Marriage
              </p>
              <h1 className="text-6xl font-serif text-stone-900 leading-none tracking-tight mb-5">
                Hiren Masaliya
              </h1>
              <p className="text-stone-600 font-serif italic text-[13px] max-w-[400px] leading-relaxed border-l-[3px] border-rose-200/70 pl-5">
                A balanced individual with a modern professional outlook and strong family values. Respectful, ambitious, and looking for a compatible life partner.
              </p>
            </div>

            {/* Right Header Image */}
            <div className="relative w-[150px] h-[210px] rounded-t-full rounded-b-[2rem] overflow-hidden border-[5px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-stone-100 shrink-0">
              <div className="absolute inset-0 border border-stone-200/50 rounded-t-full rounded-b-[2rem] z-20 pointer-events-none"></div>
              <Image
                src="/images/hiro.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10">

            {/* LEFT COLUMN */}
            <div className="space-y-8">

              {/* Personal Details */}
              <div>
                <h2 className="text-[13px] font-bold text-rose-900/80 mb-4 flex items-center gap-3 uppercase tracking-[0.2em]">
                  <span className="w-6 h-[1px] bg-rose-300"></span>
                  Personal Details
                </h2>
                <div className="space-y-1">
                  <PrintRow label="Date of Birth" value={formattedDob || USER_DOB} />
                  <PrintRow label="Age" value={age > 0 ? `${age} Years` : ''} />
                  <PrintRow label="Height" value="5 ft 8 in" />
                  <PrintRow label="Religion" value="Hindu" />
                  <PrintRow label="Caste" value="Prajapati, Kumbhar" />
                  <PrintRow label="Blood Group" value="B+" />
                  <PrintRow label="Native Place" value="Jetpur, Gujarat" />
                </div>
              </div>

              {/* Education & Career */}
              <div>
                <h2 className="text-[13px] font-bold text-rose-900/80 mb-4 flex items-center gap-3 uppercase tracking-[0.2em]">
                  <span className="w-6 h-[1px] bg-rose-300"></span>
                  Education & Career
                </h2>
                <div className="space-y-1">
                  <PrintRow label="Master's" value="M.Sc IT" subValue="Mobile Application & UI Design" />
                  <PrintRow label="Bachelor's" value="B.Com CS" subValue="Saurashtra University" />
                  <PrintRow label="Profession" value="Software Developer" subValue="Freelance Consultant" />
                  <PrintRow label="Location" value="Jetpur, Gujarat (Remote)" />
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">

              {/* Family Background */}
              <div>
                <h2 className="text-[13px] font-bold text-amber-900/80 mb-4 flex items-center gap-3 uppercase tracking-[0.2em]">
                  <span className="w-6 h-[1px] bg-amber-400"></span>
                  Family Background
                </h2>
                <div className="space-y-1">
                  <PrintRow label="Father" value="Dipakbhai Morrajibhai Masaliya" subValue="Business: J K Creation" />
                  <PrintRow label="Mother" value="Nishaben Dipakbhai Masaliya" subValue="Homemaker" />
                  <PrintRow label="Siblings" value="1 Sister (Unmarried)" />
                  <div className="pt-2 pb-1">
                    <div className="w-full h-px bg-gradient-to-r from-stone-200 via-stone-300 to-transparent"></div>
                  </div>
                  <PrintRow label="Maternal Grandpa" value="Kantibhai Maganbhai Machchhoya" subValue="Rajkot, Gujarat" />
                  <PrintRow label="Maternal Uncle" value="Sandipbhai Kantibhai Machchhoya" />
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-[13px] font-bold text-amber-900/80 mb-4 flex items-center gap-3 uppercase tracking-[0.2em]">
                  <span className="w-6 h-[1px] bg-amber-400"></span>
                  Contact Info
                </h2>
                <div className="space-y-1 bg-white p-5 rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                  <PrintRow label="Address" value="Jetpur, Gujarat" />
                  <PrintRow label="Father's Contact" value="+91 98247 27409" />
                  <PrintRow label="Email" value="hirenmasaliya@gmail.com" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

/* --- PREMIUM REUSABLE COMPONENTS (For Web UI Only) --- */
const SectionDivider = ({ title, delay }: { title: string, delay: string }) => (
  <div className={`flex items-center justify-center gap-4 sm:gap-8 mb-12 sm:mb-16 ${delay} transition-all duration-[1500ms]`}>
    <div className="h-[2px] w-16 sm:w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
    <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-stone-400 font-sans text-center">{title}</span>
    <div className="h-[2px] w-16 sm:w-32 bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full cursor-default transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1">

    {/* Base Background, Border & Soft Shadow */}
    <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-full border border-rose-100/60 shadow-[0_4px_12px_rgba(225,29,72,0.03)] group-hover:shadow-[0_8px_25px_rgba(225,29,72,0.12)] group-hover:border-rose-200 transition-all duration-500 print:hidden"></div>

    {/* Inner Hover Gradient */}
    <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-rose-50/80 to-amber-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 print:hidden"></div>

    {/* Text */}
    <span className="relative z-10 text-xs sm:text-[13px] text-stone-600 font-semibold tracking-wide group-hover:text-stone-900 transition-colors duration-500 print:text-stone-800 print:font-bold">
      {text}
    </span>

  </span>
);

const EditorialCard = ({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) => {
  return (
    <div className={`relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white via-rose-200/50 to-amber-100/50 shadow-sm h-full group ${className}`}>
      <div className="relative bg-white/80 backdrop-blur-2xl rounded-[calc(2rem-1px)] p-7 sm:p-10 h-full overflow-hidden">
        <div className="relative z-10">
          {title && (
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-amber-400"></span>
              {title}
            </h3>
          )}
          <div className="space-y-1 sm:space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, subValue }: { label: string; value: string; subValue?: string }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-3.5 border-b border-stone-200/50 last:border-0">
    <span className="text-stone-500 font-medium text-[13px] sm:text-[14px] mb-1 sm:mb-0 w-full sm:w-1/3">{label}</span>
    <div className="text-left sm:text-right w-full sm:w-2/3">
      <span className="text-stone-900 font-semibold text-[14px] sm:text-[15px] block">{value}</span>
      {subValue && <span className="block text-[11.5px] sm:text-[13px] text-stone-500 mt-0.5">{subValue}</span>}
    </div>
  </div>
);

/* --- HELPER COMPONENT (For Print UI Only) --- */
const PrintRow = ({ label, value, subValue }: { label: string; value: string; subValue?: string }) => (
  <div className="flex flex-col justify-start">
    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">{label}</span>
    <span className="text-[13px] font-medium text-stone-900">{value}</span>
    {subValue && <span className="text-[11px] text-stone-500 mt-0.5">{subValue}</span>}
  </div>
);

export default MarriageBiodata;