let person = {
    name: "John",
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(`${this.name} is ${realAge}`);
    }
}


//console.log( typeof person.showInfo );  // function

person.showInfo(32);