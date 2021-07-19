class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Display
    // Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!
    display(){
        var output = "";
        var runner = this.head;
        while(runner){
            output += runner.value + ""
            runner = runner.next;
        }
        return output;
    }
}