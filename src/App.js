import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	Redirect,
	useLocation,
	useParams,
	useRouteMatch,
	useHistory
} from "react-router-dom";


export default function BasicExample() {
  return (
    <Router>
      <div>
				<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/posts">Posts</Link>
          </li>
				</ul>
			</nav>

        <Switch>
					<Route path="/" component={Home} exact />
					
					{/* Те саме, просто другий вид запису */}
					<Route path="/posts" exact>
						<Posts />
					</Route> 

					{/* :id - динамічний параметр */}
					<Route path="/posts/:id">
						<PostsDetails />
					</Route> 

					<Route>
						<h1>PAGE NOT FOUND</h1>
					</Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home(props) {
	console.log(props);
  return <h2>Home</h2>;
}

function Posts(props) {
	console.log(props);
	const [posts, setPosts] = React.useState([]);

	const fetchData = async () => {
		const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
		const json = await resp.json();

		setPosts(json)
	}

	React.useEffect(() => {
		fetchData()
	}, [])
	return (<div>
		<ul>
			{posts.map(el => <Link to={`/posts/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}
		</ul>
		</div>);
}

function PostsDetails(props) {
	console.log(props);
	const [post, setPost] = React.useState();

	const match = useRouteMatch();
	const {id} = useParams();
	const location = useLocation();
	const history = useHistory();


	const fetchData = async () => {
		const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const json = await resp.json();

		setPost(json)
	}

	React.useEffect(() => {
		fetchData()
	}, [id])

	return (<div>
		<h1>post details</h1>
		{post && (<> <h3>{post.title}</h3> <p>{post.body}</p> </>)}

		<button onClick={() => history.push(`/posts/${+id + 1}`)}>go to next post</button>
		</div>);
}
