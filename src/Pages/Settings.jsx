
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Camponents/UI/Button";

function Settings({ darkMode, setDarkMode }) {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [language, setLanguage] = useState("English");
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    role: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSaveChange = () => {
    const { fullName, phone, email, company, role } = profile;
    if ([fullName, phone, email, company, role].some((value) => value.trim() === "")) {
      alert("Please fill all profile fields before saving.");
      return;
    }

    alert("Profile changes saved successfully.");
  };

  const handleUpdatePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;
    if ([currentPassword, newPassword, confirmPassword].some((value) => value.trim() === "")) {
      alert("Please fill all password fields before updating.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    alert("Password updated successfully.");
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleChange = () => {
    const newValue = !emailNotifications;
    setEmailNotifications(newValue);

    if (newValue) {
      alert("Email notifications enabled.");
    } else {
      alert("Email notifications disabled.");
    }
  };

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    alert(`Language changed to ${selectedLang}`);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/*Profile Section*/}
      <section className="bg-white p-6 rounded-lg mb-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Phone No"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="border rounded p-2"
          />

          <input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Company"
            value={profile.company}
            onChange={(e) => setProfile({ ...profile, company: e.target.value })}
            className="border rounded p-2"
          />

          <input
            type="text"
            placeholder="Role"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="border rounded p-2"
          />
        </div>
        <Button onClick={handleSaveChange} type="button" variant="secondary">
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
            value={passwords.currentPassword}
            onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwords.confirmPassword}
            onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
            className="border rounded p-2"
          />
        </div>
        <Button onClick={handleUpdatePassword} type="button" className="mt-2" variant="secondary">
          Update Password
        </Button>
      </section>

      {/*Preference Section*/}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <span>Enable Dark Mode</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={handleChange}
            />
            <span>Email Notifications</span>
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

Settings.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Settings;
