import React, { InputHTMLAttributes, useEffect, useState } from "react";
import "./styles.css";

export interface IDoubleShiftSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputStylingProps?: React.CSSProperties;
  textPosition?: "left" | "right";
  helperText?: string;
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  closeOnESCPress?: boolean;
  isInputActive?: boolean;
}

function DoubleShiftSearch({
  onBlur,
  onChange,
  inputStylingProps,
  closeOnESCPress = true,
  isInputActive = false,
  textPosition = "right",
  placeholder = "Search",
  helperText = "Press Double Shift Key To Search Menu",
}: IDoubleShiftSearchProps) {
  const [isActive, setIsActive] = useState<boolean>(isInputActive);

  const inputRef = React.useRef<HTMLInputElement>(null);
  let keyPressCount: number = 0;

  const setKeyPressCount = (value: number) => {
    keyPressCount = value;
  };

  const clearCount = async () => {
    setKeyPressCount(0);
  };

  const clearKeyPressCount = () => setTimeout(() => clearCount(), 300);
  const toggleSearchComponent = () => {
    inputRef.current && inputRef.current.focus();
    setIsActive(true);
  };

  const handleDropdownBlur = () => {
    onBlur && onBlur();
    setIsActive(false);
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    let keyCount = keyPressCount;
    if (event.keyCode === 16) {
      // ON SHIFT KEY PRESS
      if (!keyCount || keyCount === 2) {
        keyCount += 1;
        setKeyPressCount(keyCount);
        clearKeyPressCount();
      } else if (keyCount === 1) {
        keyCount += 1;
        setKeyPressCount(keyCount);
        toggleSearchComponent();
        clearKeyPressCount();
      } else if (keyCount === 3) {
        clearCount();
      }
    } else if (closeOnESCPress && event.keyCode === 27) {
      // ESCAPE KEY PRESS
      onBlur && onBlur();
      handleDropdownBlur();
      inputRef.current && inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      clearTimeout(clearKeyPressCount());
    };
     
  }, []);

  const leftHelperTextPosition = textPosition === "left";
  const rightHelperTextPosition = textPosition === "right";

  return (
    <div
      id="dbl-shift-search-wrapper"
      data-testid="test-dbl-shift-search-wrapper"
      className={`${isActive ? "container-active" : ""} double-shift-wrapper`}
    >
      {leftHelperTextPosition && (
        <span aria-hidden="false" aria-label="left-search-input-label">
          {helperText}
        </span>
      )}
      <input
        id="dbl-shift-search-input"
        data-testid="test-dbl-shift-search-input"
        ref={inputRef}
        type="search"
        aria-label="double-shift-search-input"
        style={inputStylingProps}
        className={isActive ? "active" : ""}
        placeholder={isActive ? placeholder : ""}
        onChange={onChange}
        onBlur={handleDropdownBlur}
      />
      {rightHelperTextPosition && (
        <span aria-hidden="false" aria-label="right-search-input-label">
          {helperText}
        </span>
      )}
    </div>
  );
}

export default DoubleShiftSearch;
