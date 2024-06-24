import React from "react";
import { Button, Input } from "./../components/index";

export default function button() {
	return (
		<div>
			<Button fullWidth={true} type="primary">测试</Button>
			<Input placeholder="请输入内容"/>
		</div>
	);
}
