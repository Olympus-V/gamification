import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Photo {
  src: string;
  date: string | null;
}

interface PhotoState {
  photos: Photo[];
}

const initialState: PhotoState = {
  photos: [],
};

export const PhotoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
  },
});

export default PhotoSlice.reducer;

export const { setPhotos } = PhotoSlice.actions; // Export action creators
