//arrays
var names = ["luigi", "mario"];
names.push("toad");
names.push("3");
names[0] = "false";
var numbers = [10, 20, 30, 40];
numbers.push(25);
//numbers.push('shaun');
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 40;
ninja.name = "ryu";
//ninja.age = '20'
//ninja.skills = ["fighting", "sneaking"];
//cannot override the object to be another array however can be overwrited as a new object. The new object has to match the old object, values can be the same but has to have same properties.
