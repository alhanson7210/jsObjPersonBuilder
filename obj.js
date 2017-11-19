var people = [];

function person(name, age, ethnicity, occupation, hometown, print) {

        this.name = name;
        this.age = age;
        this.ethnicity = ethnicity;
        this.occupation = occupation;
        this.hometown = hometown;
        // this.person = person;
        // people.protoype.push(person);
        this.print = function () {
          return "Hi, my name is" + " " + name;
        }
        //people[people.length] = this.person;    
}
var Alex = new person("Alex Hanson", "18", "black", "student", "gardena");
