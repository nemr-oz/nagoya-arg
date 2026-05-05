import Layout from "../components/Layout";

export default function Research() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold border-b pb-3">
        研究内容
      </h2>

      <p className="mt-6 leading-8">
        本研究室では、人間の記憶・感情・意思決定の変化を対象に、
        その背後にある情報構造を明らかにすることを目的としています。
        心理計測、行動実験、計算モデルを組み合わせ、
        認知過程を多角的に解析します。
      </p>

      {/* 研究テーマ1 */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold text-[#234b5f]">
          情動記憶の再構成
        </h3>

        <p className="mt-4 leading-8">
          記憶は固定されたものではなく、想起のたびに再構成されることが知られています。
          本研究では、外部刺激（視覚・音・環境要因など）が記憶の再構成過程に
          どのような影響を与えるかを検討しています。
        </p>

        <p className="mt-4 leading-8">
          特に、刺激提示のタイミングや条件によって、
          想起内容にどのような変化が生じるかを実験的に解析します。
        </p>
      </section>

      {/* 研究テーマ2 */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-[#234b5f]">
          刺激応答実験
        </h3>

        <p className="mt-4 leading-8">
          被験者に対して一定の条件下で刺激を提示し、
          その後の判断傾向や行動変容を観測します。
          反応時間や選択傾向などのデータを収集し、
          認知状態の変化を定量的に評価します。
        </p>

        <p className="mt-4 leading-8">
          実験は安全性を十分に確認したうえで、
          主に東山キャンパス山上地区の実験室にて実施されています。
        </p>
      </section>

      {/* 研究テーマ3 */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-[#234b5f]">
          非言語的意思決定の解析
        </h3>

        <p className="mt-4 leading-8">
          人間の意思決定には、言語化されない感覚的要因が大きく関与しています。
          本研究では、視線計測や反応時間、生理指標を用いて、
          非言語的な選好や違和感を分析します。
        </p>

        <p className="mt-4 leading-8">
          主観報告だけでは捉えにくい認知状態の変化を可視化し、
          意思決定過程の理解を深めることを目指しています。
        </p>
      </section>

      {/* 研究手法 */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-[#234b5f]">
          研究手法
        </h3>

        <ul className="mt-4 space-y-2 leading-7 text-sm">
          <li>・行動実験（反応時間・選択データ）</li>
          <li>・心理計測（主観評価・質問紙）</li>
          <li>・視線計測・生理指標解析</li>
          <li>・計算モデルによる再現</li>
        </ul>
      </section>
    </Layout>
  );
}