import React from "react";
import clsx from "clsx";

interface ButtonProps {
	children: React.ReactNode;
	type?: "primary" | "secondary" | "danger" | "white"; // 定义按钮变体
	size?: "sm" | "md" | "lg"; // 定义按钮尺寸
	onClick?: () => void; // 点击事件处理器
	fullWidth?: boolean; // 是否全宽显示
	disabled?: boolean; // 是否禁用
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	type = "primary",
	size = "md",
	fullWidth = false,
	disabled = false,
	onClick,
	className
}) => {
	const classStyle = clsx(
		"relative",
		"inline-flex items-center justify-center", // 水平垂直居中
		"transition duration-300 ease-in-out", // 平滑过度效果
		"focus:shadow-outline", // 鼠标焦点时的阴影效果
		"disabled:opacity-50 disabled:pointer-events-none",
		"rounded", // 圆角
		// hover样式
		{
			"bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700":
				type === "primary",
			"bg-gray-600 text-white hover:bg-gray-700 active:bg-blue-800":
				type === "secondary",
			"bg-red-500 text-white hover:bg-red-600 active:bg-red-700":
				type === "danger",
				"hover:text-blue-600 active:text-blue-700":
				type === "white",
		},
		// 根据大小设定尺寸
		{
			"px-2 py-1 text-xs": size === "sm",
			"px-4 py-2 text-sm": size === "md",
			"px-6 py-3 text-base": size === "lg",
			'px-0 py-0': type === 'white'
		},
		fullWidth && "w-full", // 全宽样式
		// 圆角大小根据大小变化
		{
			rounded: size === "sm",
			"rounded-md": size === "md",
			"rounded-lg": size === "lg",
		},
	);
	return (
		<button type="button" className={classStyle + className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
