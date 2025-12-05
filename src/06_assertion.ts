// assertion is way of verify that properties belong to Object only

const raw = `{"id" : 1 , "username" : "jfm" , "age" : 1}`;
type schema = {
  id: number;
  username: string;
  age: number;
};

// its an unsafe way of doing
const riskyUser = JSON.parse(raw) as schema;
console.log(riskyUser, "risky user");
// safe :
function validateObj(v: unknown): v is schema {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "username" in v &&
    typeof (v as any).username === "string" &&
    "age" in v &&
    typeof (v as any).age === "number"
  );
}

const raw2 = '{"id" : 1 , "username" : "jfm"  , "age" : 12}';
console.log(validateObj(JSON.parse(raw2)));

// x in y => tell that is present in y or not
// x as y => as is used for doing type conversion but runtime
// x is y => ky 'X' 'y' hai
