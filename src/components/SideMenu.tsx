import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { HomeIcon, NotificationIcon, SettingsIcon } from "./icons";

export default function SideMenu() {
  return (
    <aside>
        <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">

          <Logo />
        </div>

        <ul>
          <MenuItem url="/" text="Home" icon={<HomeIcon />} />
          <MenuItem url="/settings" text="Settings" icon={<SettingsIcon />} />
          <MenuItem url="/notifications" text="Notifications" icon={<NotificationIcon />} />
        </ul>
    </aside>
  )
}
