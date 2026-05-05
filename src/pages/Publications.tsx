import Layout from "../components/Layout";

type Paper = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  note?: string;
};

const papers: Paper[] = [
  {
    title:
      "Reconstruction of Affective Memory Under Visual Stimulus Conditions",
    authors: "Y. Yamamoto, M. Nakamura",
    journal: "Journal of Cognitive Systems, 2025",
    year: "2025",
  },
  {
    title:
      "Non-verbal Decision Making and Latent Emotional Bias",
    authors: "M. Nakamura, K. Sato",
    journal: "Cognitive Science Review, 2024",
    year: "2024",
  },
  {
    title:
      "Temporal Distortion in Memory Recall Induced by External Stimuli",
    authors: "Y. Yamamoto, A. Tanaka",
    journal: "Neural Processing Letters, 2024",
    year: "2024",
  },
  {
    title:
      "Anomalous Synchronization in Subject Response Patterns",
    authors: "Y. Yamamoto, K-11",
    journal: "Internal Report, 2023",
    year: "2023",
    note: "※一部非公開",
  },
  {
    title:
      "Observation Log: F-23",
    authors: "—",
    journal: "Unpublished",
    year: "2023",
    note: "※閲覧制限",
  },
];

export default function Publications() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-10 border-l-4 border-[#7a8f7a] pl-4">
        研究業績
      </h2>

      <div className="border-t border-[#ddd8c8]">
        {papers.map((p, i) => (
          <div
            key={i}
            className="py-5 border-b border-[#ddd8c8]"
          >
            <p className="text-sm text-gray-500">{p.year}</p>

            <p className="mt-1 font-medium">
              {p.title}
            </p>

            <p className="text-sm mt-2 text-gray-700">
              {p.authors}
            </p>

            <p className="text-sm text-gray-600">
              {p.journal}
            </p>

            {p.note && (
              <p className="text-xs text-gray-400 mt-2">
                {p.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}