import Routes from "./routes/Routes";
import AuthProvider from "./context/auth";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
      
   
       <AuthProvider>
          <Routes/>
       </AuthProvider>
   
  );
};

export default App;
