// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },

  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 400, width: 100, height: 300, speedX: -2 },
      { x: 700, width: 130, height: 350, speedX: -1.5 },
      { x: 1000, width: 90, height: 250, speedX: -2.5 },
      { x: 1300, width: 150, height: 400, speedX: -1 },
    ],
  },

  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 500, width: 50, height: 150, speedX: -2 },
      { x: 800, width: 45, height: 140, speedX: -1 },
      { x: 1100, width: 55, height: 170, speedX: -2.5 },
      { x: 1350, width: 50, height: 150, speedX: -1.5 },
    ],
  },
};