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
    addFront(value) {

        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        // return the head
        return this.head;
    }


    //Write a method to remove the head node and return the new list head node. 
    //If the list is empty, return null.
    removeFront() {
        
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }


    // Write a method to return the value (not the node) at the head of the list. 
    // If the list is empty, return null.
    front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }

    // Contains
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
    contains(value){
        var runner = this.head;
        while(runner){
            if(runner.value === value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Length
    // Create a new SLL method length() that returns number of nodes in that list.
    length(){
        var runner = this.head;
        var count = 0;
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }
}