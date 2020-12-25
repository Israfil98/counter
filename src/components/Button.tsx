import React from "react";

export type ButtonPropsType = {
    title: string
    changeValue: () => void
    isDisabled: boolean
}

export function Button(props: ButtonPropsType) {

    const onClickHandler = () => {
        props.changeValue()
    }

    return (
        <button className="button" onClick={onClickHandler} disabled={props.isDisabled}>
            {props.title}
        </button>
    )
}