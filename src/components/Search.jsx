import { useState } from 'react';
import { Divider, Input } from 'antd';


// Iteration 5
function Search(props) {
    const {searchFood} = props
    const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={(event) => {setSearchTerm(event.target.value)
    searchFood(event.target.value)
    }} />
    </div>
  );
}

export default Search;