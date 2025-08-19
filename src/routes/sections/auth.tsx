import LoginPage from "@/pages/sys/login";
import { Suspense } from "react";
import type { RouteObject } from "react-router";
import { Outlet } from "react-router";

const authCustom: RouteObject[] = [
	{
		path: "login",
		element: <LoginPage />,
	},
];


export const authRoutes: RouteObject[] = [
	{
		path: "auth",
		element: (
			<Suspense>
				<Outlet />
			</Suspense>
		),
		children: [...authCustom],
	},
];
