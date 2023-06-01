import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'http://localhost:9999/api/';

export const fetchHeroes = createAsyncThunk('heroes/fetch', async (page, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/superheroes?page=${page}&limit=5`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
        toastId: nanoid(),
      });
    } else {
      toast.warn(`Something went wrong. Error: ${error}`, {
        toastId: nanoid(),
      });
    }
    return rejectWithValue(error);
  }
});

export const addHero = createAsyncThunk('heroes/add', async (hero, { rejectWithValue }) => {
  try {
    const response = await axios.post('/superheroes', hero);
    toast.success(`New superhero ${hero.nickname} has successfully added`, {
      toastId: nanoid(),
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
        toastId: nanoid(),
      });
    } else {
      toast.warn(`Something went wrong. Error: ${error}`, {
        toastId: nanoid(),
      });
    }
    return rejectWithValue(error);
  }
});

export const removeHero = createAsyncThunk('heroes/remove', async (hero, { rejectWithValue }) => {
  try {
    await axios.delete(`superheroes/${hero._id}`);
    toast.success(`${hero.nickname} has successfully deleted`, {
      toastId: nanoid(),
    });
    return hero;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
        toastId: nanoid(),
      });
    } else {
      toast.warn(`Something went wrong. Error: ${error}`, {
        toastId: nanoid(),
      });
    }
    return rejectWithValue(error);
  }
});

export const editHero = createAsyncThunk(
  'heroes/edit',
  async ({ hero, updatedHero }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`superheroes/${hero._id}`, updatedHero);
      toast.success(`Hero with ID ${hero._id} has successfully deleted`, {
        toastId: nanoid(),
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
          toastId: nanoid(),
        });
      } else {
        toast.warn(`Something went wrong. Error: ${error}`, {
          toastId: nanoid(),
        });
      }
      return rejectWithValue(error);
    }
  }
);
