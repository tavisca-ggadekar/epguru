import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import Index from "./containers/Index/Index";
import AboutUs from "./containers/AboutUs/AboutUs";
import AffliationsEvents from './containers/AffliationsEvents/AffliationsEvents'
import KnowledgeStudio from './containers/KnowledgeStudio/KnowledgeStudio'
import Analytics from './containers/Analytics/Analytics';
import Pricing from './containers/Pricing/Pricing';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount() {
    //this.props.onTryAutoSignup(); //Redirect login when page refresh
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/pricing" exact component={Pricing}></Route>
        <Route path="/knowledgestudio" exact component={KnowledgeStudio}></Route>
        <Route path="/analytics" exact component={Analytics}></Route>
        <Route path="/affliationsevents" exact component={AffliationsEvents}></Route>
        <Route path="/aboutus" exact component={AboutUs}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
    return (
      <div className="App">
        <div>
          <Layout> {routes} </Layout>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
     
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
