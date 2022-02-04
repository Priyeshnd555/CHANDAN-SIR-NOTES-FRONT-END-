// this loop is for Objects

/// we should not use dot ( . ) operator instead
// we should use ==  object[key]

// NOTE : THERE ARE NO QUOTED FOR KEY

var person = {
  name: "abhi",
  age: 22,
  color: "white",
};

// To loop through Obects we use Objects

for (var key in person) {
  console.log(person[key]);
}
