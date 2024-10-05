import AboutMe from './containers/AboutMe';

import ContextProvider from './context';

const App = () => {
  return (
    <ContextProvider>
      <AboutMe />
    </ContextProvider>
  );
};

export default App;
