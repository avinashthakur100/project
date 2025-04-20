// components/LaunchCard.jsx

export default function LaunchCard({ launch }) {
    return (

      <div
        className="bg-gray-900 shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
      >
        {console.log(launch)}
        <h3 className="text-xl font-semibold text-white mb-2">
          {launch.mission_name}
        </h3>
        <p className="text-white mb-2">
          <span className="font-medium text-white">Rocket:</span>{" "}
          {launch.rocket.rocket_name}
        </p>
        <p className="text-white mb-2">
          <span className="font-medium text-white">Launch Date:</span>{" "}
          {new Date(launch.launch_date_utc).toLocaleDateString()}
        </p>
        <p className="text-white mb-2">
          <span className="font-medium text-white">Launch Site:</span>{" "}
          {launch.launch_site.site_name}
        </p>
        <p className="text-white italic">
          {launch.details || "No details available."}
        </p>
      </div>
    );
  }
  