import React from 'react'
import { RoundedButtonM, RoundedButtonL, LoginBtn, BaseButton } from './button.styles'

export const enum ButtonTypes {
    'LoginBtn',
    'RoundedBtnM',
    'RoundedBtnL',
    'BaseButton',
}

const getButton = (buttonType: ButtonTypes = ButtonTypes.BaseButton) => (
    {
        [ButtonTypes.LoginBtn]: LoginBtn,
        [ButtonTypes.RoundedBtnM]: RoundedButtonM,
        [ButtonTypes.RoundedBtnL]: RoundedButtonL,
        [ButtonTypes.BaseButton]: BaseButton,
    }[buttonType]


)

function Button({ type, children, onClick }: { type: ButtonTypes, children: React.ReactNode, onClick?:()=>Promise<void> | void }) {

    const CustomButton = getButton(type)

    return (
        <CustomButton
        onClick={onClick}
        >
            {children}
        </CustomButton>
    )
}

export default Button