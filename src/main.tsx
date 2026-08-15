import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import archiveData from "../app/data/archive.generated.json";
import { WeiboArchive, type Archive } from "./WeiboArchive";
import "./styles.css";
import "./audio.css";
import "./weibo.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WeiboArchive data={archiveData as Archive} />
  </StrictMode>,
);
