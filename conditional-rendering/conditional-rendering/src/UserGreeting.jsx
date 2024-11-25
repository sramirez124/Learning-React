import PropTypes from 'prop-types'

function UserGreeting(props) {
    // One way to do it
    // if (props.isLoggedIn) {
    //     return <h1>Welcome back {props.username}, you are logged in!</h1>
    // } else {
    //     return <h1>Please sign up</h1>
    // }

    // Another way to do it
    // return(props.isLoggedIn ? <h1 className="welcome-message">Welcome back {props.username}, you are logged in!</h1> : 
    //                           <h1 className="login-prompt">Please sign up/log in to continue</h1>)

    // Final way to do it
    const welcomeMessage = <h1 className="welcome-message">
                            Welcome back {props.username}, you are logged in
                            !</h1>

    const loginPrompt = <h1 className="login-prompt">
                        Please sign up/log in to continue
                        </h1>

    return props.isLoggedIn ? welcomeMessage : loginPrompt
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting