export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "host" | "features" | "download" | "social";
}

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "What is Gappey and what makes it unique?",
    answer:
      "Gappey is India's premier social audio and live voice party app. It allows users to create interactive voice rooms with 1, 2, 4, 8, or 16 dynamic seats. Whether you want to sing, chat, discuss trending topics, meet new friends, or play casual games with friends, Gappey offers crystal-clear, ultra-low latency audio with luxury broadcast gifts and community bonding features.",
  },
  {
    category: "social",
    question: "How do I make friends and connect with communities on Gappey?",
    answer:
      "Gappey makes it effortless to connect with friends who share your vibe. You can browse active live voice party rooms, jump onto open mic seats, participate in group banter, establish friendship milestones with partner badges, and join or create Families (community clans) to celebrate shared moments.",
  },
  {
    category: "host",
    question: "Can live voice room hosts receive gifts and creator settlements?",
    answer:
      "Yes. Broadcasters and voice room hosts who entertain listeners can receive voluntary virtual gifts from community members. Eligible premium gifts grant Super Diamonds, which can be settled to verified Indian bank accounts or UPI IDs following mandatory KYC (PAN) verification and statutory TDS deduction. Gappey does not promise or guarantee minimum earnings.",
  },
  {
    category: "host",
    question: "How do talent agencies and host programs work on Gappey?",
    answer:
      "Gappey offers an Agency Program where creators can join verified talent agencies for community growth and hosting guidance. Broadcasters receive dedicated support and target-based milestone rewards based on active community engagement. Experienced creators can also apply to lead their own agency.",
  },
  {
    category: "features",
    question: "How do Blue Star and Pink Star levels work?",
    answer:
      "Gappey features a dual progression system designed to celebrate both generous supporters and active hosts. Blue Star Levels highlight active gifters with exclusive entrance rides, royal avatar frames, and chat badges. Pink Star Levels showcase broadcaster talent, room popularity, and hosting milestones.",
  },
  {
    category: "features",
    question: "Can I play mini-games with friends in voice party rooms?",
    answer:
      "Yes! Gappey includes popular social mini-games such as Ludo and trivia that you can play with friends while chatting live. All mini-games operate strictly on entertainment Gold Coins for recreational social fun, adhering strictly to non-gambling standards with zero monetary stakes.",
  },
  {
    category: "download",
    question: "Where can I download the official Gappey app?",
    answer:
      "Gappey for Android is available on the Google Play Store (as well as direct download on our official download page at https://gappey.in/download-android). Simply install the app and create your account via Google Sign-In to start partying.",
  },
  {
    category: "general",
    question: "What are the age requirements and safety rules on Gappey?",
    answer:
      "Gappey is strictly an 18+ adult platform. We maintain proactive AI-assisted and human moderation to ensure respectful, harassment-free environments. Private chat media is stored with ephemeral 7-day expiration, and voice audio streams are never recorded or stored, ensuring complete privacy under the DPDP Act 2023.",
  },
];
