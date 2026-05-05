import Layout from "../components/Layout";
import { Link } from "react-router-dom";

type Member = {
  name: string;
  role: string;
  field: string;
  note?: string;
};

const faculty: Member[] = [
  {
    name: "山本 恒一",
    role: "教授",
    field: "情動情報処理 / 記憶再構成モデル",
  },
  {
    name: "中村 美咲",
    role: "准教授",
    field: "感覚刺激と認知変化",
  },
];

const doctor: Member[] = [
  {
    name: "高橋 悠馬",
    role: "D2",
    field: "記憶改変モデルの数理解析",
  },
  {
    name: "K-11",
    role: "D1",
    field: "外部刺激による同調現象",
    note: "※観察対象",
  },
];

const master: Member[] = [
  {
    name: "佐藤 健太",
    role: "M2",
    field: "視覚刺激と意思決定",
  },
  {
    name: "田中 梓",
    role: "M1",
    field: "情動記憶の時間変化",
  },
  {
    name: "F-23",
    role: "研究協力者",
    field: "外部刺激応答",
    note: "※記録対象",
  },
];

const bachelor: Member[] = [
  {
    name: "鈴木 大輔",
    role: "B4",
    field: "認知課題における反応時間分析",
  },
  {
    name: "山田 花",
    role: "B4",
    field: "感覚刺激と短期記憶",
  },
];

export default function Members() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-10 border-l-4 border-[#7a8f7a] pl-4">
        メンバー
      </h2>

      <Section title="教員" members={faculty} />
      <Section title="博士課程" members={doctor} />
      <Section title="修士課程" members={master} />
      <Section title="学部4年" members={bachelor} />
    </Layout>
  );
}

function Section({
  title,
  members,
}: {
  title: string;
  members: Member[];
}) {
  return (
    <div className="mb-12">
      <h3 className="text-sm text-gray-500 mb-4">{title}</h3>

      <div className="border-t border-[#ddd8c8]">
        {members.map((m, i) => (
          <div
            key={i}
            className="py-4 border-b border-[#ddd8c8] flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              {/* ARG仕込み */}
              {m.name === "F-23" ? (
                <Link
                  to="/hidden1"
                  className="font-medium underline decoration-dotted"
                >
                  {m.name}
                </Link>
              ) : m.name === "K-11" ? (
                <span className="font-medium tracking-widest">
                  {m.name}
                </span>
              ) : (
                <span className="font-medium">{m.name}</span>
              )}

              <span className="ml-3 text-sm text-gray-500">
                {m.role}
              </span>

              {m.note && (
                <span className="ml-2 text-xs text-gray-400">
                  {m.note}
                </span>
              )}
            </div>

            <div className="text-sm text-gray-600 mt-2 md:mt-0">
              {m.field}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}