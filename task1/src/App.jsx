import { useRef, useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import TableUser from './components/TableUser/TableUser';
import { useSelector, useDispatch } from 'react-redux';
import { updatedUser } from './store/userSlices';
import Loading from './components/Loading/Loading';
function App() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const timeout = useRef(null);

  const handleInputSearch = (value) => {
    setSearch(value);
    if (value.length >= 3) {
      debounceSearch(value);
    }
  };
  const fetchData = async (search) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${search}`);
      const data = await response.json();
      dispatch(updatedUser(data.items));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const debounceSearch = (search) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fetchData(search);
    }, 500);
  };
  return (
    <>
      <h3>List user Github</h3>
      <SearchInput value={search} onSearch={handleInputSearch} />
      {isLoading ? <Loading /> : <TableUser users={users} />}
    </>
  );
}

export default App;
