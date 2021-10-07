function Employee(title) {
    this.title = title;
}

Employee.prototype.setTitle = string => {
    this.title = string;
}
Employee.prototype.getTitle = () => {
    return this.title;
}

function Engineer(title, isManager = false) {
    Employee.call(this,title);
    this.isManager = isManager;
}

Engineer.prototype = Object.create(Employee.prototype);
// Engineer.prototype = new Employee();
Engineer.prototype.constructor = Engineer;

Engineer.prototype.setIsManager = boolean => {
    this.isManager = boolean;
}
Engineer.prototype.getIsManager = () => {
    return this.isManager;
}

let ben = new Engineer("Developer",false);
console.log(ben);
ben.setTitle("Manager");
console.log(ben.setIsManager(true));
console.log(ben)
// ben.setIsManager(true);
// console.log(ben.hasProperty(setTitle))