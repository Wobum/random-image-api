// 图片列表 - 由 GitHub Actions 自动生成
// 不要手动修改此文件

const IMAGE_LIST = [
    // 图片将自动从这里读取
    // 格式: { name: "文件名", url: "GitHub 原始链接" }
];

const IMAGE_PATHS = [
    // 图片路径列表 - 由 update-list.yml 自动生成
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
