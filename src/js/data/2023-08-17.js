dataSetVersion = "2023-08-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Custom Maid 3D2", key: "CM3D2" },
      { name: "Custom Order Maid 3D2", key: "COM3D2" },
      { name: "Custom Maid Online (Unnamed)", key: "CMO" },
     ]
  },
  {
    name: "Filter by Maids Types",
    key: "types",
    tooltip: "Check this to restrict to maids types",
    checked: false,
    sub: [
      { name: "Main trios", tooltip: "three maids that often appear on game box cover", key: "trio" },
      { name: "Rental maids", tooltip: "can hired in CM3D2", key: "rental" },
      { name: "NPC maids", tooltip: "NPC Maids who be your Rival", key: "npc" },
      { name: "Extra maids", tooltip: "can hired in COM3D2", key: "extra" },
      { name: "Secretary maids", tooltip: "A professional maids who guide and help you everything in the first of gameplay", key: "hisou" },
      { name: "Other", tooltip: "other maid that appear in somewhere", key: "other" },
     ]
  },
  {
    name: "Filter by DLC/Append",
    key: "dlc",
    tooltip: "Check this to restrict to characters that appear in certain DLC/Append",
    checked: false,
    sub: [ { name: "Personality Packs (CM3D2 ) ", key: "cmcp" }, { name: "Personality Packs (COM3D2) ", key: "comcp" }, { name: "EX Personality", key: "cpex" }, { name: "CM3D2+ (Act.1) ", key: "act1" }, { name: "Act.2", key: "act2" }, { name: "Act 3.1", key: "act31" }, { name: "GP-01", key: "gp01" }, { name: "GP-02", key: "gp02" }, { name: "Monthy Pack", key: "mp" }, { name: "Official Fanbook", key: "fanbook1" }, { name: "Official Fanbook 2", key: "fanbook2" }
    ]
  },
  {
    name: "Remove  Unnamed Maids",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  },
  {
    name: "Remove uneditable Maids",
    key: "noedit",
    tooltip: "Check this to remove all maids can't editing",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Seidou Maria",
    img: "comtrio01.png",
    opts: {
      series: [ "COM3D2", "trio", ],
      dlc: false
    }
  },
  {
    name: "Himuro Mafuyu",
    img: "comtrio02.png",
    opts: {
      series: [ "COM3D2", "trio", ],
      dlc: false
    }
  },
  {
    name: "Takisawa Risa",
    img: "comtrio03.png",
    opts: {
      series: [ "COM3D2", "trio", ],
      dlc: false
];
