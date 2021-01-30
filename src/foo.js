
export default class Foo {
    //connectionType = "socket";

    constructor(transportType) {
        this.connectionType = transportType;
        if (transportType == "http") {
            console.log("User choose http");
        } else {
            console.log("I did not know what User choose");
        }
    }

    connect() {
        console.log(this.connectionType);
    }
}
//module.exports = 'foo'
