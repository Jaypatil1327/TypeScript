// union , intersection , object , validate

type Person = {
  name: string;
  phone: number;
  address: string;
};

type Merge1 = {
  salary: number;
};
type Merge2 = {
  techStack: string;
};

type Status = "working" | "leaved" | "never worked";

function addEmployee(s: Status): (Merge1 & Merge2) | void {
  if (s === "working") {
    return {
      salary: 12,
      techStack: "software engineer",
    };
  } else {
    return;
  }
}
addEmployee("working");
