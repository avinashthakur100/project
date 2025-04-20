

export default function CapsuleCard({ item }) {
    return (
      <div
        className="bg-gray-900 shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          {item.capsule_serial}
        </h3>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Type:</span> {item.type}
        </p>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Status:</span> {item.status}
        </p>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Launch Date:</span>{" "}
          {new Date(item.original_launch).toLocaleDateString()}
        </p>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Missions:</span>{" "}
          {item.missions.length > 0
            ? item.missions.map((mission) => mission.name).join(", ")
            : "No missions"}
        </p>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Landings:</span> {item.landings}
        </p>
        <p className="text-white mb-4">
          <span className="font-medium text-white">Reuses:</span> {item.reuse_count}
        </p>
        <p className="text-white italic">{item.details}</p>
      </div>
    );
  }
  