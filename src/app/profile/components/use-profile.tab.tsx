import React from "react"

const UseProfileTab = () => {
  const user = {
    deactivated: false,
    email: "rohan@user.com",
    firstName: "rohan",
    lastName: "karankot",
  }

  return (
    <div className="container mx-auto  rounded-md  shadow-md">
      <h1 className="mb-4 text-2xl font-bold">User Profile</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">Deactivated</label>
          <input
            type="text"
            value={user.deactivated.toString()}
            readOnly
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" value={user.email} className="mt-1 w-full rounded-md border p-2" />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" value={user.firstName} className="mt-1 w-full rounded-md border p-2" />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" value={user.lastName} className="mt-1 w-full rounded-md border p-2" />
        </div>
      </div>
    </div>
  )
}

export default UseProfileTab
