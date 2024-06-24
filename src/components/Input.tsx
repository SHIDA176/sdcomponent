import React, { ChangeEvent } from "react";
import clsx from "clsx";

interface InputProps {
	children?: React.ReactNode;
	placeholder?: string;
	type?: "text" | "password" | "number" | "date"; // 定义按钮尺寸
	disabled?: boolean; // 是否禁用
	className?: string;
	required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
}

const Button: React.FC<InputProps> = ({
	children,
	placeholder = "请输入内容",
	type = "text",
	disabled = false,
	className,
	onChange,
  required = false,
  value,
  readOnly = false,
  maxLength,
  minLength
}) => {
	const classStyle = clsx(
		" border border-solid border-gray-300 rounded hover:border-blue-500 pl-4 pt-1 pb-1 w-11/12 disabled:",
		{
			"bg-white disabled:bg-gray-500 ": disabled === true,
		},
	);
	return (
		<input
      placeholder={placeholder}
      required={required}
      type={type}
      disabled={disabled}
      className={classStyle}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      maxLength={maxLength}
      minLength={minLength}

		/>
	);
};

export default Button;
