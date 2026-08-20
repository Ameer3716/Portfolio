const fs = require("fs");
let content = fs.readFileSync("client/src/data/projects.js", "utf8");
const replaces = [
  ["💬", "<FiMessageSquare />"],
  ["🕊️", "<FiHeart />"],
  ["🗣️", "<FiMic />"],
  ["🌾", "<FiLayout />"],
  ["🏢", "<FiBriefcase />"],
  ["🐍", "<FiTerminal />"],
  ["☁️", "<FiCloud />"],
  ["📄", "<FiFileText />"],
  ["🏥", "<FiActivity />"],
  ["⛓️", "<FiHexagon />"],
  ["🎙️", "<FiPhoneCall />"],
  ["🏋️", "<FiVideo />"],
  ["🩺", "<FiCpu />"],
  ["⚖", "<FiShield />"],
  ["📄", "<FiCode />"],
  ["📱", "<FiAlignLeft />"],
  ["🥘", "<FiCoffee />"],
  ["🎧", "<FiHeadphones />"],
  ["💻", "<FiCpu />"],
  ["🔎", "<FiCheckSquare />"],
  ["📈", "<FiBarChart2 />"]
];
replaces.forEach(pair => {
  const [e, c] = pair;
  content = content.split("\"" + e + "\"").join(c);
});
content = "import React from \"react\";\nimport { FiMessageSquare, FiHeart, FiMic, FiLayout, FiBriefcase, FiTerminal, FiCloud, FiFileText, FiActivity, FiHexagon, FiPhoneCall, FiVideo, FiCpu, FiShield, FiCode, FiAlignLeft, FiCoffee, FiHeadphones, FiCheckSquare, FiBarChart2 } from \"react-icons/fi\";\n\n" + content;
fs.writeFileSync("client/src/data/projects.js", content);
console.log("Done");
