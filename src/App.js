import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './comp/User';
import LikeBtn from './comp/LikeBtn';
import Article from './comp/Article';
import ContactForm from './comp/ContactForm';
import Parent from './comp/parent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
//setState t3ayyet lil number
 constructor(props){
   super(props);
   this.state = {
     nbrUsers: 2,
     arrUsers:[
       {name:"youssef zairi", phone:"22222222", email:"lvlllflll"},
       {name:"youssef zairi", phone:"22222222", email:"lvlllflll"}
     ],
     msg:"LOADING...",
     date : new Date(),
     articles:[
       {title: "first article", description:"Dekvsvifvjzvnivnvnvn knvknv", didLike:true, counter:50, image:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/f/c/5fc7418aa7_50167982_lenovo-legion-y540-15irh.jpg"},
       {title: "second article", description:"Dekvsvifvjzvnivnvnvn knvknv", didLike:false, counter:0,  image:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/f/c/5fc7418aa7_50167982_lenovo-legion-y540-15irh.jpg"},
       {title: "third article", description:"Dekvsvifvjzvnivnvnvn knvknv", didLike:false, counter:20,  image:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/f/c/5fc7418aa7_50167982_lenovo-legion-y540-15irh.jpg"}
     ],
     isConnected: true,
     isConfirmed: false
   };
 console.log("constructor");
 this.updateUI = this.updateUI.bind(this);
 }
updateUI(){
  this.setState({date: new Date()});
}
componentDidMount(){
  console.log("component did mount");
  this.setState({msg:"welcome "})
}

componentDidUpdate(){
  console.log("component did update");
}

componentWillUnmount(){
  console.log("component will unmount");
}
componentDidCatch(){
  console.log("component did catch");
}


  render (){

    /*let helloMessage =<h1>Welcome</h1>;
    
      if(this.state.isConnected){
        helloMessage= <h1>Welcome</h1>
      }else{
        helloMessage= <h1>You should signIn</h1>
      }*/
    



    return(
    /*<div>
      <h1>{this.state.msg}hello world we have {this.state.nbrUsers} Users</h1>
      <h1>{this.state.date.toISOString()}</h1>
     <User name = "youssef ZAIRI" email="youssef.zairi93@gmail.com"/>
     {/*
       this.state.arrUsers.map((user)=>{
         return <User name = {user.name} phone = {user.phone} email={user.email}/>
       })
        <button onClick= { this.updateUI}> hhhh </button>
        */
    // }
    /* <ul>
       {/*
         this.state.articles.map((article)=>{
           return <Article key={article.title} params={article}/>
         })*/
     //  }
     //</ul>

      // {/*helloMessage*/}
      // {
       /*  this.state.isConnected?
         <h1>
           Welcome
          {
            this.state.isConfirmed?
            <div></div>
            :
            <div>You must VERIFY Your Account</div>
          }
         </h1>
         :
         <h1>You must SignIn</h1>
       }






       <ContactForm />

       <Parent />

    </div>*/
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/topics">Topics</Link>
          </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );}
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}