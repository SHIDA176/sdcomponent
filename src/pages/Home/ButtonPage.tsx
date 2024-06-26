import React, { useState } from "react";
import { Button, Input } from "../../components";

const ButtonPage = () => {
	const [codeOpen, setCodeOpen] = useState<boolean>(false);

	const showCode = () => {
		setCodeOpen(!codeOpen);
	};

	return (
		<div className=" w-auto  pl-20 mt-4">
			<div>代码演示</div>
			<div className="border border-solid border-blue-400 w-96 h-72 p-12 mt-2">
				<Button className=" mr-4">primary</Button>
				<Button type="white" className=" mr-4">
					link
				</Button>
				<Button type="danger" className=" mr-4">
					danger
				</Button>
				<Button type="secondary" className=" mr-4 mt-2">
					secondary
        </Button>
        <Input />
				<div className=" mt-10 text-sm">按钮类型</div>
				<div className=" mt-2 text-sm">
					按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
				</div>
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
						<code>
             3333
						</code>
					</pre>
				</div>
			) : null}
		</div>
	);
};

export default ButtonPage;
