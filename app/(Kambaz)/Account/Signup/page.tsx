import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" defaultValue="john.Wonderland"/><br/>
      <input placeholder="password" type="password" className="wd-password" defaultValue="123@abc"/><br/>
      <input placeholder="verify password"
             type="password" className="wd-password-verify" defaultValue="123@abc"/><br/>
      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
