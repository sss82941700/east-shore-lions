export default function Login() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>會員登入</h1>
      <form>
        <input type="text" placeholder="帳號" /><br /><br />
        <input type="password" placeholder="密碼" /><br /><br />
        <button type="submit">登入</button>
      </form>
    </main>
  );
}
