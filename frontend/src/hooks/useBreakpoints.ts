import { useEffect, useState } from 'react';

const useBreakpoints = () => {

    const breakpoints = {
        "*": 0,
        "xs": 384,
        "sm": 512,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "2xl": 1536
    };

    const getBreakpoint = (width: number) => {
        if (width >= breakpoints["2xl"]) return "2xl";
        if (width >= breakpoints["xl"]) return "xl";
        if (width >= breakpoints["lg"]) return "lg";
        if (width >= breakpoints["md"]) return "md";
        if (width >= breakpoints["sm"]) return "sm";
        if (width >= breakpoints["xs"]) return "xs";
        return "";
    }

    const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },);

    return breakpoint;
};

export default useBreakpoints