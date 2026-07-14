interface Login {
    isLogin: boolean;
    name: string;
}

function WrappedComponent(props: Login) {
    return (<>
        {props.isLogin ? `Welcome ${props.name}` : 'Hey you have some login issue'}
    </>)
}

function HOC(WrappedComponent: any) {
    //    return (props:Login) =>  <WrappedComponent {...props}/>
    return function Enhancement(props: Login) {
        return <WrappedComponent {...props} />
    }

}

export default HOC(WrappedComponent);