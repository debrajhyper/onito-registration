import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    userDetails: [
        // {
        //     id: '1',
        //     name: 'debraj karmakr',
        //     age: '24',
        //     sex: 'male',
        //     mobile: '9767876545',
        //     govtIssuedIDType: 'aadhaar',
        //     govtIssuedId: '987654398234',
        //     address: '2 no block, kandi kalabagan, murshidabad, west bengal',
        //     state: 'west bengal',
        //     city: 'kandi',
        //     country: 'india',
        //     pinCode: '754567',
        // },
        // {
        //     id: '2',
        //     name: 'name',
        //     age: 'age',
        //     sex: 'no',
        //     mobile: 'mobile',
        //     govtIssuedIDType: 'govtIssuedIDType',
        //     govtIssuedId: 'govtIssuedId',
        //     address: 'address',
        //     state: 'state',
        //     city: 'city',
        //     country: 'country',
        //     pinCode: 'pinCode',
        // },
        // {
        //     id: '3',
        //     name: 'name',
        //     age: 'age',
        //     sex: 'no',
        //     mobile: 'mobile',
        //     govtIssuedIDType: 'govtIssuedIDType',
        //     govtIssuedId: 'govtIssuedId',
        //     address: 'address',
        //     state: 'state',
        //     city: 'city',
        //     country: 'country',
        //     pinCode: 'pinCode',
        // },
        // {
        //     id: '4',
        //     name: 'name',
        //     age: 'age',
        //     sex: 'no',
        //     mobile: 'mobile',
        //     govtIssuedIDType: 'govtIssuedIDType',
        //     govtIssuedId: 'govtIssuedId',
        //     address: 'address',
        //     state: 'state',
        //     city: 'city',
        //     country: 'country',
        //     pinCode: 'pinCode',
        // },
    ]
}

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        addUserDetails: (state, action) => {
            console.log('PAYLOAD -> ',action.payload)
            const newUserDetails = {
                id: nanoid(),
                name: action.payload.name,
                age: action.payload.age,
                sex: action.payload.sex,
                mobile: action.payload.mobile,
                govtIssuedIDType: action.payload.govtIssuedIDType,
                govtIssuedId: action.payload.govtIssuedId,
                address: action.payload.address,
                state: action.payload.state,
                city: action.payload.city,
                country: action.payload?.country,
                pinCode: action.payload.pinCode,
            }
            state.userDetails.push(newUserDetails)
        }
    }
})

export const { addUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;