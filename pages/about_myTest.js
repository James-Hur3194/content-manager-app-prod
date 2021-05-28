import Navbar from "components/Navbar";

const MyTest = ({children}) => {
    return (
        <>
        <h1>MyTest Component!</h1>
        {children}
        </>
    )
}

function About() {
    return (
        <>
            <Navbar />
            <MyTest >
                <h1>I am about page</h1>
                <h2>Hello World</h2>
                <h3>Hi There!</h3>
            </MyTest>
            <h1>I am about page</h1>
        </>
    )
}

export default About;