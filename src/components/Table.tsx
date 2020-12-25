import React from "react";

export type TablePropsType = {
    value: number
    maxValue: number
}

export function Table(props: TablePropsType) {
    return (
        <div className={props.value === props.maxValue ? "tableRed" : "table"}>
            {props.value}
        </div>
    )
}