import React from 'react';

export const Button = React.forwardRef((props, ref) => {
    return (
        <button
            type="button"
            className={"btn ml-1 mr-1 rounded btn-" + props.color + ((props.block) ? " btn-block" : "") + ((props.size) ? " btn-" + props.size : "")}
            onClick={() => props.method()}
            ref={props.btn}
        >
            <i className="fas fa-life-ring fa-spin" ref={props.loader} hidden={true}></i> {props.text}
        </button>
    );
})
