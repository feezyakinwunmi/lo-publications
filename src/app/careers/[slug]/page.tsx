import { notFound } from "next/navigation";
import { getJobBySlug, getAllJobs } from "../../data/jobsData";
import JobDetailClient from "../../components/JobDetailClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static paths for all jobs (for better performance)
export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobDetailPage({ params }: PageProps) {
  // IMPORTANT: await params before accessing its properties
  const { slug } = await params;
  
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white mt-20 md:mt-0">
      <JobDetailClient job={job} />
    </main>
  );
}