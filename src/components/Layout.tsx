import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1f2a2e]">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          {/* 上段：タイトル + 検索 */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-semibold">
                情動情報構造研究室
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                名古屋大学 情報学研究科
              </p>
            </div>

            {/* 🔍 検索フォーム */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="border border-[#d6d2c4] bg-[#faf9f5] px-3 py-1 text-sm w-36 focus:outline-none"
              />
              <button
                type="submit"
                className="text-sm px-3 py-1 border border-[#d6d2c4] bg-white"
              >
                検索
              </button>
            </form>
          </div>

          {/* ナビ */}
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t pt-4 text-sm">
            <Link to="/">トップ</Link>
            <Link to="/news">新着情報</Link>
            <Link to="/research">研究内容</Link>
            <Link to="/members">メンバー</Link>
            <Link to="/publications">研究業績</Link>
            <Link to="/records">資料</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {children}
      </div>

      <footer className="border-t bg-white mt-10">
        <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-gray-500">
          © Laboratory of Affective Information Structures
        </div>
      </footer>
    </main>
  );
}