import Layout from "../components/Layout";

type NewsItem = {
  date: string;
  title: string;
  body: string;
};

const newsItems: NewsItem[] = [
  {
    date: "2026.04.12",
    title: "2026年度の研究室配属説明会を実施しました",
    body: "学部4年生を対象に、研究室の概要、研究テーマ、年間スケジュールについて説明を行いました。",
  },
  {
    date: "2026.03.20",
    title: "夜間実験への参加者募集を開始しました",
    body: "視覚刺激下における反応時間計測のため、夜間帯の実験参加者を募集しています。参加希望者は担当教員までご連絡ください。",
  },
  {
    date: "2026.02.02",
    title: "山上地区実験室の利用予定を更新しました",
    body: "2月以降の実験室利用予定を更新しました。夜間利用時は、必ず入退室記録を残してください。",
  },
  {
    date: "2026.01.18",
    title: "情動記憶課題の予備実験を実施しました",
    body: "外部刺激提示後の記憶想起内容について、予備的な計測を行いました。結果の一部は研究室内で共有予定です。",
  },
  {
    date: "2025.12.09",
    title: "一部資料の公開範囲を変更しました",
    body: "内部資料整理に伴い、一部の実験記録および観察ログの公開範囲を変更しました。",
  },
];

export default function News() {
  return (
    <Layout>
      <h2 className="mb-10 border-l-4 border-[#7a8f7a] pl-4 text-2xl font-semibold">
        新着情報
      </h2>

      <div className="border-t border-[#ddd8c8]">
        {newsItems.map((item, index) => (
          <article
            key={index}
            className="border-b border-[#ddd8c8] py-6"
          >
            <p className="text-sm text-gray-500">{item.date}</p>

            <h3 className="mt-2 text-lg font-medium">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-700">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
}