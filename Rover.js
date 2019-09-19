//rover object//

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}

//Rover movement //

function turnLeft (rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N": 
      console.log (rover.direction = "W"); 
      break;
    case "W": 
      console.log (rover.direction = "S"); 
      break;
    case "S": 
      console.log(rover.direction = "E"); 
      break;
    case "E": 
      console.log(rover.direction = "N"); 
      break;
    default: break
  }
  console.log("Rover is facing "+ rover.direction)
}

function turnRight (rover) {
  console.log("turnRight was called!")
  switch (rover.direction) {
    case "N": 
      console.log (rover.direction = "E");
      break;
    case "E": 
      console.log (rover.direction = "S"); 
      break;
    case "S": 
      console.log (rover.direction = "W"); 
      break;
    case "W": 
      console.log (rover.direction = "N"); 
      break;
    default: 
      break;
  }
  console.log("Rover is facing " + rover.direction)
}

function moveForwards (rover) {
  console.log ('moveForwards was called!')
  checkForBorders()
  switch (rover.direction) {
    case "N": 
      console.log (rover.y++); 
      break;
    case "W": 
      console.log (rover.x--); 
      break;
    case "S": 
      console.log (rover.y--); 
      break;
    case "E": 
      console.log (rover.x++); 
      break;
    default: 
      break;
  }
  let newPosition = {x: rover.x, y: rover.y}
  rover.travelLog.push(newPosition)
  console.log("Rover took one step forwards and is facing " + rover.direction + "with a grid position of x:" + rover.x +"y:" + rover.y)
}

function moveBackwards (rover) {
  console.log('moveBackwards was called!')
  checkForBoundaries ()
  switch (rover.direction) {
    case "N": 
      console.log (rover.y--); 
      break; 
    case "W": 
      console.log (rover.x++); 
      break; 
    case "S": 
      console.log (rover.y++); 
      break;
    case "E": 
      console.log (rover.x--); 
      break;
    default: 
      break;
  }
  let newPosition = {x: rover.x, y: rover.y}
  rover.travelLog.push(newPosition)
  console.log("Rover took one step backwards and is facing "+ rover.direction + "with a grid position of x:"+ rover.x + ", y:"+ rover.y)
}

//Matrix borders//
function checkForBorders() {
  if (rover.y < 0 && rover.direction === "N") {
        rover.y = 0
        console.log("Stop - End of grid!")
      } else if (rover.y > 9 && rover.direction === "N") {
          rover.y = 9
          console.log("Stop - End of grid!")
        } else if (rover.y < 0 && rover.direction === "S") {
            rover.y = 0
            console.log("Stop - End of grid!")
          } else if (rover.y > 9 && rover.direction === "S") {
              rover.y = 9
              console.log("Stop - End of grid!")
          } else if (rover.x < 0 && rover.direction === "E") {
            rover.x = 0
            console.log("Stop - End of grid!")
          } else if (rover.x > 9 && rover.direction === "E") {
            rover.x = 9
            console.log("Stop - End of grid!")
          } else if (rover.x < 0 && rover.direction === "W") {
            rover.x = 0
            console.log("Stop - End of grid!")
          } else if (rover.x > 9 && rover.direction === "W") {
            rover.x = 9
            console.log('"Stop - End of grid!")
          }
}
//Rover's commandsList//
function command (rover, orders) {
  for (i = 0; i < orders.length; i++) {
    let order = orders[i]
    if (orders[i] === 'l' || orders[i] === 'r' || orders[i] === 'f' || orders[i] === 'b') {
      switch (order){
        case 'r': 
          turnRight (rover); 
          break;
        case 'l': 
          turnLeft (rover); 
          break;
        case 'f': 
          moveForwards (rover); 
          break;
        case 'b': 
          moveBackwards (rover); 
          break; 
      }else{
      console.log ('This is not a rover command!');
      }
    }
  }
console.log(rover);
}

//Testing commands//

command(rover, "rffrfflfrff")
command(rover, "nor")
//The end//