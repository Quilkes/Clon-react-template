export default function App() {
  return (
    <main className="min-h-screen bg-[#1f1f1f] text-white flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-10 h-10 bg-white rounded-lg"></div>
          <span className="text-2xl font-semibold">Clon</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-semibold mb-4 text-zinc-300">
          Ready to Build
        </h1>
        <p className="text-base text-zinc-500 mb-10 max-w-sm mx-auto">
          This is your blank canvas. Describe your vision and watch Clon transform it into reality.
        </p>

        {/* Placeholder Content */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-10 mb-8">
          <p className="text-zinc-600 text-sm">
            Start creating by describing the website you want to build
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-zinc-600">
          Powered by AI
        </p>
      </div>
    </main>
  );
}
