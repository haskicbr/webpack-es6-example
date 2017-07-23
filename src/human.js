let className = 'HumanClass';

class Human {

    constructor() {
        this._gender = ' No gender i am human :( ';
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    sayWhoIam() {
        console.log(this.gender);
    }
}

export default Human;
export {className, Human};