import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// http://localhost:9999/api/

axios.defaults.baseURL = 'http://localhost:9999/api/';

export const fetchHeroes = createAsyncThunk('heroes/fetch', async () => {
  const response = await axios.get('/superheroes');

  return response.data;
});
