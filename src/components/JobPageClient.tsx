'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomeComponent from "./HomeComponent";
import JobDetail from "./JobDetail";
import JobEntries from "../utils/JobEntries.json";
import { IJobItems } from "../utils/interfaces";

export default function JobPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedJob, setSelectedJob] = useState<IJobItems | null>(null);
  
  useEffect(() => {
    const jobId = searchParams.get('job');
    if (jobId) {
      const jobIdNumber = parseInt(jobId);
      const foundJob = JobEntries.find(job => job.id === jobIdNumber);
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
        router.push('/');
      }
    } else {
      setSelectedJob(null);
    }
  }, [searchParams, router]);

  const handleJobSelect = (job: IJobItems) => {
    setSelectedJob(job);
    router.push(`/?job=${job.id}`);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      {!selectedJob ? (
        <HomeComponent onJobSelect={handleJobSelect} />
      ) : (
        <JobDetail job={selectedJob} onBack={handleBackToList} />
      )}
    </div>
  );
}