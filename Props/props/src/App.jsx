import Student from "./Students"

function App() {
  return (
    <div>
      <Student name="John" age={30} isStudent={true} />
      <Student name="Jane" age={25} isStudent={false} />
      <Student />
    </div>
  )
}

export default App
