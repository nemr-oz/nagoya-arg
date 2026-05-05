import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="border bg-white p-8">
        <h2 className="text-2xl font-semibold leading-relaxed">
          人間の記憶・感情・選択行動を、情報構造として理解する。
        </h2>

        <p className="mt-6 leading-8">
          本研究室では、心理計測、行動解析、計算モデルを用いて、
          人間の意思決定や情動変化の背後にある情報構造を研究しています。
          特に、外部刺激が記憶の再構成に与える影響について、
          学際的な観点から解析を行っています。
        </p>

        <p className="mt-4 leading-8">
          実験心理学、認知科学、情報学の手法を組み合わせ、
          主観的な感情や違和感を定量的に扱うことを目指しています。
        </p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="border bg-white p-6">
          <h2 className="border-b pb-3 text-xl font-semibold">
            新着情報
          </h2>

          <div className="mt-5 space-y-5 text-sm">
            <article>
              <p className="text-gray-500">2026.04.12</p>
              <p className="mt-1">
                2026年度の研究室配属説明会を実施しました。
              </p>
            </article>

            <article>
              <p className="text-gray-500">2026.03.20</p>
              <p className="mt-1">
                夜間実験への参加者募集を開始しました。
              </p>
            </article>

            <article>
              <p className="text-gray-500">2026.02.02</p>
              <p className="mt-1">
                山上地区実験室の利用予定を更新しました。
              </p>
            </article>
          </div>

          <div className="mt-6 text-right text-sm">
            <Link to="/news" className="text-[#234b5f] underline">
              新着情報一覧へ
            </Link>
          </div>
        </div>

        <aside className="border bg-white p-6 text-sm">
          <h2 className="border-b pb-3 text-lg font-semibold">
            連絡先
          </h2>

          <p className="mt-5 leading-7">
            名古屋大学 情動情報構造研究室
            <br />
            東山キャンパス 山上地区
            <br />
            E-mail: info@ais.nagoya-u.example
          </p>

          <p className="mt-5 text-xs leading-6 text-gray-500">
            学生の研究室見学は随時受け付けています。
            希望者はメールにてお問い合わせください。
          </p>
        </aside>
      </section>

      <section className="mt-10 border bg-white p-6">
        <h2 className="border-b pb-3 text-xl font-semibold">
          研究テーマ
        </h2>

        <div className="mt-5 space-y-4 leading-8">
          <p>・情動記憶の再構成に関する研究</p>
          <p>・外部刺激が判断傾向に与える影響の解析</p>
          <p>・非言語的意思決定の計測とモデル化</p>
        </div>

        <div className="mt-6 text-right text-sm">
          <Link to="/research" className="text-[#234b5f] underline">
            研究内容を見る
          </Link>
        </div>
      </section>
    </Layout>
  );
}