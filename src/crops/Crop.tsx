import {ReactNode} from "react";

import deadCrop from "../assets/crops/dead_crop.png"

export default abstract class Crop {

    protected constructor(
        protected stateNumber: number,
        protected lastCropTime: Date | null,
        protected grownHarvestValue: number,
        protected deathTimer: number,
    ) {
    }

    protected isDead(){
        return this.deathTimer === 0;
    }

    protected deadCrop = <img className="crop" src={deadCrop} alt="tomato"/>

    protected abstract CROP_STATES: string[];

    abstract getReactNode(): ReactNode;

    abstract grow(): void;

    abstract harvest(): number;


}