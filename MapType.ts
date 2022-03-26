type Properties = "PropA" | "PropB";

type MyMappedType1 = {
  [P in Properties]: boolean;
};

type MyMappedType2<T extends string | number | symbol> = {
  [P in T]: P;
};

type MyMappedType3 = MyMappedType2<Properties>;

type MyMappedType4<T> = {
  [P in keyof T]: T[P];
};

type MyMappedType5 = MyMappedType4<{ a: "a"; b: "b" }>;

//PICK
const pick1: Pick<{ a: "a"; b: "b"; c: "c" }, "a" | "b"> = { a: "a", b: "b" };

//RECORD
const record1: Record<string, number | boolean> = { a: 1, b: false };
