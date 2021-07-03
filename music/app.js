const scribble = require("scribbletune")
const clip = scribble.clip
const cJson = require("./c.json")



// const c = clip({

//     notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
//     pattern: "xxxxxxxx"
// })

// scribble.midi(c, "CMaior")


console.info(cJson.part.measure.forEach((e) => e))