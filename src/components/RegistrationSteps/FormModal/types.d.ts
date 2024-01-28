type personalDetails = {
    name: {
        name: string,
        label: string,
        requiredErrorMsg: string,
        invalidErrorMsg: string,
    },
    age: {
        name: string,
        label: string,
        requiredErrorMsg: string,
        invalidErrorMsg: string,
    },
    sex: {
        name: string,
        label: string,
        requiredErrorMsg: string,
    },
    mobile: {
        name: string,
        label: string,
        invalidErrorMsg: string,
    },
    govtIssuedIDType: {
        name: string,
        label: string,
    },
    govtIssuedId: {
        name: string,
        label: string,
        invalidErrorMsg: {
            aadhar1: string,
            aadhar2: string,
            pan: string
        },
    },
};

type AddressDetails = {
    address: {
        name: string,
        label: string,
    },
    state: {
        name: string,
        label: string,
    },
    city: {
        name: string,
        label: string,
    },
    country: {
        name: string,
        label: string,
    },
    pincode: {
        name: string,
        label: string,
        invalidErrorMsg: string,
    },
}

type FormModel = {
    personalDetails: personalDetails,
    addressDetails: AddressDetails
}