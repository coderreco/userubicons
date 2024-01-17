import fs from "fs";
import path from "path";

const iconsDir = path.join(process.cwd(), "icons");
console.log("iconsDir", iconsDir);

function readIcons() {
  const icons = [];

  if (fs.existsSync(iconsDir)) {
    fs.readdirSync(iconsDir).forEach((file) => {
      const filePath = path.join(iconsDir, file);
      const iconName = path.parse(file).name;
      const svgCode = fs.readFileSync(filePath, "utf8");

      icons.push({ name: iconName, code: svgCode });
    });
  } else {
    console.error("Icons directory does not exist");
  }

  return icons;
}

export default readIcons;
