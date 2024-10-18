const obj = {
  name: "Tejas",
  age: 21,
};

const props = Object.keys(obj);
console.log(props);

const vals = Object.values(obj);
console.log(vals);

for (values of vals) {
  console.log(values);
}

console.log("Using map With conditions");

vals.map(
  (val = (age) => {
    if (age >= 18 && age <= 60) {
      console.log("Eligible to work");
    } else if (age > 60) {
      console.log("Senior Citizen");
    } else {
      console.log("Under Age");
    }
  })
);

const entry = Object.entries(obj);
console.log(entry);

console.log("Creating Object using call back");
const data = (entry, cb) => {
  const obj3 = Object.fromEntries(entry);
  cb(obj3);
  
};

/*Converting Arrays to Object */
console.log("Creating Object");
const obj2 = Object.fromEntries(entry);
console.log(obj2);



/*Using Object Assign*/
console.log("Assign")
const obj4 = Object.assign({}, obj2,obj)
console.log(obj4)
