import Switcher from "../common/Switcher";
import { Dropdown as AntDropdown } from "antd";
import { userPath } from "../../routes/routeConfig";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import links from "../../assets/image/links";
import { useLocation, useNavigate } from "react-router-dom";
import { selectIsDarkTheme, toggleTheme } from "../../redux/themeSlice";
import { UserOutlined, HomeOutlined, MessageOutlined } from "@ant-design/icons";

function Dropdown() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  const items = [
    {
      label: (
        <div className="py-1">
          <div className="flex justify-center mt-2">
            <Switcher isDarkTheme={isDarkTheme} handleChange={handleChange} />
          </div>
          <ul className="mt-2 space-y-2">
            <DropdownItem
              text="Home"
              icon={<HomeOutlined />}
              path={userPath?.home}
            />
            <DropdownItem
              text="Services"
              icon={<UserOutlined />}
              path={userPath?.service}
            />
            <DropdownItem
              text="Contact"
              icon={<MessageOutlined />}
              path={userPath?.contact}
            />
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <AntDropdown
        menu={{
          items,
        }}
        arrow={{
          pointAtCenter: true,
        }}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName="custom-dropdown"
      >
        <div className="cursor-pointer hover:scale-110 duration-300">
          <div className="overflow-hidden rounded-full w-11 h-11 mx-auto shadow-md shadow-black ">
            <img src={links?.profile} alt="User" />
          </div>
        </div>
      </AntDropdown>
    </Fragment>
  );
}

function DropdownItem({ text, icon, path }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === path;

  return (
    <li
      onClick={() => navigate(path)}
      className={`${
        isActive && "bg-light-purple text-blue-500 font-bold"
      } flex items-center cursor-pointer px-2 py-1 hover:bg-dark-white hover:text-blue-500 rounded-md text-base space-x-2`}
    >
      {icon}
      <span className="font-medium hover:text-blue-500">{text}</span>
    </li>
  );
}

export default Dropdown;
