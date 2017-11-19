var people = [];

function Person(name, age, ethnicity, occupation, hometown, print) {

        this.name = name;
        this.age = age;
        this.ethnicity = ethnicity;
        this.occupation = occupation;
        this.hometown = hometown;
        // this.person = person;
        // people.prototype.push(person);
        this.print = function () {
          return "Hi, my name is" + " " + this.name;
        }
        //people[people.length] = this.person;    
}

var Alex = new Person("Alex Hanson", "18", "black", "student", "gardena");

Person.prototype.ambitions = "dreams";

Person.prototype.mindset = function () {
	return "What are my ambitions?" + "They are evolving" + this.ambitions;
};

