import Logo from "./components/logo/Logo";
import Premium from "./components/premium/Premium";
import UserContactDetails from "./components/userContractDetails/UserContactDetails";
import UserDetails from "./components/userDetails/UserDetails";

function App() {
  return (
    <div>
      <Logo /> 
      <UserDetails />
      <UserContactDetails />
      <Premium />
    </div>
  );
}

export default App;
