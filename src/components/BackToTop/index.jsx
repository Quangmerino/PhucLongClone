import { BackTop } from "antd";

export default function BackToTop() {
  return (
    <BackTop
      className="fixed z-50 cursor-pointer right-14 bottom-14 text-green-600 animate-spin"
      style={{ fontSize: "30px" }}
    />
  );
}
