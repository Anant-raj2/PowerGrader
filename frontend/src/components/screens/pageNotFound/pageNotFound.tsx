import React from 'react';

export const PageNotFound = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">Page Not Found</h2>
            </div>
        </>
    );
}
