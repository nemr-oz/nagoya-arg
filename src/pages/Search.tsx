import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Search() {
  const query = new URLSearchParams(useLocation().search);
  const q = query.get("q");

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">
        検索結果
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        「{q}」の検索結果
      </p>

      {/* 通常結果 */}
      {q === "記憶" && (
        <p className="text-sm">関連ページ：研究内容</p>
      )}

      {/* ARG仕込み */}
      {q === "F-23" && (
        <div className="text-sm">
          <p className="mb-2">1件の記録が見つかりました</p>
          <Link to="/hidden1" className="underline">
            実験記録：F-23
          </Link>
        </div>
      )}

      {q === "K-11" && (
        <div className="text-sm">
          <p className="mb-2">アクセス制限された記録</p>
          <Link to="/hidden2" className="underline">
            内部資料（閲覧注意）
          </Link>
        </div>
      )}

      {/* ヒットなし */}
      {!["記憶", "F-23", "K-11"].includes(q || "") && (
        <p className="text-sm text-gray-400">
          該当する結果は見つかりませんでした。
        </p>
      )}
    </Layout>
  );
}