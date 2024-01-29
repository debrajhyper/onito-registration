type personalDetails = {
    name: {
        name: string,
        label: string,
        type: string,
        requiredErrorMsg: string,
        invalidErrorMsg: string,
    },
    age: {
        name: string,
        label: string,
        type: string,
        min: number,
        max: number,
        requiredErrorMsg: string,
        invalidErrorMsg: string,
    },
    sex: {
        name: string,
        label: string,
        type: string,
        oneOfSelect: string[],
        requiredErrorMsg: string,
    },
    mobile: {
        name: string,
        label: string,
        type: string,
        invalidErrorMsg: string,
    },
    govtIssuedIDType: {
        name: string,
        type: string,
        label: string,
        oneOfSelect: string[],
    },
    govtIssuedId: {
        name: string,
        label: string,
        type: string,
        invalidErrorMsg: {
            aadhaarStartErrorMsg: string,
            aadhaarNumOnlyErrorMsg: string,
            aadhaarLengthErrorMsg: string,
            panLengthErrorMsg: string,
        },
    },
};

type addressDetails = {
    address: {
        name: string,
        label: string,
        type: string,
    },
    state: {
        name: string,
        label: string,
        type: string,
    },
    city: {
        name: string,
        label: string,
        type: string,
    },
    country: {
        name: string,
        label: string,
        type: string,
    },
    pinCode: {
        name: string,
        label: string,
        type: string,
        invalidErrorMsg: string,
    },
};

type FormModel = {
    personalDetails: personalDetails,
    addressDetails: AddressDetails,
};