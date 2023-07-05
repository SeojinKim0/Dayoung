import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/load">Load</Link>
				</li>
			</ul>
		</div>
	);
};
export default Navbar;
