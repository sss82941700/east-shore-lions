export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>東岸獅子會 East Shore Lions Club</h1>
      <ul>
        <li><a href="/login">🔐 登入</a></li>
        <li><a href="/admin">🛠 管理後台</a></li>
        <li><a href="/finance">📊 財報</a></li>
        <li><a href="/gallery">📸 相簿</a></li>
        <li><a href="/calendar">📅 行事曆</a></li>
      </ul>
    </main>
  );
}
