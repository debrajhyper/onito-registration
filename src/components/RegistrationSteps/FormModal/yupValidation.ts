import * as yup from "yup";
import { FormModel } from "./FormModel";
import { EMPTY_STRING, TEST_IS_12_DIGITS, TEST_IS_10_CHARACTERS } from '@Constants/index';

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
        pinCode,
    }
} = FormModel;

const ageRegEx = /^[0-9]\d*$/;
const mobileRegEx1 = /^(\+91[\-\s]?)?[6789]\d{9}$/;
const notStartsWith01RegEx = /^[2-9]\d*$/;
const isNumericGegEx = /^[0-9]+$/;
const checkPinCodeRegEX = /^\d{6}$/;

export const yupValidation = [
    yup.object().shape({
        [name?.name]: yup.string().required(`${name?.requiredErrorMsg}`).min(3, name?.invalidErrorMsg),
        [age?.name]: yup.string().required(`${age?.requiredErrorMsg}`).matches(ageRegEx, age?.invalidErrorMsg),
        [sex?.name]: yup.string().required(`${sex?.requiredErrorMsg}`).oneOf([...sex?.oneOfSelect, EMPTY_STRING]),
        [mobile?.name]: yup.string().matches(mobileRegEx1, {
            message: mobile?.invalidErrorMsg,
            name: mobile?.name,
            excludeEmptyString: true,
        }),
        [govtIssuedIDType?.name]: yup.string().nullable().oneOf([...govtIssuedIDType?.oneOfSelect, EMPTY_STRING]),
        [govtIssuedId?.name]: yup.string().when([govtIssuedIDType?.name], {
            is: govtIssuedIDType?.oneOfSelect[0],
            then: (schema) =>
                schema.nullable()
                    .matches(isNumericGegEx, {
                        message: govtIssuedId?.invalidErrorMsg?.aadhaarNumOnlyErrorMsg,
                        name: govtIssuedId?.name,
                        excludeEmptyString: true,
                    })
                    .matches(notStartsWith01RegEx, {
                        message: govtIssuedId?.invalidErrorMsg?.aadhaarStartErrorMsg,
                        name: govtIssuedId?.name,
                        excludeEmptyString: true,
                    })
                    .test(TEST_IS_12_DIGITS, govtIssuedId?.invalidErrorMsg?.aadhaarLengthErrorMsg, (value: string | null | undefined) => value?.length === 12),
            otherwise: (schema) =>
                schema.when([govtIssuedIDType?.name], {
                    is: govtIssuedIDType?.oneOfSelect[1],
                    then: (schema) => schema.test(TEST_IS_10_CHARACTERS, govtIssuedId?.invalidErrorMsg?.panLengthErrorMsg, (value: string | null | undefined) => value?.length === 10),
                }),
        }),
    }),
    yup.object().shape({
        [pinCode?.name]: yup.string().matches(checkPinCodeRegEX, {
            message: pinCode?.invalidErrorMsg,
            name: pinCode?.name,
            excludeEmptyString: true
        })
    }),
];