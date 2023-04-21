import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

return (
    <div style={{ height: '50px'}}>
        { props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertMsg.type)}:</strong> {props.alertMsg.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}
