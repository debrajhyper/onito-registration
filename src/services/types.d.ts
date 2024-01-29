type UserDetails = {
    id: string,
    name: string,
    age: string,
    sex: string,
    mobile: string,
    govtIssuedIDType: string,
    govtIssuedId: string,
    address: string,
    state: string,
    city: string,
    country: string,
    pinCode: string,
};

type InitialState = {
    userDetails: UserDetails[]
};