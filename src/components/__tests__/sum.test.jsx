import { sum } from "../sum";

const result = sum(5, 8);

test("This should return the sum of two numbers", ()=>{
    expect(result).toBe(13);
})