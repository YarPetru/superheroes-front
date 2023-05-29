import { createSlice } from '@reduxjs/toolkit';
import { fetchHeroes } from './heroesThunks';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchHeroes.pending, (state, _) => {
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

    // builder.addCase(addHero.pending, (state, _) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(addHero.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //   state.data = state.data.push(action.payload);
    // });

    // builder.addCase(addHero.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });

    // builder.addCase(deleteHero.pending, (state, _) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(deleteHero.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = state.data.filter(hero => {
    //     return hero.id !== action.payload.id;
    //   });
    // });
    // builder.addCase(deleteHero.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });

    // builder.addCase(editHero.pending, (state, _) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(editHero.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //   state.data = state.data.filter(hero => {
    //     return hero.id !== action.payload.id;
    //   });
    // });
    // builder.addCase(editHero.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });
  },
});

export default heroesSlice.reducer;
