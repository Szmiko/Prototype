function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
};

Dog.prototype.species = "Psowate";

Dog.prototype.bark = function() {
	if (this.weight > 10 ) {
		console.log(this.name + " szczeka hau!");
	} else {
		console.log(this.name + " szczeka hiaaau!");
	};
};

Dog.prototype.run = function() {
	console.log("Biega");
};
Dog.prototype.wag = function() {
	console.log("Merda ogonem!");
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " już siedzi.");
	} else {
		console.log(this.name + " wykonał siad.");
		this.sitting = true;
	};
};

var fido = new Dog("Burek", "mieszaniec", 20);
var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);
var barnaby = new Dog("Barnaba", "bokser", 18);

spot.bark = function() {
	console.log(this.name + " szczeka HAU HAU!");
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

barnaby.sit();
barnaby.sit();

spot.sit();
spot.sit();