import Link from "next/link";

export default function SystemNotFound() {
  return (
    <div className="page-padding flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="label-caps mb-4">Entry not found</p>
      <h1 className="serif-display mb-6 text-4xl">System not in archive</h1>
      <Link
        href="/#work"
        className="font-mono text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
      >
        ← Return to index
      </Link>
    </div>
  );
}
