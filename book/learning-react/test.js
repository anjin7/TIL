let list = [
  { title: "red" },
  { title: "green" },
  { title: "pink" },
];

const addColor = function (title, colors) {
  colors.push({ title: title });
  return colors
};

console.log(addColor("yellow", list));
console.log(list.length);