import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () =>
        <div className="container py-4 font-balooDaRegular">
            <Outlet />
        </div>,
});