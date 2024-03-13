export default function Cards({ head, value }) {
  return (
    <div className="w-[50%] shadow p-5 space-y-3 bg-white rounded-md ">
      <h4 className="text-lg">{head}</h4>
      <h1 className="text-3xl font-semibold">{value}</h1>
    </div>
  );
}
