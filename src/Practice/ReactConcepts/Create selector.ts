// API → createAsyncThunk → createSlice → configureStore → createSelector (memoize) → useSelector → Component
// usersSlice.js
import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

// 1. API call
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("/api/users");
  return res.json();
});

// 2. Store data in slice
const usersSlice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export default usersSlice.reducer;


// 3. Memoized selector (heavy computation)
const selectUsers = (state) => state.users.list;

export const selectActiveUsers = createSelector(
  [selectUsers],
  (users) => users.filter(user => user.active)
);


// store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});


// Component.jsx
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectActiveUsers } from "./usersSlice";

function Users() {
  const dispatch = useDispatch();

  // Fetch data
  dispatch(fetchUsers());

  // Read memoized data
  const activeUsers = useSelector(selectActiveUsers);

  return <div>{activeUsers.length}</div>;
}

    //                 User clicks button
    //                        │
    //                        ▼
    //               React Component
    //                        │
    //             dispatch(fetchUsers())
    //                        │
    //                        ▼
    //               createAsyncThunk
    //                        │
    //                  pending action
    //                        │
    //                        ▼
    //               Slice (extraReducers)
    //                loading = true
    //                        │
    //                        ▼
    //                  API Call
    //                        │
    //           ┌────────────┴────────────┐
    //           │                         │
    //       Success                  Failure
    //           │                         │
    //           ▼                         ▼
    // fulfilled action          rejected action
    //           │                         │
    //           ▼                         ▼
    //   Slice (extraReducers)    Slice (extraReducers)
    //   users = payload          error = message
    //   loading = false          loading = false
    //           │
    //           ▼
    //      Redux Store Updated
    //           │
    //           ▼
    //   createSelector (Selector)
    //           │
    //  (filter/map/sort/derive data)
    //           │
    //           ▼
    //     useSelector() in React
    //           │
    //           ▼
    //   Component Re-renders