import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import cookie from 'js-cookie'

const Navbar = () => {

    const router = useRouter();
    const {token} = parseCookies();
    let user = false;
    if(token){
      user = true;
    }
    else{
      user = false;
    }

    function isActive(route){
      if(route==router.pathname){
        return "active"
      }
      else ""
    }

    return ( 
      <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <Link href="/"><a className="brand-logo left">Bpazes Auth</a></Link>
        <ul id="nav-mobile" className="right">
          { user ? 
          <>
            <li className={isActive('/account')}><Link href="/account"><a>Account</a></Link></li>
            <li><button className="btn red" onClick={() => {
              cookie.remove('token');
              cookie.remove('user')
              router.push('/login');
            }}>logout</button></li>
            </>
          :
          <>
          <li className={isActive('/signup')}><Link href="/signup"><a>Register</a></Link></li>
          <li className={isActive('/login')}><Link href="/login"><a>Login</a></Link></li>
          </>
          }
          
        </ul>
      </div>
    </nav>
     );
}
 
export default Navbar;