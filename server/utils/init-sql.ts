import { robots, regions, actionPerRobot } from './robots'

// create insert into sql for robots
export var queries = `
  DROP TABLE IF EXISTS robots;
  DROP TABLE IF EXISTS regions;
  DROP TABLE IF EXISTS actionPerRobot;

  CREATE TABLE IF NOT EXISTS robots (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    speciality VARCHAR(255),
    yearLaunched INT,
    price INT,
    image_url VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS regions (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS actionPerRobot (
    robot_serial_number VARCHAR(255),
    robot VARCHAR(255),
    region VARCHAR(255),
    dayOfProduction INT,
    day INT,
    actions INT,
    image_url VARCHAR(255)
  );
`
queries += "insert into robots (id, name, speciality, yearLaunched, price, image_url) values \n"
queries += robots.map((robot) => `('${robot.id}', '${robot.name}', '${robot.speciality}', ${robot.yearLaunched}, ${robot.price}, 'http://localhost:3000/${robot.image}')`).join(',\n') + ';\n'

// create insert into sql for companies
queries += "insert into regions (id, name) values \n"
queries += regions.map((region) => `('${region.id}', '${region.name}')`).join(',\n') + ';\n'

// create insert into sql for idleTimePerRobot
queries += "insert into actionPerRobot (robot_serial_number, robot, region, dayOfProduction, day, actions, image_url) values \n"
queries += actionPerRobot.map((action) => `('${action.id}', '${action.robot}', '${action.region}', ${action.dayOfProduction}, ${action.day}, ${action.actions}, '${action.imageUrl}')`).join(',\n') + ';\n'
