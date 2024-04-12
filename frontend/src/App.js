import './App.css'
import Router from './components/router'
import Context from './components/context'

function App() {
  const userInfo = {
    name: "churrps",
    email: "text@gmail.com",
    loggedIn: true
  }

  return (
    <>
      <Context.Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
