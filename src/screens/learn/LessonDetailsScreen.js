import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import NavigationCard from "../../components/NavigationCard";
import ProfileCard from "../../components/ProfileCard";
import LessonCard from "./components/LessonCard";
import DetailsCard from "./components/DetailsCard";
import BottomColorStrip from "../../components/BottomColorStrip";
import { Spacer } from "../../components/utils";
import Sidebar from "../../components/Sidebar";
import { useSearchParams } from "react-router-dom";

function LessonDetailsScreen() {
  const { t, i18n } = useTranslation("common");
  let [searchParams, setSearchParams] = useSearchParams();
  const page = "learn";

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <Spacer height="20px" />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <div style={styles.main}>
          <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
          <span
            style={{ color: color.darkgrey }}
            className="subtitle balsamiq-ig"
          >
            Level: Beginner
          </span>
        </div>
        <Spacer height="20px" />
        <LessonCard title={"Greeting - Ndewoo"} description={true} />
        <Spacer height="40px" />
        {/* TABS */}
        <p className="subtitle balsamiq-ig">{t(searchParams.get("tab"))}</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {searchParams.get("tab") !== "lessonnotes" ? (
            <>
              <DetailsCard title={"Greeting"} page="viewtopics" />
              <DetailsCard title={"Introduction"} page="viewtopics" />
            </>
          ) : (
            <>
              <DetailsCard
                title={"Greeting"}
                page="lessonnotes"
                description={true}
              />
              <DetailsCard
                title={"Introduction"}
                page="lessonnotes"
                description={true}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
export default LessonDetailsScreen;
