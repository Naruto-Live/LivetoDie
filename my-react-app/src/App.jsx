import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

// --- Css Styling Techniques ---
// How to style react components with css
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE


// props = read-only properties that are shared between components. A parent component can send data to a child component can send data to a child component. < Component key=value />

function App() {
  return(
    <>
      {/* <Header/> */}
      <Card/>
      <Button/>
      <Student name="Lucky Bhai" age={20} isStudent={true}/>
      <Student name="Shubham Raj" age={101} isStudent={false}/>
      <Student name="Baigan" age={24} isStudent={true}/>
      <Student name="Sandy" age={19} isStudent={true}/>
      <Student/>
      <Footer/>
    </>
  );
}

export default App
