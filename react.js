//React Rules

//JSX must return single parent element, you cannot return multiple element without wrapping single parent 
//div or react.fragment

// return(
//     <h1>hii</h1>
//     <p>How was your day</p> //showing error 
// )

return(
    <div>
     <h1>Hello Guys</h1>
     <p>How was your day</p>
    </div>
)

return(
    <>
    <h1>Hello Everyone</h1>
    <p>Everything is allright</p>
    </>
)

//Rule 2- Use className insted of class

//wrong
return(
<>
 <div class="container"></div>
</>
)

return(
    <>
    <div className="demo"></div>
    </>
)

//Rule 3- Self Closing Tags must end with slash(if tag has no children it must be self closed)

//<input><input/>

//Rule 4 - JSX element must be closed properly

//<p></p> 

//Rule 4 - Use CamelCase for event handlers ex, (onClick, onChange)

//<button onClick="{handleClick}">Clike Me</button>


///Rule 5 - you can only return JSX from components (react component must return only JSX or null)

function MyComponent(){
    return <div>Hello</div>;
}

//Rule 6 - Attributes follow Javascript Naming conventions (for ex, use htmlFor insted for lables)
return(
    <>
<label htmlFor="name">Name:</label>
<input id="name"/>
</>
)

//Rule 7 - conditional Rendering using ternary or Logical AND (render element using {})

{isLoggedIn ? <LogoutButton/> :<LoginButton/>}
{message.length > 0 && <MessageList/>}

//Rule 8 - Comments in JSX {/*  */} (// won't work in JSX)

return(
    <div>
        {/* This is a comments */}
        <p>
            Hello
        </p>
    </div>
)


//Rule 9 - Style Properties are written in camelCase | must use javascript object inline class

return(
    <div style={{color:"red",fontSize:"16px"}}>
       Text
    </div>
)