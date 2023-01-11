import React from 'react'

type Props = {
    buttonText: string,
    onClick: (event?: React.FormEvent<HTMLInputElement>) => void,
    buttonStyle?: string,
    buttonType?: "button" | "submit" | "reset",
}

const ButtonCusom = ({ buttonText, onClick, buttonStyle, buttonType }: Props) => {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={buttonStyle ?
                buttonStyle :
                "flex flex-col items-center py-0.5 px-[25px] gap-2.5 w-[79px] h-8 text-white font-semibold border text-center bg-primary-button border-primary-button rounded"}>
            {buttonText}
        </button>
    )
}

export default ButtonCusom