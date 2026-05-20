
import { useState } from "react";
import Button from "../Camponents/UI/Button";

function Settings({darkMode,setDarkMode}) {
  const[emailNotifications,setemailNotifications ] = useState(false);
  const[language,setLanguage]=useState("English");

  const handleChange=()=>
  {
    const newValue = !emailNotifications;
    setemailNotifications(newValue);
   
    if(newValue)
    {
      alert("Email Notificatins Enabled")
    }
    else
    {
      alert("Email notifications Disabled")
    }
  }

  const handleLangChange=(e)=>
  {
   const selectedLang = e.target.value;
   setLanguage(selectedLang);
   alert(`language changed to ${selectedLang}`)
  }

  return (
    <div className="p-8 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/*Profile Section*/}
      <section className="bg-white p-6 rounded-lg mb-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="full Name"
            className="border rounded p-2 "
          />

          <input
            type="text"
            placeholder="Phone No"
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Email"
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Company"
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Role"
            className="border rounded p-2"
          />
        </div>
        <Button className="px-4 py-2 rounded-md" variant="secondary">
          Save Changes
        </Button>
      </section>

      {/*Password Section*/}
      <section className="bg-white p-6 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        <div className="flex flex-col gap-3 mb-4">
          <input
            type="password"
            placeholder="Current Password"
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded p-2"
          />
        </div>
        <Button className="px-4 py-2 rounded-md mt-4" variant="secondary">
          {" "}
          Update Password
        </Button>
      </section>

      {/*Preference Section*/}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" 
            checked={darkMode}
            onChange={(e)=>setDarkMode(e.target.checked)}
            />
            Enable Dark Mode
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox"
            checked={emailNotifications}
            onChange={handleChange}
            />
            Email Notifications
          </label>

          <select className="p-2 border rounded w-40"
          value={language}
          onChange={handleLangChange}>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </section>
    </div>
  );
}

export default Settings;
