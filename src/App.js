
import './App.css';
import {Route,Switch,Redirect,Link,NavLink,useHistory} from 'react-router-dom';
import Home from './page/home/home';
import ContactUs from './page/ContactUs/ContactUs';
import Weblog from './page/Weblog/Weblog';
import Detail from './page/Detail/Detail';

function App() {

  const history=useHistory();
  return (
<div>
  {/* usage useHistory */}

<ul>
      <li onClick={()=>history.push("/")}>home</li>
      <li onClick={()=>history.push("/weblog")}>weblog</li>
      <li onClick={()=>history.push("/weblog/fatima")}>weblog/fatima</li>

    </ul>


  {/* usage Link */}
  {/* <ul>
      <li><Link to="/">home</Link></li>
      <li ><Link to="/weblog">weblog</Link></li>
      <li ><Link to="/weblog/fatima">weblog/FATIMA</Link></li>

    </ul> */}


  
    <Switch>

{/* <Route path="/" exact>
  <Home/>
</Route> */}

{/* <Route path="/Weblog" exact>
  <Weblog/>
</Route> */}

{/* <Route path="/contactus" exact>
  <ContactUs/>
</Route> */}

{/* <Route path="*">
  {/* <h1>not found</h1> */}

  {/* <Redirect to="/"></Redirect>
</Route> */} 

{/* another way to write Routers */}

<Route path="/"  exact  component={Home} />

<Route path="/weblog" exact component={Weblog} />

<Route path="/contactus" exact component={ContactUs} />

<Route path="/weblog/:id" exact component={Detail}/>

<Route path="*"  render={()=><Redirect to="/" />} />

    </Switch>
    <h2>footer</h2>
    
</div>
  
  );
}

export default App;
