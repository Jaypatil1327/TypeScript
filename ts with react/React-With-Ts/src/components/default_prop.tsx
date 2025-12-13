type Feature = {
  name: string;
  toUpperCase: boolean;
  toLowerCase: boolean;
  length: boolean;
};

function Features({
  name,
  toLowerCase = false,
  toUpperCase = false,
  length = false,
}: Feature) {
  return (
    <div>
      <h1>{toLowerCase === true ? name.toLowerCase() : null}</h1>
      <h1>{toUpperCase === true ? name.toLowerCase() : null}</h1>
      <h1>{length === true ? name.length : null}</h1>
    </div>
  );
}
export default Features;
