import React, { lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';

import ReviewContextProvider from './context/ReviewContext';
import TrainerContextProvider from './context/TrainerContext';
import Lazy from './components/Lazy';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  const Home = lazy(()=> import('./components/Home'));
  const FitArmy = lazy(()=> import('./components/FitArmy'));
  const Pricing = lazy(()=> import('./components/Pricing'));
  const Contact = lazy(()=> import('./components/Contact'));
  const About = lazy(()=> import('./components/About'));
  const Produit = lazy(()=> import('./components/Produit'));
  const IndividualExpert = lazy(()=> import('./components/IndividualExpert'));
  const SignUp = lazy(()=> import('./components/SignUp'));
  const ReserveExpert = lazy(()=> import('./components/ReserveExpert'));
  return (
        // <ReviewContextProvider>
          <Suspense fallback= {<Lazy/>}>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/price" component={Pricing} />
              <Route path="/contact" component={Contact} />
              <Route path="/produit" component={Produit} />
              <Route path="/register" component={SignUp} />
              <Route path='/error' component={ErrorPage} />
              <Route exact path="/staff/:id" component={IndividualExpert} />
              <Route exact path="/staff/:id/reserve" component={ReserveExpert} />
              <Route path="/fitarmy" component={FitArmy} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        // </ReviewContextProvider>
  );
}

export default App;
