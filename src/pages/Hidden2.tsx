import Layout from "../components/Layout";

export default function Hidden2() {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">
        内部資料：K-11
      </h2>

      <div className="text-sm leading-7 text-gray-700 space-y-6">
        <p>
          管理コード：K-11<br />
          区分：同期対象<br />
          状態：継続
        </p>

        <p>
          本対象は、外部刺激を必要とせず、
          他被験体の反応に対して同期的な挙動を示す。
        </p>

        <p>
          特にF-23において、
          観察記録との一致率が異常に高い。
        </p>

        <p>
          視覚刺激遮断条件下においても、
          同一の発話内容が記録された。
        </p>

        <p>
          被験体間で情報共有が行われた可能性は否定されている。
        </p>

        <p className="text-gray-500">
          記録：
          「同じものを見ている」
        </p>

        <p className="text-gray-500">
          記録：
          「あれは山の上にいる」
        </p>

        <p className="text-gray-500">
          記録：
          「K-11はここにいない」
        </p>

        <p className="text-xs text-gray-400 mt-10">
          ※本資料の閲覧は制限されています
        </p>
      </div>
    </Layout>
  );
}