"use client";

import { useEffect, useState } from "react";

interface Doc {
  fileName: string;
  content: string;
}

export default function DocsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const res = await fetch("/api/docs");
        if (!res.ok) throw new Error("Failed to fetch docs");

        const data: Doc[] = await res.json();
        setDocs(data);
      } catch (err) {
        setError((err as Error).message || "문서를 불러오지 못했습니다.");
      }
    }

    fetchDocs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📂 저장된 문서 목록</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {docs.map((doc) => (
          <li
            key={doc.fileName}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            {doc.fileName.replace(/\.md$/, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}
