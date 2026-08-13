function UserStatus({status}){
    return status ? <h1>User is Online</h1> : <h1>User not online</h1>
}
export {UserStatus}