import { createSlice } from '@reduxjs/toolkit';
import { fetchHeroes, addHero, removeHero, editHero } from './heroesThunks';

const initialState = {
  data: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action) => {
      state.data = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHeroes.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addHero.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(addHero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.length < 5 && state.data.push(action.payload);
    });

    builder.addCase(addHero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeHero.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(removeHero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(hero => {
        return hero._id !== action.payload._id;
      });
    });
    builder.addCase(removeHero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(editHero.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(editHero.fulfilled, (state, action) => {
      state.isLoading = false;
      const elIndex = state.data.findIndex(hero => hero._id === action.payload._id);
      state.data.splice(elIndex, 1, action.payload);
    });
    builder.addCase(editHero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setHeroes, setCurrentPage } = heroesSlice.actions;

export default heroesSlice.reducer;
