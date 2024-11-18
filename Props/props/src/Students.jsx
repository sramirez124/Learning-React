import PropTypes from "prop-types"

function Student(props){
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h2>My age is {props.age}</h2>
            <h2>Am I a student? {props.isStudent ? "Yes" : "No"}</h2>
        </div>
    )
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "What? What name is Who?",
    age: 0,
    isStudent: false
}
export default Student