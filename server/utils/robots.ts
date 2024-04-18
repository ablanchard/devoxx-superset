import { defineStore } from 'pinia'


export const robots = [
  {id: 'r2d2', name: "R2D2", speciality: "Mechanic", image: "r2d2.png", yearLaunched: 1977, price: 100000, description:"Speciliazed in aircraft mechanic"},
  {id: 'walle', name: "Wall-E", speciality: "Cleaning", image: "walle.jpg", yearLaunched: 2008, price: 65999, description: "Focused on cleaning, but with a poetic brain..."},
  {id: 'marvin', name: "Marvin", speciality: "All purpose", image: "marvin.jpg", yearLaunched: 2005, price: 33876, description: "Multifunction, but he is also depressed"},
  {id: 'k9', name: "K9", speciality: "Protection", image: "k9.jpg", yearLaunched: 1963,  price: 12098, description: "Our oldest and loyalest robot, can watch and respond to any threat"},
  {id: 'devoxx', name: "Devoxx", speciality: "Cyber defense", image: "devoxx.png", yearLaunched: 2020, price: 120875, description: "Expert in cybersecurity, never opens a phishing email"},
]

export const regions = [
  {id: 'america', name: "Americas", robots: {'marvin': 75, 'walle': 20, 'devoxx': 10}},
  {id: 'europe', name: "Europe", robots: {'r2d2': 10, 'devoxx': 10}},
  {id: 'asia', name: "Asia", robots: {'r2d2': 50, 'k9': 50}},
  {id: 'africa', name: "Africa", robots: {'k9': 30, 'marvin': 30, 'r2d2': 30, 'walle': 10}},
]

export const productionPerDay = [
  {day: 1, region: 'europe', robot: 'r2d2', quantity: 1},
]

for (let day = 1; day <= 20; day++) {
  for (const region of regions) {
    // This year, this company buy some robots by the proportion in the robots field
    for (const [robot, quantity] of Object.entries(region.robots)) {
      var randomizedQuantity = quantity + Math.floor((Math.random() - 1) * 10)
      productionPerDay.push({day: day, region: region.id, robot, quantity: randomizedQuantity})
    }
  }
}


export const actionPerRobot = [
  {id: 'r2d2-europe-1-1', robot: 'r2d2', region: 'europe', dayOfProduction: 1, day: 8, actions: 12, imageUrl: 'toto'},
]

const MAX_ACTIONS_PER_DAY = 10

for (let day = 1; day <= 20; day++) {
  for (let production of productionPerDay) {
    if (day >= production.day) {
      for (let i = 0; i < production.quantity; i++) {
        var robotSpec = robots.find(robot => robot.id === production.robot)
        var randomizedActions = Math.floor(MAX_ACTIONS_PER_DAY * Math.random())
        actionPerRobot.push({id: `${production.robot}-${production.region}-${production.day}-${i}`, robot: production.robot, region: production.region, dayOfProduction: production.day, day: day, actions: randomizedActions, imageUrl: "http://localhost:3000/" + robotSpec?.image})
      }
    } 
  }
}

export const useRobots = defineStore('robots', {
  state: () => ({
    robots: robots,
    regions: regions,
    productionPerDay: productionPerDay,
    actionPerRobot: actionPerRobot
  }),
  getters: {
    getRobots(state) {
      return state.robots
    },
  },
  actions: {
  },
})