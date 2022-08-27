import React from 'react'

function Alert(props) {

    const cap=(word)=>{
        let capword=word.toLowerCase()
        return capword.charAt(0).toUpperCase() + capword.slice(1)
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type)}</strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert