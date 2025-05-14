import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

const slice = createSlice({
  name: "madhava",
  initialState: {
    name: "Madhava",
    age: 25,
    location: "India",
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

const store = configureStore({ reducer: { madhava: slice.reducer }, });

export const ReduxStore = () => {
  return (
    <Provider store={store}>
      <MaddyComponent />
    </Provider>);
}


function MaddyComponent() {
  const info = useSelector((state: any) => state.madhava);
  const dispatch = useDispatch();

  const handleNameChange = (e: any) => {
    dispatch(slice.actions.updateName(e.target.value));
  };
  const handleAgeChange = (e: any) => {
    dispatch(slice.actions.updateAge(e.target.value));
  };
  const handleLocationChange = (e: any) => {
    dispatch(slice.actions.updateLocation(e.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="Name" onChange={handleNameChange} />&nbsp;
      <input type="number" placeholder="Age" onChange={handleAgeChange} />&nbsp;
      <input type="text" placeholder="Location" onChange={handleLocationChange} />
      <div>
        <h2>Updated Info:</h2>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
        <p>Location: {info.location}</p>
      </div>
    </div>
  );
}