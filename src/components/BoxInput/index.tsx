import React from 'react';

export const BoxInput = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return <div className="grid gap-2">{children}</div>;
};
