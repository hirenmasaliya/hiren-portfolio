"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ShieldCheck,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Smartphone,
  LockKeyhole,
  Users,
  EyeOff,
  Activity,
  ArrowRight,
  ListChecks,
  Fingerprint,
  UserCheck,
  Vote,
  Server,
  Wifi,
  LayoutDashboard,
  CircleCheck,
} from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function VotingAppProcessArticle() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-28 pb-24 font-sans selection:bg-blue-600 selection:text-white relative">

      {/* Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <article className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="mb-10"
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-14 border-b border-gray-200 pb-10"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">

            <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
              <ListChecks size={14} />
              Product & Engineering
            </span>

            <span className="text-gray-500 text-sm font-bold flex items-center gap-1.5">
              <Clock size={16} />
              10 min read
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            How I Designed and Built a Secure Digital Voting App
          </h1>

          <div className="flex items-center gap-4 mb-8">

            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
              <img
                src="/images/hiro.png"
                alt="Hiren Masaliya"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                Hiren Masaliya
              </p>

              <p className="text-xs text-gray-500 font-medium">
                Software Developer
              </p>
            </div>

          </div>

          <p className="text-xl text-gray-600 font-normal leading-relaxed">
            When I started working on this voting application, my goal was not
            simply to create another voting form. I wanted to understand how
            we could make the voting experience simple for users while keeping
            the complete process secure, private and easy to manage.
          </p>

          <p className="text-xl text-gray-600 font-normal leading-relaxed mt-4">
            The idea was to create a digital voting experience where users can
            verify themselves, view candidates, cast their vote and receive
            confirmation — while organizers can manage the entire election
            from a separate dashboard.
          </p>

        </motion.header>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: smoothEase,
          }}
          className="space-y-16 text-gray-800 text-lg leading-relaxed font-normal"
        >

          {/* INTRO */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              The Problem I Wanted to Solve
            </h2>

            <p>
              The first thing I focused on was the actual user problem.
              Traditional voting processes can involve paper forms, manual
              voter lists, physical verification, manual counting and a lot
              of coordination between organizers and voters.
            </p>

            <p>
              For smaller elections such as housing societies, organizations,
              universities, clubs, companies and associations, this process
              can become time-consuming.
            </p>

            <p>
              So I started thinking about how the complete experience could
              be moved into a simple digital workflow.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">

              <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
                My Goal
              </p>

              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                Verify → View Candidates → Vote → Confirm → Done.
              </p>

            </div>

          </section>

          {/* QUESTIONS */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Questions I Had to Solve
            </h2>

            <p>
              Voting is different from a normal form. A normal form can simply
              save a user's response. A voting application needs to think
              about identity, privacy, duplicate voting, timing and data
              integrity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                "Is this person an eligible voter?",
                "Has this person already voted?",
                "Can the same person vote twice?",
                "Can someone vote on behalf of another person?",
                "Can the organizer modify a submitted vote?",
                "How can the vote remain private?",
                "What happens if the internet connection drops?",
                "When should voting automatically start and stop?",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-3"
                >
                  <CircleCheck
                    size={20}
                    className="text-blue-600 mt-1 shrink-0"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </section>

          {/* STEP 1 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                1
              </span>

              Creating the Election

            </h2>

            <p>
              The process starts from the organizer side. I wanted the
              organizer experience to be straightforward instead of requiring
              technical knowledge.
            </p>

            <p>
              The organizer can create an election and configure the important
              information before voting begins.
            </p>

            <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <LayoutDashboard
                  className="text-blue-600"
                  size={30}
                />

                <h3 className="font-bold text-gray-900 text-xl">
                  Organizer Controls
                </h3>

              </div>

              <ul className="space-y-4">

                {[
                  "Election name",
                  "Candidates and candidate photos",
                  "Eligible voter list",
                  "Registered phone numbers",
                  "Voting start time",
                  "Voting end time",
                  "Election status",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />

                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>

          </section>

          {/* STEP 2 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                2
              </span>

              Designing the Voter Experience

            </h2>

            <p>
              For me, user experience was one of the most important parts of
              this project.
            </p>

            <p>
              Voting should not feel like a complicated application. The user
              should immediately understand what the election is, whether they
              are eligible, who the candidates are and how they can submit
              their vote.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem]">

              <h3 className="font-bold text-gray-900 text-xl mb-6">
                Simple User Flow
              </h3>

              <div className="flex flex-wrap items-center gap-3">

                {[
                  "Open App",
                  "Verify Identity",
                  "Enter Election",
                  "View Candidates",
                  "Select Candidate",
                  "Confirm Vote",
                  "Vote Submitted",
                ].map((item, index) => (
                  <React.Fragment key={item}>

                    <span className="bg-white border border-blue-100 px-4 py-3 rounded-full text-sm font-semibold">
                      {item}
                    </span>

                    {index < 6 && (
                      <ArrowRight
                        size={16}
                        className="text-blue-500"
                      />
                    )}

                  </React.Fragment>
                ))}

              </div>

            </div>

          </section>

          {/* STEP 3 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                3
              </span>

              Verifying the Voter
            </h2>

            <p>
              Security begins before the user reaches the voting screen.
              The system first checks whether the user's phone number exists
              in the approved voter list.
            </p>

            <p>
              If the number is not registered for the election, the user
              cannot continue. If the number is eligible, an OTP can be used
              for verification.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white border border-gray-200 p-7 rounded-2xl shadow-sm">

                <Smartphone
                  className="text-blue-600 mb-4"
                  size={30}
                />

                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  Phone Verification
                </h3>

                <p className="text-gray-600 text-base">
                  The user enters the registered phone number and the system
                  checks whether the number is part of the approved voter
                  list.
                </p>

              </div>

              <div className="bg-white border border-gray-200 p-7 rounded-2xl shadow-sm">

                <UserCheck
                  className="text-blue-600 mb-4"
                  size={30}
                />

                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  OTP Verification
                </h3>

                <p className="text-gray-600 text-base">
                  An OTP can be sent to the registered phone number to add
                  another identity verification step.
                </p>

              </div>

            </div>

          </section>

          {/* STEP 4 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                4
              </span>

              Adding Device-Level Authentication
            </h2>

            <p>
              For an additional layer of protection, the application can use
              device-level biometric authentication such as fingerprint or
              Face ID.
            </p>

            <p>
              The idea is simple: even if somebody gets access to a user's
              phone, the application can require another authentication step
              before allowing the voting action.
            </p>

            <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">

              <div className="flex items-center gap-5">

                <Fingerprint
                  className="text-blue-600 shrink-0"
                  size={42}
                />

                <div>

                  <h3 className="font-bold text-gray-900 text-xl mb-2">
                    Multi-Layer Verification
                  </h3>

                  <p className="text-gray-600">
                    Phone Verification → OTP → Device Authentication →
                    Voting
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* STEP 5 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                5
              </span>

              Keeping the Vote Private
            </h2>

            <p>
              This is one of the most important parts of the application.
            </p>

            <p>
              There is a major difference between knowing that a person has
              voted and knowing which candidate that person selected.
            </p>

            <p>
              The system needs to treat these as separate pieces of
              information. After a successful voting action, the system can
              record that the voter has participated while handling the actual
              candidate selection separately.
            </p>

            <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">

              <div className="space-y-7">

                <div className="flex items-start gap-4">

                  <Users
                    className="text-gray-500 shrink-0"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-gray-900 text-xl mb-2">
                      Participation Status
                    </h3>

                    <p className="text-gray-600">
                      The system needs to know whether the voter has already
                      participated so that another voting attempt can be
                      prevented.
                    </p>

                  </div>

                </div>

                <div className="w-full h-px bg-gray-100" />

                <div className="flex items-start gap-4">

                  <EyeOff
                    className="text-blue-600 shrink-0"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-gray-900 text-xl mb-2">
                      Vote Privacy
                    </h3>

                    <p className="text-gray-600">
                      The voting choice should be handled separately from
                      voter identity wherever the election's privacy model
                      requires a secret ballot.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* STEP 6 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                6
              </span>

              Preventing Double Voting
            </h2>

            <p>
              Another major challenge is preventing duplicate voting.
            </p>

            <p>
              Imagine a user presses the vote button multiple times because
              their internet connection is slow. A normal application might
              accidentally create multiple requests.
            </p>

            <p>
              A voting system needs to handle this carefully. Once a valid
              vote has been successfully recorded, the voter should be marked
              as having voted. Additional requests from the same voter should
              be rejected according to the election rules.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white border border-gray-200 p-6 rounded-2xl">

                <LockKeyhole
                  className="text-blue-600 mb-4"
                  size={28}
                />

                <h3 className="font-bold mb-2">
                  Server Validation
                </h3>

                <p className="text-sm text-gray-600">
                  Important voting rules should be validated on the backend,
                  not only inside the mobile application.
                </p>

              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-2xl">

                <ShieldCheck
                  className="text-blue-600 mb-4"
                  size={28}
                />

                <h3 className="font-bold mb-2">
                  Duplicate Protection
                </h3>

                <p className="text-sm text-gray-600">
                  The system should recognize repeated requests and prevent
                  the same voter from submitting another valid vote.
                </p>

              </div>

            </div>

          </section>

          {/* STEP 7 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                7
              </span>

              Handling Slow Internet
            </h2>

            <p>
              I also considered real-world situations. Not every user will
              have a perfect internet connection.
            </p>

            <p>
              A user might press the button and wait. They might think the
              application did not respond and press it again.
            </p>

            <p>
              Because of this, the UI should provide a clear loading state and
              a clear confirmation after the request is completed.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem]">

              <Wifi
                className="text-blue-600 mb-5"
                size={34}
              />

              <h3 className="text-xl font-bold mb-3">
                Clear User Feedback
              </h3>

              <p className="text-gray-700">
                The user should never be left wondering whether the vote was
                successfully submitted.
              </p>

              <div className="mt-5 bg-white rounded-xl p-5 border border-blue-100 font-semibold">
                "Your vote has been submitted successfully."
              </div>

            </div>

          </section>

          {/* STEP 8 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                8
              </span>

              Automatic Voting Time Control
            </h2>

            <p>
              The organizer should not have to manually monitor the election
              every minute.
            </p>

            <p>
              If an election starts at 9:00 AM, the application can make
              voting available at the configured time. If voting ends at
              5:00 PM, the system can stop accepting votes after the configured
              closing time.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">

              {[
                ["Before Election", "Voting Not Started"],
                ["During Election", "Voting Is Open"],
                ["After Election", "Voting Closed"],
              ].map(([title, text], index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-2xl"
                >

                  <Clock
                    className="text-blue-600 mb-4"
                    size={28}
                  />

                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                    {title}
                  </p>

                  <h3 className="font-bold text-gray-900">
                    {text}
                  </h3>

                </div>

              ))}

            </div>

          </section>

          {/* STEP 9 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                9
              </span>

              Processing the Results
            </h2>

            <p>
              Another important part of the system is vote counting.
            </p>

            <p>
              Instead of manually counting paper ballots, valid voting
              transactions can be processed by the backend according to the
              configured election rules.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6">

              <Server
                className="text-blue-400 shrink-0"
                size={44}
              />

              <div>

                <h3 className="font-bold text-xl mb-2">
                  Backend Processing
                </h3>

                <p className="text-gray-400">
                  Every valid vote is processed by the server and contributes
                  to the appropriate candidate's result.
                </p>

              </div>

            </div>

          </section>

          {/* STEP 10 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                10
              </span>

              Organizer Dashboard
            </h2>

            <p>
              The organizer side is designed differently from the voter
              experience.
            </p>

            <p>
              A voter needs simplicity. An organizer needs control and
              visibility.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                "Total registered voters",
                "Total votes submitted",
                "Remaining voters",
                "Election status",
                "Candidate information",
                "Voting activity",
                "Results",
                "Election start and end time",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 p-5 rounded-2xl flex items-center gap-3"
                >

                  <Activity
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </section>

          {/* STEP 11 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                11
              </span>

              Security Is Not Only About the Mobile App
            </h2>

            <p>
              One important lesson I learned from this project is that
              security cannot depend only on the frontend.
            </p>

            <p>
              The mobile application is only one part of the system. The
              backend needs to independently validate important operations.
            </p>

            <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">

              <div className="space-y-6">

                {[
                  [
                    "Eligibility",
                    "The backend should verify whether the voter is eligible for the election.",
                  ],
                  [
                    "Voting Status",
                    "The backend should verify whether the voter has already participated.",
                  ],
                  [
                    "Election",
                    "The backend should verify that the election is active.",
                  ],
                  [
                    "Candidate",
                    "The backend should validate that the selected candidate belongs to the active election.",
                  ],
                ].map(([title, description], index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <ShieldCheck
                      className="text-blue-600 shrink-0"
                      size={26}
                    />

                    <div>

                      <h3 className="font-bold text-gray-900 mb-1">
                        {title}
                      </h3>

                      <p className="text-gray-600 text-base">
                        {description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* STEP 12 */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">

              <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shrink-0">
                12
              </span>

              Designing for Transparency
            </h2>

            <p>
              A voting application needs to build user confidence.
            </p>

            <p>
              Users should understand what is happening without needing to
              understand the underlying technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                "Identity Verified",
                "You Are Eligible",
                "Voting Is Open",
                "Vote Submitted",
                "You Have Already Voted",
                "Voting Has Closed",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 p-5 rounded-2xl flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-blue-600"
                    size={22}
                  />

                  <span className="font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </section>

          {/* UX */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              My Approach to the User Experience
            </h2>

            <p>
              While building this concept, I focused on reducing friction.
              I wanted the user to feel that the application is simple, fast,
              clear and easy to understand.
            </p>

            <p>
              I avoided unnecessary forms and unnecessary information. The
              voter should not have to understand how the backend works.
              They only need to understand what action they need to take.
            </p>

            <div className="bg-blue-600 text-white p-8 md:p-10 rounded-[2rem] shadow-xl">

              <p className="text-blue-100 uppercase tracking-widest text-xs font-bold mb-4">
                My Design Principle
              </p>

              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">
                Complex systems should provide simple experiences.
              </h3>

            </div>

          </section>

          {/* COMPLETE FLOW */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              The Complete Voting Journey
            </h2>

            <p>
              From the user's perspective, the complete experience can be
              simple and easy to follow.
            </p>

            <div className="space-y-3">

              {[
                "Open the voting application.",
                "Enter the registered phone number.",
                "Verify the OTP.",
                "Complete device authentication if enabled.",
                "See the active election.",
                "Review the candidates.",
                "Select a candidate.",
                "Review the selection.",
                "Confirm the vote.",
                "Receive confirmation.",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4"
                >

                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </span>

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </section>

          {/* LEARNINGS */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              What I Learned From Building This
            </h2>

            <p>
              This project helped me understand that building a voting
              application is not only a UI development task. It requires
              thinking about the complete system.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                ["User Experience", "How can voting be simple for someone who is not technically experienced?"],
                ["Authentication", "How can the system verify that the voter is eligible?"],
                ["Privacy", "How can voter identity and vote selection be handled separately?"],
                ["Backend Security", "How can the server validate important operations?"],
                ["Data Integrity", "How can duplicate or invalid requests be prevented?"],
                ["Reliability", "What happens when the internet connection is unstable?"],
                ["Administration", "How can organizers easily manage elections?"],
                ["Results", "How can voting results be processed and displayed clearly?"],
              ].map(([title, description], index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-2xl"
                >

                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </section>

          {/* USE CASES */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Where I See This Being Useful
            </h2>

            <p>
              The concept can be adapted for different types of controlled
              elections and organizational voting systems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                "Housing society elections",
                "Company internal elections",
                "University or college elections",
                "Club elections",
                "Association elections",
                "Organization elections",
                "Community voting",
                "Internal decision-making systems",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 p-5 rounded-xl flex items-center gap-3"
                >

                  <Vote
                    className="text-blue-600"
                    size={22}
                  />

                  <span className="font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <p className="text-base text-gray-500">
              The exact security, identity verification, privacy,
              accessibility, audit and legal requirements would depend on the
              specific election context.
            </p>

          </section>

          {/* FINAL THOUGHT */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              My Main Goal
            </h2>

            <p>
              The main idea behind this project is simple:
            </p>

            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl">

              <Vote
                className="text-blue-400 mb-6"
                size={42}
              />

              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-5">
                Make voting easier for the user without treating security as
                an afterthought.
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                I wanted to explore how modern mobile technology can create a
                voting experience where the user doesn't need to understand
                the complicated technology happening behind the scenes.
              </p>

            </div>

          </section>

          {/* CONCLUSION */}
          <section className="space-y-6">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Final Thought
            </h2>

            <p>
              For me, this project was not just about building a voting
              screen. It was about designing an entire digital process around
              trust.
            </p>

            <p>
              When a person presses the final vote button, they should
              understand what is happening, know that their vote has been
              submitted, and have confidence that the system is following the
              rules defined for that election.
            </p>

            <p>
              That balance between <strong>simple UX and complex backend
              engineering</strong> is what made this project interesting for
              me.
            </p>

            <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 p-6 rounded-2xl">

              <CircleCheck
                className="text-blue-600 shrink-0"
                size={28}
              />

              <p className="font-bold text-gray-900">
                Simple on the surface. Thoughtful underneath.
              </p>

            </div>

          </section>

        </motion.div>

        {/* CTA */}
        <div className="mt-24 mb-10 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-lg text-center md:text-left">

            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3 block">
              Let's Build It
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Have an idea for a digital platform?
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I enjoy turning real-world problems into simple, reliable and
              user-friendly digital products.
            </p>

          </div>

          <Link
            href="/contact"
            className="relative z-10 w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/20 active:scale-95 text-center shrink-0 flex items-center justify-center gap-2"
          >
            Contact Me
            <ArrowRight size={20} />
          </Link>

        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-[900px] mx-auto text-center border-t border-gray-200 pt-8 mt-12 pb-8">

        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Hiren Masaliya — Software Developer
        </p>

      </footer>

    </main>
  );
}