export default function Error({ error }: { error: string }) {
  return (
    <div className="rounded-2xl bg-dark-300 w-11/12 z-10 sm:max-w-[450px] mt-12">
      <p>We encountered an error while processing your action</p>
      <p>Error: {error}</p>
    </div>
  );
}
