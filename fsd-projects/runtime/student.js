function moveScenery() {
 for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];

    buildingInstance.x +=
      buildingInstance.speedX + currentLevel.speed;

    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];

    lampInstance.x += lampInstance.speedX + currentLevel.speed;

    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}


function generateLevel() {
 for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];

    create(currentObject);
    console.log(currentObject.type, currentObject.kind);
  }  
}


function create(currentObject) {
  if (currentObject.type === "obstacle") {
    makeObstacle(currentObject);
  } else if (currentObject.type === "enemy") {
    makeEnemy(currentObject);
  } else if (currentObject.type === "powerup") {
    makePowerup(currentObject);
  } else if (currentObject.type === "goal") {
    makeGoal(currentObject);
  } else if (currentObject.type === "platform") {
    makePlatform(currentObject);
  }
}

function filterObjects(type) {
    var filteredObjects = [];

  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      filteredObjects.push(gameObjects[i]);
    }
  }

  console.log(filteredObjects);

  return filteredObjects;
}

function moveGameObjects(objectList) {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    currentObject.x += currentObject.speedX - currentLevel.speed;
  }
}

function handleProjectileCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];

      if (
        isCollidingWithProjectile(currentProjectile, currentObject) === true
      ) {
        handleProjectileObjectCollision(i, j);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    if (currentObject.type !== "platform") {
      if (isGenericCollision(currentObject)) {
        handleHallebotGenericCollision(i);
      }
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex += 1;

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
    return;
  }

  currentLevel = LEVELS[currentLevelIndex];

  gameObjects = [];

  generateLevel();
}