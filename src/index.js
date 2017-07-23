import {Human} from "./human";
import {className} from "./human";

class Girl extends Human {
    
    constructor() {
        
        super();
        
        this.gender = 'female';
    }
}

let girl = new Girl();
girl.sayWhoIam();

let something = new Human();
something.sayWhoIam();