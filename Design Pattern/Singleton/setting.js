class Settings {

    settingObj = {};

    constructor() {
        this.settingObj = {
            'background': "#ffffff",
            'version': Math.floor(Math.random() * 4000)
        }
        Object.freeze(this.settingObj);
    }

    get(key) {
        return this.settingObj[key];
    }

    set(key,value){
        this.settingObj[key] = value;
        return this.settingObj[key];
    }

}

// console.log(obj.set('background',"white")); // will get error because object is freeze
const obj = new Settings();
console.log(obj.get('version'));

const obj2 = new Settings();
console.log(obj2.get('version'));

