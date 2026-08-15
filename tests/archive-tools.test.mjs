import assert from "node:assert/strict";
import test from "node:test";
import { normalizeArchive } from "../scripts/archive-tools.mjs";

test("normalizes dynamic Weibo profiles and YYMMDD dates", () => {
  const root = "WEIBO MEDIA ARCHIVE";
  const eric = "ERIC (에릭)";
  const future = "NEW PROFILE (새 프로필)";
  const special = "Weibo Updates Related to THE BOYZ";
  const archive = normalizeArchive({
    generatedAt: "2026-08-10T00:00:00.000Z",
    nodes: [
      { id: "e", name: eric, type: "folder", path: [root] },
      { id: "n", name: future, type: "folder", path: [root] },
      { id: "s", name: special, type: "folder", path: [root] },
      { id: "e1", name: "260731 (1).jpg", type: "file", mimeType: "image/jpeg", path: [root, eric] },
      { id: "n1", name: "260601 post.mp4", type: "file", mimeType: "video/mp4", path: [root, future] },
      { id: "s1", name: "260626 Yizhiyu Weibo Update #ERIC.jpg", type: "file", mimeType: "image/jpeg", path: [root, special] },
    ],
  });
  assert.deepEqual(archive.profiles.map((profile) => profile.name), ["ERIC", "NEW PROFILE"]);
  assert.equal(archive.profiles[0].media[0].year, 2026);
  assert.equal(archive.profiles[0].media[0].month, 7);
  assert.equal(archive.profiles[1].media[0].kind, "video");
  assert.equal(archive.special.media[0].name, "260626 Yizhiyu Weibo Update #ERIC.jpg");
});
