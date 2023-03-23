export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="name" className="block">
          Username:
        </label>
        <input className="block input-md p-1"></input>
        <label htmlFor="password" className="block">
          Password:
        </label>
        <input type="password" className="block input-md p-1"></input>
        <button type="submit" className="btn-wide">
          Login
        </button>
      </form>
    </>
  );
}
