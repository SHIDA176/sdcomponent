import React, { useState } from "react";
import { Button } from "../../components";
import ButtonPage from './ButtonPage'
import clsx from "clsx";

const Home = () => {
  const [btnFlag, setBtnFlag] = useState<Boolean>(false);
  const [activeKey, setActiveKey] = useState<String>('');
  
	const tabs = [
		{
			name: "Button按钮",
			key: "button",
		},
		{
			name: "Input输入框",
			key: "input",
		},
	];

	const clickBtn = (key: String) => {
    setBtnFlag(!btnFlag);
    setActiveKey(key)
	};

	return (
		<div className=" w-auto">
			<div className=" bg-white shadow-md h-11 ">
				<div className=" mt-4">
					<span>SD component</span>
					<span className=" float-right mr-6">
						<Button className=" mr-5" type="white">
							设计
						</Button>
						<Button className=" mr-5" type="white">
							文档
						</Button>
						<Button type="white">组件</Button>
					</span>
				</div>
			</div>
			<div className=" inline-flex">
				<div className=" flex-1">
					{tabs.map((item) => {
						return (
							<div
								className={clsx(
                  "pl-8 pb-4 pt-3 pr-32 hover:text-blue-700 cursor-pointer",
                  "mt-6",
									{ " bg-blue-400 text-white": btnFlag === true && activeKey === item.key },
								)}
								key={item.key}
								onClick={() => clickBtn(item.key)}
							>
								{item.name}
							</div>
						);
					})}
				</div>
        <div>
          {activeKey === 'button' ? <ButtonPage /> : ''}
        </div>
			</div>
		</div>
	);
};
export default Home;
