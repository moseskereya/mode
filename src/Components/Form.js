import React from 'react';

const Form = () => {
    return (
        <div className="form">
        <form className="details">
            <input type="text" placeholder="Name" name="" value={EventTarget.value}/>
            <input type="password" placeholder="Password" name="" value={EventTarget.value}/>
            <button className="btn" type="submit">submit</button>
        </form>
        </div>
    )
}

export default Form
