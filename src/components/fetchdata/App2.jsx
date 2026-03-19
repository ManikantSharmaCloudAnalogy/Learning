import useFetch from "./useFetch";
function App2(){
    const BASE_URL="https://jsonplaceholder.typicode.com/posts";
    const {data,loading,error}=useFetch(BASE_URL);
    return(
        <div>
           <h1>Data fetching from server</h1> 
           {loading && <h1>loading....</h1>}
           {error && <h3> Something went wrong </h3>}
           {data && data.length}
             {!loading && !error &&  (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
        </div>
    )
}
export default App2;