type PersonalDetails = {
    name: string,
    age: string,
    sex: string,
    mobile: string,
    govtIssuedIDType: string,
    govtIssuedId: string
};

type AddressDetails = {
    address: string,
    state: string,
    city: string,
    country: string,
    pincode: string
};

type HandleSubmit = SubmitHandler<{ [x: string]: string | null | undefined;[x: number]: string | null | undefined; }>;