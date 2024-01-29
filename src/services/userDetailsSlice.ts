import { createSlice, nanoid } from "@reduxjs/toolkit";
import { STORE_NAME } from "@Constants/index";

const initialState: InitialState = {
    userDetails: []
};

export const userDetailsSlice = createSlice({
    name: STORE_NAME,
    initialState,
    reducers: {
        addUserDetails: (storeState, action) => {
            const { name, age, sex, mobile, govtIssuedIDType, govtIssuedId, address, state, city, country, pinCode }: UserDetails = action?.payload
            const newUserDetails: UserDetails = {
                id: nanoid(),
                name: name,
                age: age,
                sex: sex,
                mobile: mobile,
                govtIssuedIDType: govtIssuedIDType,
                govtIssuedId: govtIssuedId,
                address: address,
                state: state,
                city: city,
                country: country,
                pinCode: pinCode,
            }
            storeState.userDetails.push(newUserDetails)
        }
    }
});

export const { addUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;