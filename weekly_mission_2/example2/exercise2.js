const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


console.log("Ejercicio 1: Imprime el nombre")
explorers.forEach(nombre => console.log(nombre.name))

console.log("Ejercicio 2: Stack")
explorers.forEach(stck => console.log(stck.stack))

console.log("Ejercicio 3: MAP")
let newStack = explorers.map(stck => stck.stack)
console.log(newStack)

console.log("Ejercicio 4: FILTER")
let stackJS = explorers.filter(stck => stck.stack.includes("js"))
console.log(stackJS)

console.log("Ejercicio 5: FIND")
let findCountry = explorers.find(fnd => fnd.city == "CDMX")
console.log(findCountry)

console.log("Ejercicio 6: REDUCE")
let reduc = explorers.reduce((acc, element) => acc + element.exercises_completed,0)
console.log(reduc);

console.log("Ejercicio 7: SOME")
let validar = explorers.some(val => val.missions.frontend.exercisesFinished)
console.log(validar)

console.log("Ejercicio 8: EVERY")
let terminado = explorers.every(end => end.missions.onboarding.isFinished)
console.log(terminado)