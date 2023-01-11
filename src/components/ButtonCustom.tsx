import React from 'react'

type Props = {
    buttonText?: string,
    buttonImage?: React.ReactNode,
    onClick?: (event: any) => void | (() => void),
    buttonStyle?: string,
    buttonType?: "button" | "submit" | "reset",
}

const ButtonCusom = ({ buttonText, onClick, buttonStyle, buttonType, buttonImage }: Props) => {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={buttonStyle ?? "flex flex-col items-center py-0.5 px-[25px] gap-2.5 w-[79px] h-8 text-white font-semibold border text-center bg-primary-button border-primary-button rounded"}>
            {buttonText || buttonImage}
        </button>
    )
}

export default ButtonCusom