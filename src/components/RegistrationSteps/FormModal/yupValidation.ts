
// import checkoutFormModel from './checkoutFormModel';
// import FormModel from './FormModel';
import { FormModel } from "./FormModel";
import * as yup from "yup";

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

const ageRegEx = /^[0-9]\d*$/;
const mobileRegEx = /^(\+\d{1,3}[- ]?)?\d{10}$/gm;
const mobileRegEx1 = /^(\+91[\-\s]?)?[6789]\d{9}$/;
const notStartsWith01RegEx = /^[2-9]\d*$/;
const isNumericGegEx = /^[0-9]+$/;
const checkPinCodeRegEX = /^\d{6}$/;

export const yupValidation = [
    yup.object().shape({
        [name.name]: yup.string().required(`${name.requiredErrorMsg}`).min(3, name.invalidErrorMsg),
        [age.name]: yup.string().required(`${age.requiredErrorMsg}`).matches(ageRegEx, age.invalidErrorMsg),
        [sex.name]: yup.string().required(`${sex.requiredErrorMsg}`).oneOf([...sex.oneOfSelect, ""]),
        [mobile.name]: yup.string().matches(mobileRegEx1, {
            message: mobile.invalidErrorMsg,
            name: mobile.name,
            excludeEmptyString: true,
        }),
        [govtIssuedIDType.name]: yup.string().nullable().oneOf([...govtIssuedIDType.oneOfSelect, ""]),
        [govtIssuedId.name]: yup.string().when([govtIssuedIDType.name], {
            is: govtIssuedIDType.oneOfSelect[0],
            then: (schema) =>
                schema.nullable()
                    .matches(isNumericGegEx, {
                        message: govtIssuedId.invalidErrorMsg.aadhaarNumOnlyErrorMsg,
                        name: govtIssuedId.name,
                        excludeEmptyString: true,
                    })
                    .matches(notStartsWith01RegEx, {
                        message: govtIssuedId.invalidErrorMsg.aadhaarStartErrorMsg,
                        name: govtIssuedId.name,
                        excludeEmptyString: true,
                    })
                    .test('is12Digits', govtIssuedId.invalidErrorMsg.aadhaarLengthErrorMsg, (value: any) => value.length === 12),
            otherwise: (schema) =>
                schema.when([govtIssuedIDType.name], {
                    is: govtIssuedIDType.oneOfSelect[1],
                    then: (schema) => schema.test('is10Characters', govtIssuedId.invalidErrorMsg.panLengthErrorMsg, (value: any) => value.length === 10),
                }),
            // schema.test('notStartsWith01', govtIssuedId.invalidErrorMsg.aadhaarStartErrorMsg, (value: any) => !/^[01]/.test(value))
            //     .test('isNumeric', govtIssuedId.invalidErrorMsg.aadhaarNumOnlyErrorMsg, (value: any) => /^[0-9]+$/.test(value))
            //     .test('is12Digits', govtIssuedId.invalidErrorMsg.aadhaarLengthErrorMsg, (value: any) => value.length === 12),
        }),
    }),
    yup.object().shape({
        [pinCode.name]: yup.string().matches(checkPinCodeRegEX, {
            message: pinCode.invalidErrorMsg,
            name: pinCode.name,
            excludeEmptyString: true
        })
    })
];
