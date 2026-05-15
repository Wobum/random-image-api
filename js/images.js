// 图片列表 - 由 GitHub Actions 自动生成
// 不要手动修改此文件

const IMAGE_PATHS = [
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/wallhaven-3lv8j6.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/wallhaven-l8emgq.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/wallhaven-rrvd3q.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/下载.jpg"
];

function getRandomImage() {
  const index = Math.floor(Math.random() * IMAGE_PATHS.length);
  return IMAGE_PATHS[index];
}

function getAllImages() {
  return IMAGE_PATHS;
}

function getImageCount() {
  return IMAGE_PATHS.length;
}
