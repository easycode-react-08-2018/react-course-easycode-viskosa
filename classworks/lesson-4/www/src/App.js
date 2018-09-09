import React, { Component } from "react";

import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter // нужно для того, чтобы переходы делать не только по линкам, но и по кнопкам
            // т.е чтобы не только по <Link to=""></Link>
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import RouterClass from "./router";
import { ParentComponent, ChildComponent } from "./components/ways-of-composition/composition";
import PageContent from "./components/ways-of-composition/children-composition";
import { HOCExample } from "./components/HOC-example/HOCExample";
import { Counter } from "./components/ways-of-composition/render-props";
import { Header } from "./components/ways-of-composition/slots";
import { CounterHOC } from "./components/HOC-example/components/HOCs/counter-hoc";

const Logo = () => {
  return <div style={{ marginRight: "auto" }}>LOGO</div>;
};

const UserName = () => {
  return <div>UserName @@@@@@@@@@@@@@@</div>;
};

const ShowMyName = () => <div>Oleh</div>;
const ShowMyNameWithCounter = withRouter(CounterHOC(ShowMyName));// можно делать хок над хоком

const PageNotFound = () => <h1>Page Not Found 404 (-_(-_-)_-)</h1>;

class App extends Component {

  //-----пример для composition & child-composition-------------
/*    render() { 
      return( 
        <PageContent>         // это <div className="page-content">{this.props.children}</div>
          <div className="App">
            <ParentComponent>
              <ChildComponent />
            </ParentComponent>
           </div> 
        </PageContent>
        )
    }*/

    //------пример для render-props------------------------------
/*    render() { 
      return( 
        <PageContent>         // это <div className="page-content">{this.props.children}</div>
          <div className="App">
              <Counter initialStateOfCounter={10}  >
                
                {props =>{
                 // console.log(props)
                  return(
                      <React.Fragment>
                        <button onClick={props.incrementCounter}>INCREMENT</button>
                        {props.counter}
                        <button onClick={props.decrementCounter}>DECREMENT</button>
                      </React.Fragment>
                    )
                }}

              </Counter>
           </div> 
        </PageContent>
        )
    }*/

    // ---пример для slots----------------------------------
    // такой подход плох для оптимизации, т.е. мы не можем использовать shouldComponentUpdate 
    // или componentWillReceiveProps в файле slots.js, т.к. по ссылкам left и right 
    // каждый раз создается новый объект (в записи left={<Logo />} лого превращается в криэйтЭлемент 
    // и это уже новый объект)  и мы не можем сравнить пропсы
    /*render() { 
      return( 
        <PageContent>         // это <div className="page-content">{this.props.children}</div>
          <div className="App">
              //<Header withUser={true}/> //так пишут джуны
              //  а так на слотах:
              left={<Logo />} // в пропсах передаем конкретно компонент
              right={<UserName />} 
              //right={null} // если например компонент UserName не нужно отображать, то в right передаем null
           </div> 
        </PageContent>
        )
    }*/

    // пример для HOC---------------------------------------
    /*render() { 
      return( 
        <PageContent>         // это <div className="page-content">{this.props.children}</div>
          <div className="App">
            <HOCExample />
           </div> 
        </PageContent>
        )
    }*/

    render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/sign-in">show User Name</Link>
          <hr />
          <Link to="/sing-up">
            navigate to Counter and my Name !
          </Link>

          <pre>
            <Switch>
              <Route path="/sign-in" component={UserName} exact />
              <Route path="/sing-up" component={ShowMyNameWithCounter} />
              <Route component={PageNotFound} />
            </Switch>
          </pre>
        </div>
      </BrowserRouter>
    );
  }


  
}

export default App;
