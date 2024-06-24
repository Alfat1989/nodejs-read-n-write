const fs = require('fs')

const obj = {
    "cource": "node.js 2024",
    "sprints": 12,
    "tasks": 165,
    "tags": ["fs", "file", "database"]
}

fs.writeFileSync('./d_05/example_03.json', JSON.stringify(obj), { encoding: 'utf8', flag: 'w' })