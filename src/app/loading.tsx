export default function LoadingPosts() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-700">
      <div className="bg-slate-700">
        <div className="container m-auto p-4">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-white border-t-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
