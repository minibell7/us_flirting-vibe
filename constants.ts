import { Question, ResultType, Score } from './types';

// Scoring Logic:
// L (Leadership/Action): Initiative, Boldness, "Aura"
// E (Sense/Empathy): EQ, Reading the room, "Vibe"

export const QUESTIONS: Question[] = [
  {
    id: 1,
    scenario: "They posted a blurry photo of two drinks on their story. No tag. It's a 'Soft Launch'.",
    choices: [
      { text: "🔥 (Send a single flame emoji) *Down bad tremendously*", delta: { L: -5, E: -5 } },
      { text: "📍 \"Drop the location, looks sick.\" (Casual & Smooth)", delta: { L: 5, E: 10 } },
      { text: "🧐 \"Who's the mystery guest?\" (Jealousy -1000 Aura)", delta: { L: 10, E: 5 } },
    ],
  },
  {
    id: 2,
    scenario: "First Hinge date. They say: \"I don't really listen to music, I prefer podcasts about crypto.\"",
    choices: [
      { text: "🤢 \"Oh... cool.\" (Visibly getting the Ick)", delta: { L: 0, E: -10 } },
      { text: "🤝 \"Okay, red flag, but tell me which coin is crashing so I can feel better.\"", delta: { L: 10, E: 15 } },
      { text: "🎧 \"I can fix you.\" (Delusional Confidence)", delta: { L: 15, E: 5 } },
    ],
  },
  {
    id: 3,
    scenario: "You're at a party. They hand you their phone: \"Take a pic of me?\"",
    choices: [
      { text: "📸 (Get on the floor, 0.5x mode) \"ABSOLUTELY SERVING.\" (Hype person)", delta: { L: 10, E: 15 } },
      { text: "😐 (Click once) \"Here.\" (NPC Energy)", delta: { L: 0, E: -10 } },
      { text: "🤳 \"Only if we take a selfie first.\" (Bold Move)", delta: { L: 15, E: 5 } },
    ],
  },
  {
    id: 4,
    scenario: "The bill comes ($90). They reach for their card.",
    choices: [
      { text: "🤚 \"I got it. You get the Uber.\" (Provider Energy)", delta: { L: 15, E: 10 } },
      { text: "🥺 \"Omg thank you pookie.\" (Princess Treatment accepted)", delta: { L: 5, E: 15 } },
      { text: "📱 \"Let's split. Venmo me $45.67.\" (Calculating down to the cent = Ick)", delta: { L: 0, E: -15 } },
    ],
  },
  {
    id: 5,
    scenario: "Walking them to their Uber. It's freezing outside. They are shivering.",
    choices: [
      { text: "🧥 (Give them your hoodie) *+10000 Aura*", delta: { L: 15, E: 10 } },
      { text: "🚕 \"Uber is 1 min away! Run!\" (Survival Mode)", delta: { L: 5, E: -5 } },
      { text: "🥶 \"Damn, I'm cold too.\" (Making it about you)", delta: { L: -5, E: -5 } },
    ],
  },
  {
    id: 6,
    scenario: "Date went great. The 'Post-Date Text' dilemma.",
    choices: [
      { text: "🏃‍♂️ (Text immediately) \"I'm obsessed with you.\" (Too strong?)", delta: { L: 5, E: 5 } },
      { text: "😏 (Wait 20 mins) \"Home safe? Had fun beating you at pool.\"", delta: { L: 10, E: 15 } },
      { text: "📅 (Radio silence until next week) *Toxic*", delta: { L: 10, E: 0 } },
    ],
  },
  {
    id: 7,
    scenario: "You see a notification on their phone: \"I miss you\" from 'Alex'.",
    choices: [
      { text: "💀 (Pretend you didn't see it, spiral internally)", delta: { L: -10, E: 5 } },
      { text: "🚩 \"Who is Alex?\" (Instant Confrontation)", delta: { L: 15, E: -5 } },
      { text: "😂 \"Tell Alex to get in line.\" (Unbothered King/Queen)", delta: { L: 10, E: 15 } },
    ],
  },
  {
    id: 8,
    scenario: "Watching Netflix. Hands touch in the popcorn bowl.",
    choices: [
      { text: "🤝 (Lock fingers) *We are winning*", delta: { L: 15, E: 10 } },
      { text: "⚡ (Flinch away) \"My bad.\"", delta: { L: -5, E: 5 } },
      { text: "🍿 (Aggressively eat popcorn) *Locked in on the snack*", delta: { L: 0, E: -5 } },
    ],
  },
  {
    id: 9,
    scenario: "The 'Situation-ship' Talk. \"I'm hanging out with my ex, but we're just friends.\"",
    choices: [
      { text: "🛑 \"Yeah, that's a hard pass for me.\" (Boundaries)", delta: { L: 10, E: 5 } },
      { text: "🤷 \"Cool, have fun!\" (Acting nonchalant but crying inside)", delta: { L: 0, E: -5 } },
      { text: "🧐 \"I trust you, but does the ex know you're just friends?\" (Real talk)", delta: { L: 10, E: 15 } },
    ],
  },
  {
    id: 10,
    scenario: "End of the night. You want to kiss them. The vibe is right.",
    choices: [
      { text: "👀 (Triangle Method: Eye-Lip-Eye contact)", delta: { L: 20, E: 10 } },
      { text: "🏃 \"Okay bye!!!\" (Fumbling the bag)", delta: { L: -5, E: 10 } },
      { text: "🗣 \"Can I kiss you?\" (Consent is sexy)", delta: { L: 10, E: 10 } },
    ],
  },
];

