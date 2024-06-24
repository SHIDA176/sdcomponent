import React, { useState, ChangeEvent } from "react";
import { Button, Input } from "../../components";

const ButtonPage = () => {
	const [codeOpen, setCodeOpen] = useState<boolean>(false);

	const showCode = () => {
		setCodeOpen(!codeOpen);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(e.target.value, "e");
	};

	return (
		<div className=" w-auto  pl-20 mt-4">
			<div>代码演示</div>
			<div className="border border-solid border-blue-400 w-96 h-72 p-12 mt-2">
				<Input
					placeholder="我是placeholder"
					disabled={false}
          onChange={onChange}
          type="number"
				/>
				<div className=" mt-10 text-sm">基本使用</div>
				<div className=" mt-2 text-sm">基本使用。</div>
			</div>
			<div
				className=" border border-solid border-blue-500 text-center text-sm text-blue-500"
				onClick={showCode}
			>
				查看代码
			</div>
			{codeOpen ? (
				<div className=" border border-solid border-blue-500 text-center">
					<pre>
						<code>3333</code>
					</pre>
				</div>
			) : null}
		</div>
	);
};

export default ButtonPage;
