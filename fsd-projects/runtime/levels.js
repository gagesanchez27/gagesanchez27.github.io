// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  {
   name: "Level 1",
    speed: 2,
  gameObjects: [
  // Obstacles
  { type: "obstacle", kind: "spikes", x: 800, y: groundY },
  { type: "obstacle", kind: "spikes", x: 1800, y: groundY },
  { type: "obstacle", kind: "spikes", x: 3000, y: groundY },

  // Enemies
  { type: "enemy", kind: "bug", x: 1200, y: groundY },
  { type: "enemy", kind: "bug", x: 2400, y: groundY },
  { type: "enemy", kind: "bug", x: 3600, y: groundY },

  // Powerups
  { type: "powerup", kind: "healthUp", x: 1500, y: groundY - 50 },
  { type: "powerup", kind: "healthUp", x: 3300, y: groundY - 50 },

  // Platforms
  {
    type: "platform",
    kind: "basicPlatform",
    x: 2000,
    y: groundY - 100,
    contactHealthChange: -5,
  },
  {
    type: "platform",
    kind: "basicPlatform",
    x: 2700,
    y: groundY - 60,
  },
  {
    type: "platform",
    kind: "basicPlatform",
    x: 3400,
    y: groundY - 100,
    contactHealthChange: -10,
  },

  // Goal - far away at the end
  { type: "goal", kind: "flag", x: 4500, y: groundY },
],
  },
  {
     name: "Level 2",
  speed: 3,
  gameObjects: [
    // 10 Obstacles
    { type: "obstacle", kind: "spikes", x: 700, y: groundY },
    { type: "obstacle", kind: "spikes", x: 1400, y: groundY },
    { type: "obstacle", kind: "spikes", x: 2100, y: groundY },
    { type: "obstacle", kind: "spikes", x: 2800, y: groundY },
    { type: "obstacle", kind: "spikes", x: 3500, y: groundY },
    { type: "obstacle", kind: "spikes", x: 4200, y: groundY },
    { type: "obstacle", kind: "spikes", x: 4900, y: groundY },
    { type: "obstacle", kind: "spikes", x: 5600, y: groundY },
    { type: "obstacle", kind: "spikes", x: 6300, y: groundY },
    { type: "obstacle", kind: "spikes", x: 7000, y: groundY },

    // 8 Platforms
    {
      type: "platform",
      kind: "basicPlatform",
      x: 1000,
      y: groundY - 100,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 1700,
      y: groundY - 150,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 2400,
      y: groundY - 80,
      contactHealthChange: -5,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 3100,
      y: groundY - 130,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 3800,
      y: groundY - 100,
      hp: 0,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 4500,
      y: groundY - 160,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 5200,
      y: groundY - 90,
      contactHealthChange: -10,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 6100,
      y: groundY - 140,
    },

    // 6 Powerups
    {
      type: "powerup",
      kind: "healthUp",
      x: 1200,
      y: groundY - 150,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 2300,
      y: groundY - 130,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 3400,
      y: groundY - 170,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 4500,
      y: groundY - 210,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 5600,
      y: groundY - 160,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 6700,
      y: groundY - 180,
    },

    // 10 Enemies
    { type: "enemy", kind: "bug", x: 900, y: groundY },
    { type: "enemy", kind: "bug", x: 1600, y: groundY },
    { type: "enemy", kind: "bug", x: 2300, y: groundY },
    { type: "enemy", kind: "bug", x: 3000, y: groundY },
    { type: "enemy", kind: "bug", x: 3700, y: groundY },
    { type: "enemy", kind: "bug", x: 4400, y: groundY },
    { type: "enemy", kind: "bug", x: 5100, y: groundY },
    { type: "enemy", kind: "bug", x: 5800, y: groundY },
    { type: "enemy", kind: "bug", x: 6500, y: groundY },
    { type: "enemy", kind: "bug", x: 7200, y: groundY },

    // 1 Goal
    { type: "goal", kind: "flag", x: 7800, y: groundY },
  ],
},
{
name: "Final Level",
  speed: 4,
  gameObjects: [
    // 14 Obstacles
    { type: "obstacle", kind: "spikes", x: 800, y: groundY },
    { type: "obstacle", kind: "spikes", x: 1600, y: groundY },
    { type: "obstacle", kind: "spikes", x: 2400, y: groundY },
    { type: "obstacle", kind: "spikes", x: 3200, y: groundY },
    { type: "obstacle", kind: "spikes", x: 4000, y: groundY },
    { type: "obstacle", kind: "spikes", x: 4800, y: groundY },
    { type: "obstacle", kind: "spikes", x: 5600, y: groundY },
    { type: "obstacle", kind: "spikes", x: 6400, y: groundY },
    { type: "obstacle", kind: "spikes", x: 7200, y: groundY },
    { type: "obstacle", kind: "spikes", x: 8000, y: groundY },
    { type: "obstacle", kind: "spikes", x: 8800, y: groundY },
    { type: "obstacle", kind: "spikes", x: 9600, y: groundY },
    { type: "obstacle", kind: "spikes", x: 10400, y: groundY },
    { type: "obstacle", kind: "spikes", x: 11200, y: groundY },

    // 10 Platforms
    {
      type: "platform",
      kind: "basicPlatform",
      x: 1200,
      y: groundY - 120,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 2000,
      y: groundY - 180,
      contactHealthChange: -5,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 2800,
      y: groundY - 100,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 3600,
      y: groundY - 200,
      hp: 0,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 4400,
      y: groundY - 140,
      contactHealthChange: -10,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 5200,
      y: groundY - 220,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 6800,
      y: groundY - 160,
      hp: 0,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 7600,
      y: groundY - 220,
      contactHealthChange: -10,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 9200,
      y: groundY - 180,
    },
    {
      type: "platform",
      kind: "basicPlatform",
      x: 10800,
      y: groundY - 240,
      contactHealthChange: -10,
    },

    // 8 Powerups
    {
      type: "powerup",
      kind: "healthUp",
      x: 1400,
      y: groundY - 170,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 2600,
      y: groundY - 150,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 3800,
      y: groundY - 220,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 5000,
      y: groundY - 180,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 6200,
      y: groundY - 200,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 7800,
      y: groundY - 260,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 9400,
      y: groundY - 210,
    },
    {
      type: "powerup",
      kind: "healthUp",
      x: 10600,
      y: groundY - 280,
    },

    // 12 Enemies
    { type: "enemy", kind: "bug", x: 1000, y: groundY },
    { type: "enemy", kind: "bug", x: 1800, y: groundY },
    { type: "enemy", kind: "bug", x: 3000, y: groundY },
    { type: "enemy", kind: "bug", x: 3800, y: groundY },
    { type: "enemy", kind: "bug", x: 4600, y: groundY },
    { type: "enemy", kind: "bug", x: 5400, y: groundY },
    { type: "enemy", kind: "bug", x: 6200, y: groundY },
    { type: "enemy", kind: "bug", x: 7000, y: groundY },
    { type: "enemy", kind: "bug", x: 8400, y: groundY },
    { type: "enemy", kind: "bug", x: 9200, y: groundY },
    { type: "enemy", kind: "bug", x: 10000, y: groundY },
    { type: "enemy", kind: "bug", x: 11000, y: groundY },

    // 1 Goal
    { type: "goal", kind: "flag", x: 12000, y: groundY },
  ]
}
]
let currentLevel = LEVELS[0];
let currentLevelIndex = 0;
// === END LEVELS DEFINITIONS ===

// === DEFAULT VALUES FOR EACH "type" AND "kind" OF OBJECT (STUDENT-EDITABLE) ===
const DEFAULT_VALUES = {
  obstacle: {
    spikes: {
      imageUrl: "images/interactable/spikes.png",
      width: 48,
      height: 48,
      hitWidth: 40,
      hitHeight: 44,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
    },
  },
  enemy: {
    bug: {
      imageUrl: "images/interactable/bug.png",
      width: 75,
      height: 75,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 75,
      contactHealthChange: -30,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 50,
      hp: 3,
      collect: false,
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 32,
      hitHeight: 32,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  goal: {
    flag: {
      imageUrl: "images/interactable/flag.png",
      width: 100,
      height: 100,
      hitWidth: 100,
      hitHeight: 100,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: 0,
      contactScoreChange: +100,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  platform: {
    basicPlatform: {
      imageUrl: "images/interactable/basic-platform.png",
      width: 200,
      height: 50,
      hitWidth: 200,
      hitHeight: 50,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 50,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: Infinity,
      collect: false,
    },
  },
};
// === END DEFAULT VALUES ===
