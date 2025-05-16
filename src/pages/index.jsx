import { useState } from "react";
import zmp from "zmp-sdk";
import { Box, Button, Icon, Page, Text, Avatar } from "zmp-ui";
import Logo from "../components/logo";
import bg from "../static/bg.svg";

function HomePage() {
  const [location, setLocation] = useState(null);

  const handleOpenLocation = async () => {
    try {
      const location = await zmp.getLocation({ type: "wgs84" });
      console.log("Vị trí:", location.latitude, location.longitude);
      setLocation(location); // cập nhật state
    } catch (err) {
      console.error("Không lấy được vị trí:", err);
    }
  };

  const handleTakePhoto = async () => {
    try {
      await zmp.chooseImage({
        count: 1,
        sourceType: ["camera"],
      });
      console.log("Camera đã được mở (ảnh bị bỏ qua)");
    } catch (err) {
      console.error("Không mở được camera:", err);
    }
  };

  return (
    <Page
      className="flex flex-col items-center justify-center space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Avatar>A</Avatar>
        <p style={{ margin: 0 }}>Xin chào A</p>
      </div>
      {/* <Button
        variant="primary"
        suffixIcon={<Icon icon="zi-more-grid" />}
        onClick={() => {
          zmp.openMiniApp({
            appId: "1070750904448149704",
          });
        }}
      >
        Open Zalo Mini App
      </Button> */}
      <Logo className="fixed bottom-8" />
      <Button onClick={handleTakePhoto} className="mt-4">
        Chụp ảnh
      </Button>
      <Button variant="primary" onClick={handleOpenLocation}>
        Click - Định vị
      </Button>

      {location && (
        <Text className="mt-4">
          Vĩ độ: {location.latitude} <br />
          Kinh độ: {location.longitude}
        </Text>
      )}
    </Page>
  );
}

export default HomePage;
