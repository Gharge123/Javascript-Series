//React JSX

//JSX stands for javascript XML
//JSX allows us to write html in react
//JSX makes it easier to write and add html in react

//JSX Rules

//JSX must returns single parent element(Cannot return multiple element without wrapping them in a parent element)

//This will cause an error          
// return(
//     <h1>Hello, World!</h1>
//     <p>What was going on</p>
// )

//wrap with parent element like div or React.Fragment
return (
    <div>
        <h1>Hello, World!</h1>
        <p>What was going on</p>
    </div>
)

return (
    <>
        <h1>Hello, World!</h1>
        <p>What was going on</p>
    </>
)


