import {Human} from "./human";
import {className} from "./human";
import {Boy} from './boy';

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


let boy = new Boy();
boy.sayWhoIam();