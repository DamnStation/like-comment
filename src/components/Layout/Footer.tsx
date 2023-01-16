import { memo } from "react"

const Footer = () => {
    return (
        <div className="
        flex
        sticky 
        bottom-0
        inset-x-0 
        left-0
        w-full
        h-32 
        pt-14 
        pl-8 
        text-xs 
        bg-white 
        text-footer
        hover:text-base 
        transition-all 
        z-20
        ">
            Copyright 2022 HackSoft Ltd. All rights reserved. No part of this site may be reproduced without our written permission.
        </div>
    )
}
export default memo(Footer)