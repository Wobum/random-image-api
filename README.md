# Random Image API

一个基于 GitHub 的免费随机图片服务。

## 项目结构

```
random-image-api/
├── .github/
│   └── workflows/
│       └── update-list.yml     # 自动更新图片列表
├── images/                      # 图片存放目录
├── js/
│   └── images.js               # 图片列表（自动生成）
├── index.html                  # 主页面
└── .gitignore
```

## 功能特性

- ✅ 完全免费，使用 GitHub 托管
- ✅ 自动扫描 images 目录下的图片
- ✅ 一键部署到 GitHub Pages
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS

## 快速开始

### 1. 创建 GitHub 仓库

1. 登录 GitHub，点击右上角 "+" → "New repository"
2. 仓库名称：`random-image-api`（或你喜欢的名字）
3. 选择 Public（公开仓库）
4. 点击 "Create repository"

### 2. 上传项目文件

将 `random-image-api` 文件夹中的所有文件上传到仓库根目录：
- `.github/workflows/update-list.yml`
- `images/` 文件夹
- `js/images.js`
- `index.html`
- `.gitignore`

### 3. 上传图片

将你的 .jpg/.jpeg 图片上传到 `images/` 文件夹中。

### 4. 启用 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 和 "/ (root)"
4. 点击 Save

等待 1-2 分钟，你的网站就会上线！

### 5. 查看图片列表

每次你上传新图片到 `images/` 文件夹并推送到 GitHub，GitHub Actions 会自动：
1. 扫描 `images/` 目录
2. 更新 `js/images.js` 中的图片列表
3. 推送到仓库

## 使用方式

### 网页访问

直接访问 `https://你的用户名.github.io/random-image-api/`

### 直接链接调用

```html
<img src="https://你的用户名.github.io/random-image-api/">
```

### API 调用

你也可以直接使用 `js/images.js` 中的 `IMAGE_PATHS` 数组来获取随机图片。

## 注意事项

- 图片格式支持：.jpg, .jpeg
- GitHub Pages 有流量限制（每月 100GB）
- 单个文件建议小于 25MB
- 仓库总大小建议小于 1GB
- 测试
