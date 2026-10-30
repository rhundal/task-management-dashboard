export default function Dashboard() {
  return (
    <div className="bg-dashboard-bg w-full p-5 rounded-2xl">
      {" "}
      <div className="flex flex-col md:flex-row justify-between border-3 border-border-custom">
        <div className="flex justify-center md:justify-start ml-15 p-5">
          {" "}
          <h1 className="text-txt-primary text-3xl font-semibold">
            OceanTides
          </h1>
        </div>
        <div className="flex justify-center md:justify-end mr-15 p-5">
          {" "}
          <button className="text-surface-card bg-txt-primary py-3 px-7 rounded-xl shadow-xl">
            + Add Task
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-col md:flex-row gap-5 w-full border-3 border-border-custom">
        <div className="bg-sidebar-bg flex flex-col border-2 border-red-200 w-[18%]">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bg-dashboard-bg border-3 border-border-custom w-full">
          {" "}
          my cards display area here
        </div>
      </div>
    </div>
  );
}
