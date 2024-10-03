export default function FetchError({ error }: { error: string }) {
  return (
    <div className="rounded-2xl bg-dark-300 w-11/12 sm:max-w-[450px] mt-12">
      <p>We encountered an error while processing your action</p>
      <p>Error: {error}</p>
    </div>
  );
}
