import React from 'react'


function Users() {
  const [inputValue, setInputValue]=React.useState();
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const showUser = () => {
    setLoading(true)
      fetch("https://SECRET.mockapi.io/users").then((response) => 
        response.json()).then((user) => {
          setUsers(user);


        }).finally(() => {
    setLoading(false)
  })
    
  
  }
  const info = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  
  
  return (
    <>
      <input placeholder='name' onChange={info}></input>
      <button onClick={showUser}>input</button>
      {loading ? <h1 className='load'>Loading....</h1> : 
       <div>
        {users.map(({name,id}) => (
          <h5 className='user' key={id}>
           {id}  {name} 
          </h5>
        ))}
   
        </div>
      } 
    
    </>
 
  );
}

export default Users