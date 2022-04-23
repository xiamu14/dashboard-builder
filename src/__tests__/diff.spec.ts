import { diffData } from "../utils/diff";

test("比较数据差异(只删除无新增)", () => {
  const source = [1, 2, 3, 4];
  const changed = [2, 3];
  // expect: {add:[],remove:[1,4],unChange:[2,3]}
  expect(diffData(source, changed)).toEqual({
    add: [],
    remove: [1, 4],
    unChange: [2, 3],
  });
});

test("比较数据差异(删除和新增)", () => {
  const source = [1, 2, 3, 4];
  const changed = [2, 3, 5, 6];
  // expect: {add:[],remove:[1,4],unChange:[2,3]}
  expect(diffData(source, changed)).toEqual({
    add: [5, 6],
    remove: [1, 4],
    unChange: [2, 3],
  });
});

test("比较数据差异(不变)", () => {
  const source = [1, 2, 3, 4];
  const changed = [1, 2, 3, 4];
  // expect: {add:[],remove:[1,4],unChange:[2,3]}
  expect(diffData(source, changed)).toEqual({
    add: [],
    remove: [],
    unChange: [1, 2, 3, 4],
  });
});

test("比较数据差异(只新增无删除)", () => {
  const source = [1, 2, 3, 4];
  const changed = [1, 2, 3, 4, 5, 6];
  // expect: {add:[],remove:[1,4],unChange:[2,3]}
  expect(diffData(source, changed)).toEqual({
    add: [5, 6],
    remove: [],
    unChange: [1, 2, 3, 4],
  });
});

test("比较数据差异(只新增无删除)[对象数组]", () => {
  const source = [{ u: "1", i: "1" }];
  const changed = [
    { u: "1", i: "1" },
    { u: "2", i: "2" },
  ];
  // expect: {add:[],remove:[1,4],unChange:[2,3]}
  expect(diffData(source, changed)).toEqual({
    add: [{ u: "2", i: "2" }],
    remove: [],
    unChange: [{ u: "1", i: "1" }],
  });
});
