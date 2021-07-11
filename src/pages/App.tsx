import '../styles/colors.styles.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import CitySearch from '../molecules/CitySearch.component';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <CitySearch />
      </div>
    </QueryClientProvider>
  );
};

export default App;
