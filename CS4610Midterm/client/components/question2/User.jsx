export const User = (props) => {
    var name = props.name;
    var id = props.id;
    var email = props.email;
    var isAdmin = props.isAdmin;

    if(isAdmin === true){
        return(
            <div className="user">
                <p className="isAdmin">{name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
    else{
        return(
            <div className="user">
                <p>{name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}