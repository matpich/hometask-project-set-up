import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle";

test("should return correct perimeter", () => {
    let rectPerimiter = getRectanglePerimeter(2,3);
    expect(rectPerimiter).toBe(10);
})

test("should return positive perimeter", ()=> {
    let rectPerimiter = getRectanglePerimeter(7,8);
    expect(rectPerimiter).toBeGreaterThan(0);
})

test("should return correct area", () => {
    let rectArea = getRectangleArea(5,4);
    expect(rectArea).toBe(20);
})

test("should return positive area", ()=> {
    let rectPerimiter = getRectanglePerimeter(6,5);
    expect(rectPerimiter).toBeGreaterThan(0);
})

test("should return valid text info", ()=> {
    let rectTextInfo = getRectangleInfo(3,5);
    expect(rectTextInfo).toBe(`The perimeter of a rectangle is 16 and the area is 15`);
})