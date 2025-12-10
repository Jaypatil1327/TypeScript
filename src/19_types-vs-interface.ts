// interface -> it is best for shape of object and extents and can be re-opened
// type -> its suitable for more general type (union , intersection , objects) and cannot be reopen

interface Person1 {
  salary: number;
}
interface Person1 {
  employee: number;
  dateOfJoining: Date;
}

const prs: Person1 = {
  dateOfJoining: new Date(),
  salary: 7.5,
  employee: 3,
};
