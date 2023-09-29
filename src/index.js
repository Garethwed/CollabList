import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createClient } from '@liveblocks/client';
import {liveblocksProvider, useOthers} from '@liveblocks/react';
import {RoomProvider} from './liveblocks.config';


const client = createClient({
  publicApiKey : "pk_dev_tfiZ-KP-oDvqS69MoSBbCwEHNtFi9sZezH-bTXgD9zk_dreuyC1tQ8wlzhruGJND",
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <liveblocksProvider client = {client}>
      <RoomProvider id="react-list">
      <App />
      </RoomProvider>
    </liveblocksProvider>
  </React.StrictMode>
);
