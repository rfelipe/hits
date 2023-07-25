import Image from "next/image";
import { useState } from "react";

type Props = {
    overlay?: boolean;
};

const Overlay = ({ overlay }: Props) => {
    return (
        <div className={`fixed bg-black w-[100%] h-[100vh] top-0 left-0 opacity-50 z-10 ${overlay ? "" : "hidden"}`} ></div>
    )
};

export default Overlay;
