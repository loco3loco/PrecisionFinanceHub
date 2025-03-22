import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
