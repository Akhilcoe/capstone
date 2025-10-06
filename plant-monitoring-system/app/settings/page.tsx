export default function Settings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Settings</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">Manage user roles and permissions</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Manage Users
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Notification Settings</h2>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Email alerts for plant health issues</span>
            </label>
          </div>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">SMS notifications for system updates</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">System Configuration</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scan-interval">
              Scan Interval (minutes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="scan-interval"
              type="number"
              placeholder="30"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image-resolution">
              Image Resolution
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image-resolution"
            >
              <option>Low (640x480)</option>
              <option>Medium (1280x720)</option>
              <option>High (1920x1080)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}

