import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let mass: number = 0;
    for (let i = 0; i < items.length; i++) {
      let itemMass: number = items[i].massKg;
      mass += itemMass;
    }
    return mass;
  }

  currentMassKg(): number {
    let payloadArr: Payload[] = [];
    payloadArr = this.cargoItems;
    payloadArr = payloadArr.concat(this.astronauts);
    return this.sumMass(payloadArr);
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    } else {
      return false;
    }
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
