import { FormModel } from "./FormModel";

const {
    personalDetails: {
        name,
        age,
        sex,
        mobile,
        govtIssuedIDType,
        govtIssuedId,
    },
    addressDetails: {
        address,
        state,
        city,
        country,
        pinCode,
    }
} = FormModel;

export const FormInitialValues = {
    [name.name]: "",
    [age.name]: "",
    [sex.name]: "",
    [mobile.name]: "",
    [govtIssuedIDType.name]: "",
    [govtIssuedId.name]: "",
    [address.name]: "",
    [state.name]: "",
    [city.name]: "",
    [country.name]: "",
    [pinCode.name]: "",
};
