import ChangeLanguageButton from "./changeLanguageButton";
import ChangeThemeButton from "./changeThemeButton";

export default function SettingBar() {
  return (
    <div className="fixed z-80 top-2 right-2 flex gap-1 sm:flex-row flex-col items-end">
      <ChangeLanguageButton />
      <ChangeThemeButton />
    </div>
  );
}
