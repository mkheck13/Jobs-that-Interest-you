import { Suspense } from "react";
import JobPageClient from "../components/JobPageClient";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobPageClient />
    </Suspense>
  );
}