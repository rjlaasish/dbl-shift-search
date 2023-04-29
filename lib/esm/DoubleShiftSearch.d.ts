import React, { InputHTMLAttributes } from "react";
import "./styles.css";
export interface IDoubleShiftSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    inputStylingProps?: React.CSSProperties;
    textPosition?: "left" | "right";
    helperText?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    closeOnESCPress?: boolean;
    isInputActive?: boolean;
}
declare function DoubleShiftSearch({ onBlur, onChange, inputStylingProps, closeOnESCPress, isInputActive, textPosition, placeholder, helperText, }: IDoubleShiftSearchProps): JSX.Element;
export default DoubleShiftSearch;
