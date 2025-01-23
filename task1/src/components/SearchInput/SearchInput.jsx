import './style.css'
const SearchInput = ({ value, onSearch }) => {
  const onChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <span>Search: </span>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};
export default SearchInput;
