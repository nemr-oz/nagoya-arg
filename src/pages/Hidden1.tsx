import Layout from "../components/Layout";

export default function Hidden1() {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">
        実験記録：F-23
      </h2>

      <div className="text-sm leading-7 text-gray-700 space-y-6">
        <p>
          管理番号：F-23<br />
          状態：安定<br />
          担当：山本
        </p>

        <p>
          2026年2月14日<br />
          初期刺激提示。被験者は軽度の緊張を示したが、
          応答は正常範囲内であった。
        </p>

        <p>
          2026年2月18日<br />
          視覚刺激条件下において、
          記憶想起の内容に変化が見られた。
          特定の過去事象に対する情動評価が再構成されている。
        </p>

        <p>
          2026年2月21日<br />
          被験者は「山の上にいるもの」について言及。
          指示していない対象への言及が増加。
        </p>

        <p>
          2026年2月23日<br />
          夜間測定中、視線が一定方向に固定される。
          外部刺激の有無と一致しない反応を確認。
        </p>

        <p>
          2026年2月25日<br />
          被験者は実験外の時間においても、
          同様の発話傾向を示すようになった。
        </p>

        <p className="text-gray-500">
          2026年2月26日<br />
          記録はここで中断されている。
        </p>

        <p className="text-xs text-gray-400 mt-10">
          ※一部記録は閲覧制限されています
        </p>
      </div>
    </Layout>
  );
}