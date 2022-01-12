/*
 * @Description:
 * @version:
 * @Author: youyuan
 * @Date: 2022-01-12 21:23:49
 * @LastEdited:
 * @LastEditTime: 2022-01-12 21:51:15
 */
import { sum } from "../src/utils/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("对象赋值", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// 相反的数据
test("add positive number is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
