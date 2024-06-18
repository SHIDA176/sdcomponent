import React from "react";
import { Button } from "../../components";

const Home = () => {
	return (
		<div className=" w-auto">
			<div className=" bg-white shadow-md h-11 ">
				<div className=" mt-4">
					<span>SD component</span>
					<span className=" float-right mr-6">
						<Button className=" mr-5" type="white">设计</Button>
						<Button className=" mr-5"  type="white">文档</Button>
						<Button type="white">组件</Button>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Home;
