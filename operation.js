let lamp1 = new Lamp(false);
let lamp2 = new Lamp(false);
let switch1 = new Switch(lamp1);
switch1.switchOnOff();
console.log(lamp1);
switch1.connectTo(lamp2);
switch1.switchOnOff();
console.log(lamp2);
switch1.switchOnOff();
console.log(lamp2);