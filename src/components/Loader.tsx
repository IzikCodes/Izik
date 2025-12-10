export default function Loader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      {/* Logo + text */}
      <div className="flex items-center gap-2">
        <img
          src="/glo.PNG"
          alt="Izik Logo"
          className="w-16 h-16 object-contain animate-heartbeat"
        />
        <h1 className="text-white text-2xl font-bold tracking-[0.25em] opacity-0 animate-fadeInHeartbeat">
          izik
        </h1>
      </div>

      {/* Loading subtitle */}
      <p className="mt-4 text-white text-xs tracking-[0.25em] opacity-50 animate-pulse">
        loading
      </p>
    </div>
  );
}
