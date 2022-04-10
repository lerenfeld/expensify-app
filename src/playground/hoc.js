// Higher Order Component(HOC) 

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info - please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated
                ? (<WrappedComponent {...props} />)
                : (<p>Please login to see the view</p>)
            }

        </div>
    )
}

const AuthInfo = requireAuthentication(Info)


//ReactDOM.render(<AdminInfo isAdmin={true} info='There are the deatails' /> , document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the deatails Auth' />, document.getElementById('app'))
