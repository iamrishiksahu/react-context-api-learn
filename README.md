# Steps to implement useContext hook in react:

## Step 1: Create a context file under directory src/context and name the file as (say Auth Context).

## Step 2: Implement this in the Authcontext:

epxort const AuthContext = createContext();

## Step 3: Implement a provider for the above created context. All the states which should be available in the application shall be declared under this provider

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({email: 'test@gmail.com', pass: 'rks}, accessCode: '1');

    return(
        <AuthProvider.Provider value={auth}>
            {children}
        </AuthProvider>
    )
}

## In Step 3: As described above, you need to destructure the children item from the argument of the component and then create a provider element to specify the data or functions which will be available in the context.

## Step 4: Create the child compnent and implement the context as folliws:

export const Dashboard = () => {


    //Destructure the data availble from the AuthContext
    const { email, pass, accessCode } = useContext(AuthContext); // imported AuthContext

    // Using the varaibles in this component
    return(
        <h2>Email: {email}, pass: {pass}, accessCode: {accessCode}</h2>
    )

}

### Above is the correct way of implementing the context api to make data available between components without props drilling.


- Rishik Sahu (iamrishiksahu@gmail.com)