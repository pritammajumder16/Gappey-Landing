export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "host" | "features" | "download";
}

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "What is Gappey and what makes it unique?",
    answer:
      "Gappey is India's premier social audio and live voice party app. It allows users to create interactive voice rooms with 1, 2, 4, 8, or 16 dynamic seats. Whether you want to sing, chat, discuss trending topics, or play casual games with friends, Gappey offers crystal-clear, ultra-low latency WebRTC audio with luxury full-screen broadcast gifts and intimate CP bonding features.",
  },
  {
    category: "host",
    question: "How do I become a live voice room host and earn creator rewards?",
    answer:
      "Anyone with a passion for conversation, singing, storytelling, or entertaining can become a voice room host on Gappey! As a host, you can open your live audio party room, build a community of regular listeners, and receive virtual animated gifts. Received gifts convert into Diamonds, which can be withdrawn as real creator earnings directly to your Indian bank account or UPI ID.",
  },
  {
    category: "host",
    question: "How do talent agencies and host bonuses work on Gappey?",
    answer:
      "Gappey offers a dedicated Agency Program where creators can join verified talent agencies. Agency broadcasters receive dedicated coaching, account growth support, and access to monthly target-based salary bonuses on top of regular gifting rewards. Experienced creators can also apply to run their own talent agency.",
  },
  {
    category: "features",
    question: "How do Blue Star and Pink Star levels work?",
    answer:
      "Gappey features a dual progression system designed to celebrate both generous supporters and active hosts. Blue Star Levels highlight generous gifters with exclusive entrance rides, royal avatar frames, and chat badges. Pink Star Levels showcase broadcaster talent, room popularity, and hosting milestones.",
  },
  {
    category: "features",
    question: "Can I play games with friends in voice party rooms?",
    answer:
      "Yes! Gappey includes popular social table games such as Ludo, Greedy, and Carrom that you can play with friends while chatting live. All games run on free Silver tokens for casual social entertainment, adhering strictly to fair entertainment standards with zero monetary stakes.",
  },
  {
    category: "download",
    question: "Where can I download the official Gappey Android APK?",
    answer:
      "The latest official release of Gappey for Android is available for direct download at https://gappey.in/download-android. The APK is lightweight, secure, and compatible with Android 8.0 and above. Simply download, install, and create your account via Google Sign-In or guest profile to start partying.",
  },
  {
    category: "general",
    question: "What are the age requirements and safety rules on Gappey?",
    answer:
      "Gappey is strictly an 18+ adult platform. We maintain 24/7 AI and human moderation to ensure respectful, harassment-free environments. Private chat media is stored with ephemeral privacy expiration, and voice audio streams are never recorded or stored, ensuring complete privacy under the DPDP Act 2023.",
  },
];
