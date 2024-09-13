import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f0d7124bc6da705babb6477f0d6ae95b~c5_300x300.webp?lk3s=a5d48078&nonce=30816&refresh_token=7a36422ef5a45f328c19115867e6a79c&x-expires=1726128000&x-signature=ZiYSZjWDFlS9OuDaRzEvnfhml9c%3D&shp=a5d48078&shcp=c1333099"
        alt="Avatar"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
