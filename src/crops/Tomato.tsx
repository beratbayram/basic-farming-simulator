import Crop from "./Crop";

import tomato0 from "../assets/crops/tomato/tomato0.png";
import tomato1 from "../assets/crops/tomato/tomato1.png";
import tomato2 from "../assets/crops/tomato/tomato2.png";
import tomato3 from "../assets/crops/tomato/tomato3.png";
import tomato4 from "../assets/crops/tomato/tomato4.png";

const defaultDeathTimer = 5;

export default class Tomato extends Crop {

    protected CROP_STATES = [
        tomato0,
        tomato1,
        tomato2,
        tomato3,
        tomato4,
    ];

    constructor() {
        super(0, null, 10, defaultDeathTimer);
    }

    getReactNode() {
        if (this.isDead()) return this.deadCrop;
        return <img className="crop" src={this.CROP_STATES[this.stateNumber]} alt="tomato"/>
    }

    grow() {
        if(this.isDead()) return;
        if (this.stateNumber + 1 === this.CROP_STATES.length) //if grown, start decaying
            this.deathTimer--;
        else {
            this.stateNumber++;
            this.deathTimer = defaultDeathTimer;
        }
    }

    harvest() {
        const stateNumberOfHarvest = this.stateNumber;
        this.stateNumber = 0;
        if (this.isDead()) {
            this.deathTimer=defaultDeathTimer;
            return 0;
        }
        if (stateNumberOfHarvest === this.CROP_STATES.length - 1) return this.grownHarvestValue;
        return 0;
    }
}