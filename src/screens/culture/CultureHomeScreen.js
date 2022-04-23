import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import BottomColorStrip from "../../components/BottomColorStrip";
import ImageExpand from "../../components/ImageExpand";
import Sidebar from "../../components/Sidebar";
import { getCultureImages } from "../../firebaseapi/storage";
import Loading from "../../components/Loading";
import { icon } from "../../assets/images";

function CultureHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "culture";
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getImages = async () => {
      const list = await getCultureImages();
      setImageList(list);
      setLoading(false);
    };

    getImages();
  }, []);

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4, paddingBottom: "50px" }}>
        <span className="pagetitle balsamiq-ig">{t("culture")}</span>
        <div style={styles.main}>
          {/* spotify */}
          <p className="balsamiq-ig subtitle">Igbo Music Spotify Playlist</p>
          <div style={{ position: "relative" }}>
            <div
              className="card-ns"
              style={{
                width: "100%",
                height: "380px",
                textAlign: "center",
                backgroundColor: color.white,
                position: "absolute",
                zIndex: -100,
              }}
            >
              <Loading />
            </div>
            <iframe
              style={{
                borderRadius: "12px",
              }}
              src="https://open.spotify.com/embed/playlist/6OEAko3c1E6ageXECJpIK4?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>

          {/* infographics */}
          <p style={{ marginTop: "20px" }} className="balsamiq-ig subtitle">
            Igbo Infographics (In Partnership with OkwuID)
          </p>
          <div
            className="card"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              flexDirection: "row",
              backgroundColor: color.white,
              height: "fit-content",
              justifyContent: "flex-start",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {loading ? (
              <Loading />
            ) : (
              imageList.length > 0 &&
              imageList.map((image, index) => {
                return <ImageExpand key={index} url={image} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
};
export default CultureHomeScreen;