// 8 Animal Types Logic (US Viral Archetypes)
export const RESULT_TYPES: ResultType[] = [
  {
    id: 'FOX',
    title: 'Infinite Aura (Fox)',
    subtitle: 'High Action & High Sense',
    description: 'You are the CEO of Vibes. You don\'t chase, you attract. You have "Main Character Energy" without being cringy. You know exactly when to text and when to ghost (just a little). People are naturally drawn to you.',
    score: 99,
    condition: (s: Score) => s.L >= 60 && s.E >= 60,
    color: 'text-rose-500',
    advice: [
      "🦊 Keep doing you. Your Aura is maxed out.",
      "🚫 Don't treat people like NPCs.",
      "💌 Soft launch properly (no face, just hands).",
      "👑 Vulnerability is the new cool.",
      "🔥 Don't fumble a 10/10 by playing too many games."
    ]
  },
  {
    id: 'RETRIEVER',
    title: 'Golden Retriever Boyfriend/Girlfriend',
    subtitle: 'High Action & Mid Sense',
    description: 'No thoughts, just vibes and love. You reply in 0.2 seconds. You are loyal, energetic, and have massive "Lover Boy/Girl" energy. Everyone loves you, but make sure you aren\'t being taken for a walk.',
    score: 85,
    condition: (s: Score) => s.L >= 60 && s.E >= 30 && s.E < 60,
    color: 'text-yellow-600',
    advice: [
      "🐶 Stop double texting. Put the phone down.",
      "👂 Listen more, bark less.",
      "🛑 Love Bombing isn't a personality trait.",
      "🤐 Keep some mystery. Don't trauma dump immediately.",
      "🧘 Learn to be happy alone."
    ]
  },
  {
    id: 'RACCOON',
    title: 'The Overthinking Raccoon',
    subtitle: 'Mid Action & High Sense',
    description: 'You are stuck in the "Talking Stage" forever. You analyze every emoji. You have the perfect plan in your head, but you never execute it. You are smart, but your fear of "The Ick" keeps you single.',
    score: 78,
    condition: (s: Score) => s.L >= 30 && s.L < 60 && s.E >= 60,
    color: 'text-indigo-600',
    advice: [
      "🦝 It's not that deep. Just send the DM.",
      "⚡ \"If they wanted to, they would\" applies to YOU too.",
      "🤫 Stop stalking their Venmo transactions.",
      "🎢 Defining the Relationship (DTR) is scary but necessary.",
      "🗣️ Closed mouths don't get fed."
    ]
  },
  {
    id: 'CAT',
    title: 'The "Hard to Get" Cat',
    subtitle: 'Mid Action & Mid Sense',
    description: 'Master of mixed signals. One day you are obsessed, the next day you need 3 business days to reply. You call it "having standards," they call it "confusing."',
    score: 70,
    condition: (s: Score) => s.L >= 30 && s.L < 60 && s.E >= 30 && s.E < 60,
    color: 'text-purple-500',
    advice: [
      "🐈 Reply faster. Playing games is so 2015.",
      "🎁 If you like them, say it.",
      "🤝 Let your guard down. Being 'nonchalant' is boring.",
      "💖 It's okay to be cringe. Cringe is dead.",
      "🐾 Don't ghost just because you got bored."
    ]
  },
  {
    id: 'BOAR',
    title: 'The Love Bomber (Boar)',
    subtitle: 'High Action & Low Sense',
    description: '0 to 100 in 3 seconds. You are planning the wedding after date #1. You are intense and passionate, but you have zero chill. You overwhelm people, which looks like a walking Red Flag.',
    score: 45,
    condition: (s: Score) => s.L >= 60 && s.E < 30,
    color: 'text-red-600',
    advice: [
      "🐗 Slow. Down.",
      "🤐 Stop saying 'I love you' after 2 weeks.",
      "👀 Read the room. Match their energy.",
      "🛑 No drunk texting exes.",
      "👂 Ask questions. It's not an interview about YOU."
    ]
  },
  {
    id: 'RABBIT',
    title: 'The Professional Yearner',
    subtitle: 'Low Action & High Sense',
    description: 'You live in a fanfiction in your head. In reality, you are just staring at your phone. You are terrified of rejection, so you do nothing. You have high EQ but zero courage.',
    score: 60,
    condition: (s: Score) => s.L < 30 && s.E >= 60,
    color: 'text-pink-400',
    advice: [
      "🐰 Stop manifesting and start texting.",
      "🥕 Rejection is better than regret.",
      "📱 They aren't 'out of your league'.",
      "🛡️ Stop apologizing for existing.",
      "🥰 Confidence is the best outfit."
    ]
  },
  {
    id: 'SLOTH',
    title: 'The Bare Minimum Sloth',
    subtitle: 'Low Action & Mid Sense',
    description: '\"I\'m just going with the flow.\" No, you are drowning. You put in zero effort and wonder why nothing happens. You want a relationship to fall into your lap like an Uber Eats order.',
    score: 40,
    condition: (s: Score) => s.L < 30 && s.E >= 30 && s.E < 60,
    color: 'text-green-600',
    advice: [
      "🦥 Touch grass. Meet real people.",
      "💬 \"lol\" is not a conversation.",
      "💃 Plan a date. Not just 'hanging out'.",
      "👕 Hygiene check. Drip check.",
      "📅 Consistency is hot."
    ]
  },
  {
    id: 'ROCK',
    title: 'The NPC (Rock)',
    subtitle: 'Low Action & Low Sense',
    description: 'Are you... there? You give nothing. No vibes, no initiative, no clues. You are the background character in your own love life. People think you are ghosting them, but you just forgot you had a phone.',
    score: 10,
    condition: (s: Score) => s.L < 30 && s.E < 30,
    color: 'text-gray-500',
    advice: [
      "🪨 Wake up! The simulation is running.",
      "🤝 Eye contact. Try it.",
      "❓ Ask ONE question.",
      "👗 Upgrade your skin. Upgrade your fit.",
      "🤔 If they flirt, flirt back. Don't just stare."
    ]
  },
];