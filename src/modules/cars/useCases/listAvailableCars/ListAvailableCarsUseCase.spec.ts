import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List all cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Description Car1",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand Car1",
      category_id: "category_id1",
    });

    // await carsRepositoryInMemory.create({
    //   name: "Car2",
    //   description: "Description Car2",
    //   daily_rate: 100,
    //   license_plate: "CBA-1234",
    //   fine_amount: 60,
    //   brand: "Brand Car2",
    //   category_id: "category_id2",
    // });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Description Car1",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand Car1",
      category_id: "category_id1",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car1" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car",
      description: "Description Car1",
      daily_rate: 100,
      license_plate: "CBA-1234",
      fine_amount: 60,
      brand: "BrandCar",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "BrandCar" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car",
      description: "Description Car1",
      daily_rate: 100,
      license_plate: "CBA-12345",
      fine_amount: 60,
      brand: "BrandCar",
      category_id: "123456",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456",
    });

    expect(cars).toEqual([car]);
  });
});
