"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Settings,
    Download,
    Key,
    CheckCircle2,
    Info,
    Terminal,
    Code,
    Smartphone,
    Layers,
    Bell,
    Apple
} from "lucide-react";

export default function FlutterFCMGuidePage() {
    const [activeSection, setActiveSection] = useState("firebase-setup");

    // Intersection observer to highlight the active section in the sidebar
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -60% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: "firebase-setup", label: "1. Firebase & CLI Setup" },
        { id: "ios-apns", label: "2. iOS APNs Configuration" },
        { id: "install-sdk", label: "3. Flutter Packages & Init" },
        { id: "permissions-tokens", label: "4. Permissions & Tokens" },
        { id: "message-states", label: "5. Routing Message States" },
        { id: "local-notifications", label: "6. Foreground Alerts" },
    ];

    return (
        <main className="min-h-screen bg-white text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] pb-32">

            {/* =====================================================
          HEADER SECTION 
      ====================================================== */}
            <header className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#E0E2E0]">
                <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 text-[#444746] hover:text-[#0A56D1] transition-colors font-medium mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Articles
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3 text-sm text-[#747775] font-medium mb-4">
                        <span className="text-[#0A56D1] font-semibold tracking-wide uppercase">Deep Dive Guide</span>
                        <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
                        <span>Nov 15, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
                        <span>12 min read</span>
                    </div>

                    <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
                        The Definitive Guide to FCM in Flutter
                    </h1>

                    <p className="text-xl text-[#444746] leading-relaxed">
                        A comprehensive, end-to-end walkthrough on integrating Firebase Cloud Messaging into your Flutter app. Covering modern FlutterFire CLI setup, native iOS APNs configurations, deep linking, and handling foreground/background payload states.
                    </p>
                </motion.div>
            </header>

            {/* =====================================================
          TWO-COLUMN LAYOUT
      ====================================================== */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col lg:flex-row gap-16 relative">

                {/* LEFT SIDEBAR NAVIGATION */}
                <aside className="hidden lg:block w-[280px] shrink-0">
                    <div className="sticky top-24">
                        <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider mb-6">On this page</h3>
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`px-4 py-2.5 rounded-r-full border-l-4 transition-colors text-sm font-medium ${activeSection === link.id
                                            ? "border-[#0A56D1] bg-[#F0F4F9] text-[#0A56D1]"
                                            : "border-transparent text-[#444746] hover:bg-[#F8F9FA] hover:text-[#1F1F1F]"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* RIGHT CONTENT AREA */}
                <motion.article
                    className="flex-1 max-w-3xl space-y-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >

                    {/* SECTION 1: Firebase Setup */}
                    <section id="firebase-setup" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Settings className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">1. Firebase & CLI Setup</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg leading-relaxed">
                            <p>Gone are the days of manually dragging <code>google-services.json</code> and <code>GoogleService-Info.plist</code> files into your Android and iOS directories. We will use the modern <strong>FlutterFire CLI</strong> to automatically configure everything.</p>

                            <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-sm overflow-hidden my-6">
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#333333]">
                                    <Terminal size={18} className="text-[#888888]" />
                                    <span className="text-[#888888] text-sm font-mono tracking-wide">Terminal</span>
                                </div>
                                <pre className="text-[#A6ACCD] font-mono text-[15px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                    {`# 1. Install the Firebase CLI (if you haven't already)
npm install -g firebase-tools

# 2. Login to your Google Account
firebase login

# 3. Activate the FlutterFire CLI globally
dart pub global activate flutterfire_cli

# 4. Configure your Flutter app (Run this at your project root)
flutterfire configure`}
                                </pre>
                            </div>
                            
                            <p>Follow the terminal prompts to select your Firebase project (or create a new one) and choose the platforms (Android, iOS, Web). This automatically generates a <code>firebase_options.dart</code> file in your <code>lib/</code> folder.</p>
                        </div>
                    </section>

                    {/* SECTION 2: iOS APNs Setup */}
                    <section id="ios-apns" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Smartphone className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">2. iOS APNs Configuration</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg">
                            <p>Android is generally ready out-of-the-box, but iOS requires strict security provisioning through Apple Push Notification service (APNs). You <strong>must</strong> have a paid Apple Developer Account.</p>

                            <ul className="space-y-4 my-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-[#1F1F1F]">Generate APNs Auth Key</strong>
                                        <p className="mt-1 text-base">Go to Apple Developer Console &gt; Certificates, Identifiers & Profiles &gt; Keys. Create a new key, enable <strong>Apple Push Notifications service (APNs)</strong>, and download the <code>.p8</code> file.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-[#1F1F1F]">Upload to Firebase</strong>
                                        <p className="mt-1 text-base">In the Firebase Console, go to Project Settings &gt; Cloud Messaging &gt; Apple app configuration. Upload your <code>.p8</code> key, and enter your Key ID and Team ID.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-[#1F1F1F]">Xcode Capabilities</strong>
                                        <p className="mt-1 text-base">Open <code>ios/Runner.xcworkspace</code> in Xcode. Under "Signing & Capabilities", add two capabilities: <strong>Push Notifications</strong> and <strong>Background Modes</strong> (check "Remote notifications").</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 3: Install SDK & Init */}
                    <section id="install-sdk" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Download className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">3. Packages & Initialization</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg">
                            <p>Now, install the required Flutter packages. We need the core Firebase package and the messaging package.</p>

                            <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-sm overflow-hidden my-6">
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#333333]">
                                    <Terminal size={18} className="text-[#888888]" />
                                    <span className="text-[#888888] text-sm font-mono tracking-wide">Terminal</span>
                                </div>
                                <code className="text-[#A6ACCD] font-mono text-base block">
                                    flutter pub add firebase_core firebase_messaging
                                </code>
                            </div>

                            <p>Initialize Firebase natively before the Flutter app runs. Update your <code>lib/main.dart</code> file:</p>

                            <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-sm overflow-hidden my-6">
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#333333]">
                                    <Code size={18} className="text-[#888888]" />
                                    <span className="text-[#888888] text-sm font-mono tracking-wide">lib/main.dart</span>
                                </div>
                                <pre className="text-[#A6ACCD] font-mono text-[15px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                    {`import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  // Ensure widget bindings are initialized before Firebase
  WidgetsFlutterBinding.ensureInitialized();
  
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Permissions & Tokens */}
                    <section id="permissions-tokens" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Key className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">4. Permissions & Device Tokens</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg">
                            <p>You cannot send notifications without the user's permission (especially on iOS) and a unique device token. Create a dedicated service class to handle this logic securely.</p>

                            <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-sm overflow-hidden my-6">
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#333333]">
                                    <Code size={18} className="text-[#888888]" />
                                    <span className="text-[#888888] text-sm font-mono tracking-wide">lib/services/fcm_service.dart</span>
                                </div>
                                <pre className="text-[#A6ACCD] font-mono text-[15px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                    {`import 'package:firebase_messaging/firebase_messaging.dart';

class FCMService {
  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging.instance;

  Future<void> initNotifications() async {
    // 1. Request Permission (Required for iOS, Web)
    NotificationSettings settings = await _firebaseMessaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      print('User granted permission');
      
      // 2. Fetch the FCM Token
      String? token = await _firebaseMessaging.getToken();
      print('FCM Device Token: $token');
      
      // TODO: Send this token to your backend (Node.js, Django, etc.)
      
    } else {
      print('User declined or has not accepted permission');
    }
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Message States */}
                    <section id="message-states" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Layers className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">5. Routing Message States</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg">
                            <p>Flutter handles notifications differently based on the app's lifecycle state. You must handle three distinct states: <strong>Foreground</strong>, <strong>Background</strong>, and <strong>Terminated</strong>.</p>

                            <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-sm overflow-hidden my-6">
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#333333]">
                                    <Code size={18} className="text-[#888888]" />
                                    <span className="text-[#888888] text-sm font-mono tracking-wide">lib/services/fcm_service.dart</span>
                                </div>
                                <pre className="text-[#A6ACCD] font-mono text-[15px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                    {`// Define this top-level function OUTSIDE of any class
@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  // If you're going to use other Firebase services in the background, init Firebase here
  print("Handling a background message: \${message.messageId}");
}

class FCMService {
  // ... previous init function ...

  void setupMessageHandlers() {
    // 1. Foreground State
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      print('Got a message whilst in the foreground!');
      print('Message data: \${message.data}');
      // Note: iOS/Android won't show system UI in foreground automatically.
      // See Section 6 for the fix.
    });

    // 2. Background State (App in memory, user clicked notification)
    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
      print('A new onMessageOpenedApp event was published!');
      _handleNavigation(message);
    });

    // 3. Terminated State (App fully closed, user clicked notification)
    FirebaseMessaging.instance.getInitialMessage().then((RemoteMessage? message) {
      if (message != null) {
        print('App launched from terminated state via notification');
        _handleNavigation(message);
      }
    });

    // Register Background Handler
    FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
  }

  void _handleNavigation(RemoteMessage message) {
    // Read message.data payload and navigate to specific screens
    if (message.data['route'] == 'chat') {
       // navigate to chat screen
    }
  }
}`}
                                </pre>
                            </div>

                            <div className="bg-[#FFF8E1] rounded-2xl p-6 border-l-4 border-[#FF8F00] mt-8">
                                <div className="flex gap-4">
                                    <Info className="text-[#FF8F00] shrink-0 mt-1" size={28} />
                                    <div>
                                        <strong className="text-xl font-medium text-[#1F1F1F] block mb-2">The Isolate Barrier</strong>
                                        <p className="text-base text-[#5D4037]">
                                            The <code>@pragma('vm:entry-point')</code> annotation is crucial. Background handlers run in their own Dart Isolate (a separate thread). They cannot directly update UI or access variables established in the main app isolate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6: Foreground Local Notifications */}
                    <section id="local-notifications" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <Bell className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
                            <h2 className="text-3xl font-normal text-[#1F1F1F]">6. Foreground System Alerts</h2>
                        </div>

                        <div className="space-y-6 text-[#444746] text-lg">
                            <p>By design, FCM <strong>does not</strong> show heads-up system notifications if your app is open in the foreground on Android. To force a standard system notification banner while the user is actively using the app, you must pair FCM with <code>flutter_local_notifications</code>.</p>

                            <div className="bg-[#F0F4F9] rounded-2xl p-8 border-l-4 border-[#0A56D1] mt-6 mb-8">
                                <strong className="text-xl font-medium text-[#1F1F1F] block mb-4">Implementation Strategy</strong>
                                <ol className="list-decimal list-inside space-y-3 text-base text-[#444746]">
                                    <li>Install <code>flutter_local_notifications</code>.</li>
                                    <li>Setup an Android Notification Channel with "High Importance".</li>
                                    <li>Inside your <code>FirebaseMessaging.onMessage.listen</code> callback, catch the incoming FCM payload.</li>
                                    <li>Pass the <code>message.notification.title</code> and <code>body</code> to the local notifications plugin to trigger a system banner manually.</li>
                                </ol>
                            </div>

                            <p className="mb-4">With this pattern, your Flutter app is fully equipped to handle rich push notifications, route users deep into the app, and maintain engagement across all lifecycle states!</p>
                        </div>
                    </section>

                </motion.article>
            </div>
        </main>
    );
}