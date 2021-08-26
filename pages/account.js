import {parseCookies} from 'nookies'


const Account = () => {
    const {token} = parseCookies()
    const {user} = parseCookies()
    console.log('user', user);
    // let user = false;
    // if(token){
    //   user = true;
    // }
    // else{
    //   user = false;
    // }

    return ( 
        <div className="container">
            <div className="center-align">
                <h4>Welcome to Bpazes Client Challenge</h4>
                <h2> {user} </h2>
            </div>
            
        </div>
     );
}

export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    if(!token){
        const {res} = ctx
        res.writeHead(302,{Location:"/login"})
        res.end()
    }
  
    return {
        props:{}
    }
  }


export default Account;