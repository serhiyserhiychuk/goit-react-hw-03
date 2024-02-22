import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ searchedContacts, onChange }) {
  const searchId = useId();
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        value={searchedContacts}
        onChange={handleChange}
        name="search"
        type="text"
        id={searchId}
      />
    </div>
  );
}
