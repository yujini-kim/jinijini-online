"use client";

import { useEffect, useState } from "react";

interface Doc {
  slug: string;
  content: string;
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [doc, setDoc] = useState<Doc | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDoc() {
      try {
        const res = await fetch(`/api/docs/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch doc");

        const data: Doc = await res.json();
        setDoc(data);
      } catch (err) {
        setError("문서를 불러오지 못했습니다.");
      }
    }

    fetchDoc();
  }, [slug]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{slug}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <pre className="whitespace-pre-wrap">{doc?.content}</pre>
    </div>
  );
}
