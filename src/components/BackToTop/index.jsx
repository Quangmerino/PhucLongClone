import { BackTop } from "antd";

export default function BackToTop() {
  return (
    <BackTop
      className="absolute z-50 cursor-pointer right-6 bottom-14 text-green-600 md:right-14"
      style={{ fontSize: "30px" }}
    />
  );
}
