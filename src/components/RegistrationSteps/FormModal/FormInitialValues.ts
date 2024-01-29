import { FormModel } from "./FormModel";
import { EMPTY_STRING } from '@Constants/index';

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
    [name?.name]: EMPTY_STRING,
    [age?.name]: EMPTY_STRING,
    [sex?.name]: EMPTY_STRING,
    [mobile?.name]: EMPTY_STRING,
    [govtIssuedIDType?.name]: EMPTY_STRING,
    [govtIssuedId?.name]: EMPTY_STRING,
    [address?.name]: EMPTY_STRING,
    [state?.name]: EMPTY_STRING,
    [city?.name]: EMPTY_STRING,
    [country?.name]: EMPTY_STRING,
    [pinCode?.name]: EMPTY_STRING,
};