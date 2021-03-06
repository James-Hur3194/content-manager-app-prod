import React, { useState, useEffect } from "react";

  function CompA(allProps) {

    useEffect(() => {
      console.log("CompA useEffect!");
    }, [allProps.myProp1])

    return (
      <>
      
      <h1>CompA</h1>
      <p>Hello111 Comp A</p>
      <div>My Prop1: {allProps.myProp1}</div>
      <div>My Prop2: {allProps.myProp2}</div>
      <div>My Prop3: {allProps.myProp3.toString()}</div>
      <div>My Prop4: {<allProps.myProp4 />}</div>
      </>
    )
  }

class CompC extends React.Component {

  constructor() {
    super()
    this.state = {
      myValue: 10
    }
  }

  // state = {
  //   myValue: 10
  // }

  changeState(incrementor) {
    this.setState(
      {
        myValue: incrementor
      }
    )
  }

  render() {
    const {myValue} = this.state;
    const {myProp1, myProp2: MyNewComponent} = this.props;
    return(
      <>
      <h1>Hello CompC</h1>
      valueState1: { myValue }
      <button onClick = {() => this.changeState(this.state.myValue + 1)}>+</button>
      <button onClick = {() => this.changeState(this.state.myValue - 1)}>-</button>
      <h2>{myProp1}</h2>
      <MyNewComponent 
              // myProp1={myValue}
              // myProp2="My Custom Value"
              // myProp3={true}
              // myProp4={() => <div>My New JSX!</div>}
      />
      </>
    ) 
  }
}

 function MyComponent() {
  return <h1>My Component!</h1>
}

function Home() {
    // [stateValue, mutateState]
    const [myValue, setValue] = useState(10);
    const [myOtherValue, setOtherValue] = useState(100);

    useEffect(() => {
      //console.log("Use Effect Called!")
    }, [myValue, myOtherValue])

    //console.log("I am called initially and when state is changed");
    // const changeValue = (incrementor) => {
    //   setValue(myValue + incrementor);
    // }

    return (
      <>
      Current Value: <h1>{ myValue }</h1>
      <button onClick = {() => setValue(myValue + 1)}>+</button>
      <button onClick = {() => setValue(myValue - 1)}>-</button>
      <hr></hr>
      Other Value: <h1>{ myOtherValue }</h1>
      <button onClick = {() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick = {() => setOtherValue(myOtherValue - 1)}>-</button>
      {/* <CompA 
      myProp1={myValue}
      myProp2="My Custom Value"
      myProp3={true}
      myProp4={() => <div>My New JSX!</div>}
      /> */}
      <CompC myProp1={myValue} 
              myProp2={
                () => <CompA 
                myProp1={myValue}
                myProp2="My Custom Value"
                myProp3={true}
                myProp4={() => <div>My New JSX!</div>}
                />
              }
      />
      </>
    )
  }

  export default Home;



