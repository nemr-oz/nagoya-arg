import Layout from "../components/Layout";

export default function Hidden3() {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">
        山上地区 夜間測定記録
      </h2>

      <div className="text-sm leading-7 text-gray-700 space-y-6">
        <p>
          測定地点：山上地区実験棟 北東側<br />
          時間帯：23:40 - 02:10
        </p>

        <p>
          夜間における視線挙動の測定を実施。
          複数被験体において、
          同一方向への注視が確認された。
        </p>

        <p>
          該当方向には、
          視認可能な対象は存在しない。
        </p>

        <p>
          カメラ記録には何も映っていないが、
          被験体は明確に対象を認識していると発話。
        </p>

        <p className="text-gray-500">
          記録：
          「あそこにいる」
        </p>

        <p className="text-gray-500">
          記録：
          「動いていないのに、見ている」
        </p>

        <p className="text-gray-500">
          記録：
          「ここからは見える」
        </p>

        <p>
          以降の測定は中止された。
        </p>

        <p className="text-gray-500">
          当該地点の立ち入りは現在制限されている。
        </p>

        <p className="text-xs text-gray-400 mt-10">
          ※記録の一部に欠損あり
        </p>
      </div>
    </Layout>
  );
}