export default function Login() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>會員登入 Login</h1>
      <p>請輸入帳號與密碼。</p>
      <form>
        <input placeholder="帳號" /><br /><br />
        <input type="password" placeholder="密碼" /><br /><br />
        <button type="submit">登入</button>
      </form>
    </main>
  )
}
