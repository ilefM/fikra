function FetchError({ error }: { error: string }) {
  return (
    <div className="my-12 text-center text-xl">
      <p>{error}</p>
    </div>
  );
}

export default FetchError;
