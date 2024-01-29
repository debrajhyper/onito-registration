import { Key } from 'react';
import { TextFieldProps, SelectProps, AutocompleteProps } from '@mui/material';

type InputType = Omit<TextFieldProps, SelectProps, AutocompleteProps, 'name' | 'label'> & {
    name: string,
    label: string,
    data: string[],
};

type SelectOptionsItem = string;
type SelectOptionsIndex = Key | null | undefined;

type CountryType = {
    name: string;
    region: string;
    flag: string;
}