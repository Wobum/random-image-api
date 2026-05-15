// 图片列表 - 由 GitHub Actions 自动生成
// 不要手动修改此文件

const IMAGE_PATHS = [
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_003.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_004.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_009.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_012.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_014.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_015.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_017.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_018.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_020.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_022.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_023.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_025.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_028.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_031.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_035.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_038.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_039.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_042.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_044.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_047.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_048.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_051.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_052.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_053.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_056.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_057.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_058.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_060.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_061.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_065.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_069.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_073.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_076.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_077.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_078.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_079.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_082.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_083.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_087.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_088.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_089.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_090.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_092.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_093.jpg",
  "https://raw.githubusercontent.com/Wobum/random-image-api/main/images/image_094.jpg",
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
