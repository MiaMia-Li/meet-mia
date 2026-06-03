export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Mengyao Li. All rights reserved.
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Built with Next.js · Powered by OpenAI
        </p>
      </div>
    </footer>
  );
}
