type someType1 = number;
type conditionalType = someType1 extends string ? string : null; // it means : if someType1 is assignable type string we choose string otherwise null

function someFunction1<T>(value: T) {
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {};
  return someOtherFunction;
}

const result = someFunction1("");
result("TYPE B");

//INFER

// type WithoutInferSomeThing<T>=T extends U ?U:any
type WithInferSomeThing<T> = T extends infer U ? U : any;

type Inferred = WithInferSomeThing<"I am String">;
