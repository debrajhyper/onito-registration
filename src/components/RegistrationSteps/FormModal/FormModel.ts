export const FormModel = {
    personalDetails: {
        name: {
            name: 'name',
            label: 'Name',
            type: 'text',
            requiredErrorMsg: 'Name field is required',
            invalidErrorMsg: 'Name must be min 3 characters',
        },
        age: {
            name: 'age',
            label: 'Age',
            type: 'number',
            min: 0,
            max: 200,
            requiredErrorMsg: 'Age field is required',
            invalidErrorMsg: 'Age must be a positive number',
        },
        sex: {
            name: 'sex',
            label: 'Sex',
            type: 'text',
            oneOfSelect: ['Male', 'Female'],
            requiredErrorMsg: 'Sex field is required',
        },
        mobile: {
            name: 'mobile',
            label: 'Mobile',
            type: 'number',
            invalidErrorMsg: 'Invalid mobile number',
        },
        govtIssuedIDType: {
            name: 'govtIssuedIDType',
            label: 'Govt Issued ID Type',
            type: 'text',
            oneOfSelect: ['Aadhaar', 'PAN']
        },
        govtIssuedId: {
            name: 'govtIssuedId',
            label: 'Govt Issued Id',
            type: 'text',
            invalidErrorMsg: {
                aadhaarStartErrorMsg: 'Addhaar number should not starts with 0 or 1',
                aadhaarNumOnlyErrorMsg: 'Aadhaar must contain only numbers',
                aadhaarLengthErrorMsg: 'Addhaar Must be 12 digits',
                panLengthErrorMsg: 'PAN must be 10 characters'
            },
        },
    },
    addressDetails: {
        address: {
            name: 'address',
            label: 'Address',
            type: 'text',
        },
        state: {
            name: 'state',
            label: 'State',
            type: 'text',
        },
        city: {
            name: 'city',
            label: 'City',
            type: 'text',
        },
        country: {
            name: 'country',
            label: 'Country',
            type: 'text',
        },
        pinCode: {
            name: 'pinCode',
            label: 'Pin Code',
            type: 'number',
            invalidErrorMsg: 'Pin Code is not valid (e.g. 70000)',
        },
    }
};
