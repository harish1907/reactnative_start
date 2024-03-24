import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProductService } from '../../apiStore/Services/Product';

export const fetchAllProducts: any = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response: any = await getAllProductService();
    return response.allProduct;
  }
);

const initialState: any = {
  products: [],
  status: '',
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
