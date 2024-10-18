//Hof

function company(callback, name, city) {
  callback(name, city);
}

//CBF

function user(username, city) {
  console.log("User Name:: " + username);
  console.log("City:: " + city);
}

// company(user, "motu" , "Dholakpur");
const data = (callback, name, city) => company(callback, name, city);
data(user, "Motu", "Dholakpur");

company((name, isWorking) => {
  console.log(" " + name);
  console.log(" " + isWorking);
}, "Lekhraj" ,false);
