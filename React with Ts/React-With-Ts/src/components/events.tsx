import {
  useState,
  type ChangeEvent,
  type MouseEvent,
  type SyntheticEvent,
} from "react";

function Events() {
  const [name, setName] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(name);
  }

  function onSelect(event: SyntheticEvent<HTMLSelectElement>) {
    console.log(event.currentTarget.value);
  }
  return (
    <form action="">
      <input
        type="text"
        placeholder="enter you'r name"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Click me</button>

      <select onChange={onSelect}>
        <option value="bmw">BMW</option>
        <option value="toyota">Toyota</option>
        <option value="audi">Audi</option>
        <option value="mercedes">Mercedes</option>
      </select>
    </form>
  );
}

export default Events;
