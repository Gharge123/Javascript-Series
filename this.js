//access current object
//for ex , rutuja said : my age is 22 so here my is current object

//so in javscript use this

const user = {
    name: "Rutuja",

    showName: function () {
        console.log(this.name);
    }
}

user.showName();

function demo() {
    name = "Rutuja Patil";
    console.log(this.name);
}

demo();