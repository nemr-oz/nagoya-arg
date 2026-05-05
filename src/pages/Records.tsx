import Layout from "../components/Layout";
import { Link } from "react-router-dom";

type RecordItem = {
  date: string;
  title: string;
  type: string;
  note?: string;
  path?: string;
  restricted?: boolean;
};

const records: RecordItem[] = [
  {
    date: "2026.04.01",
    title: "研究室概要資料 2026",
    type: "PDF / 1.2MB",
  },
  {
    date: "2026.03.18",
    title: "視覚刺激実験 手順書",
    type: "PDF / 860KB",
  },
  {
    date: "2026.03.05",
    title: "実験参加者向け説明文書",
    type: "PDF / 540KB",
  },
  {
    date: "2026.02.26",
    title: "観察記録：F-23（抜粋）",
    type: "HTML / 内部記録",
    note: "一部閲覧制限あり",
    path: "/hidden1",
    restricted: true,
  },
  {
    date: "2026.02.21",
    title: "夜間測定 入退室記録",
    type: "CSV / 42KB",
    note: "山上地区実験施設",
  },
  {
    date: "2026.02.18",
    title: "同期反応に関する補足資料",
    type: "HTML / 内部資料",
    note: "検索対象外",
    path: "/hidden2",
    restricted: true,
  },
  {
    date: "2026.02.02",
    title: "山上地区実験室 利用申請書",
    type: "PDF / 320KB",
  },
  {
    date: "2026.01.14",
    title: "情動記憶課題 予備実験メモ",
    type: "TXT / 18KB",
  },
  {
    date: "2025.12.09",
    title: "公開範囲変更資料一覧",
    type: "PDF / 210KB",
    note: "一部資料を非公開化",
  },
  {
    date: "2025.11.30",
    title: "削除済み資料一覧",
    type: "INDEX",
    note: "参照先が存在しません",
  },
];

export default function Records() {
  return (
    <Layout>
      <h2 className="mb-10 border-l-4 border-[#7a8f7a] pl-4 text-2xl font-semibold">
        公開資料
      </h2>

      <p className="mb-8 text-sm leading-7 text-gray-600">
        研究室で公開している資料の一覧です。研究内容、実験参加に関する説明文書、
        研究室内で共有された一部資料を掲載しています。
      </p>

      <div className="border-t border-[#ddd8c8] text-sm">
        {records.map((item, index) => (
          <div
            key={index}
            className="grid gap-2 border-b border-[#ddd8c8] py-5 md:grid-cols-[120px_1fr_160px]"
          >
            <p className="text-gray-500">{item.date}</p>

            <div>
              {item.path ? (
                <Link
                  to={item.path}
                  className={
                    item.restricted
                      ? "font-medium text-[#1f2a2e] underline decoration-dotted"
                      : "font-medium text-[#234b5f] underline"
                  }
                >
                  {item.title}
                </Link>
              ) : (
                <p className="font-medium">{item.title}</p>
              )}

              {item.note && (
                <p className="mt-1 text-xs text-gray-500">{item.note}</p>
              )}
            </div>

            <p className="text-xs text-gray-500 md:text-right">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}