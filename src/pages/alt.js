class CarServiceStation {
  constructor() {
    this.services = {
      BS01: {
        name: "Basic Servicing",
        hatchback: 2000,
        sedan: 4000,
        suv: 5000,
      },
      EF01: { name: "Engine Fixing", hatchback: 5000, sedan: 8000, suv: 10000 },
      CF01: { name: "Clutch Fixing", hatchback: 2000, sedan: 4000, suv: 6000 },
      BF01: { name: "Brake Fixing", hatchback: 1000, sedan: 1500, suv: 2500 },
      GF01: { name: "Gear Fixing", hatchback: 3000, sedan: 6000, suv: 8000 },
    };
  }

  calculateServiceBill(carType, serviceCodes) {
    let total = 0;

    for (let code of serviceCodes) {
      total += this.services[code][carType];
    }
    return total;
  }

  generateBill(carType, serviceCodes) {
    let total = this.calculateServiceBill(carType, serviceCodes);
    let bill = "Car Type: " + carType + "\n";
    bill += "Service Details:\n";
    for (let code of serviceCodes) {
      bill +=
        this.services[code].name + " - " + this.services[code][carType] + "\n";
    }
    bill += "Total Amount: " + total;
    return bill;
  }
}

let station = new CarServiceStation();
let carType = "SUV";
let serviceCodes = ["BS01", "EF01", "CF01"];
console.log(station.generateBill(carType, serviceCodes));
