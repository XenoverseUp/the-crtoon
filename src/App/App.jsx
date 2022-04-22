import { BrowserRouter, Switch, Route } from "react-router-dom";
import gsap from "gsap";
import { Header, Cookies } from "./components";
import { Home, BlogGrid, BlogSingle, Login, Register } from "./routes";
import { CustomCursorProvider } from "./contexts/CustomCursorProvider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { removeLoader } from "./animations/loaderAnimations";
import ScrollToTop from "./components/ScrollToTop";

gsap.config({
  nullTargetWarn: false,
});

gsap.registerPlugin(ScrollTrigger);

function App() {
  const wait = (duration = 500) =>
    new Promise(resolve => setTimeout(resolve, duration));

  useEffect(() => {
    (async () => {
      await wait();
      removeLoader();
    })();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <CustomCursorProvider>
          <Header />
          <Cookies />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={BlogGrid} />
            <Route exact path="/blog/single" component={BlogSingle} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/register" component={Register} />
            {/* Add routes as needed.
              
              1. Create route component in routes directory.
              2. Import it.
              3. Append the route as I did with the others to bottom of this comment. 
            
             */}
          </Switch>
        </CustomCursorProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
