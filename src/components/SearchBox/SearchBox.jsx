import css from './SearchBox.module.css';

export default function SearchBox({ text, onChangeInput }) {
  const inputChange = (event) => onChangeInput(event.target.value);
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" value={text} onChange={inputChange} id="searchBox" />
    </div>
  );
}
