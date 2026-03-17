# LyricPromptGen - 歌词提示词生成器

LyricPromptGen 是一个基于 Flask 开发的歌词创作辅助工具，只需一句话，就可以生成专业的歌词提示词。它为音乐创作者提供了结构化的歌词创作指导，包含不同音乐风格的提示词模板，帮助用户快速进入创作状态。

## 项目概述

LyricPromptGen 旨在解决音乐创作者在歌词创作初期的灵感瓶颈问题。通过提供结构化的提示词模板，用户只需输入创作主题，系统就能生成包含创作标准、技法指导、结构建议等专业内容的歌词创作提示词，大大降低创作门槛，提高创作效率。

## 核心功能

- **多风格支持**：支持民谣、古风、华语流行、R&B 等多种音乐风格的歌词创作提示
- **智能模板**：预设专业的歌词创作标准和技巧指导
- **一键生成**：输入主题即可生成完整的创作提示词
- **实时预览**：Markdown 格式展示，支持实时查看效果
- **用户友好**：简洁直观的界面设计，操作简单

## 技术栈

- **后端框架**：Flask 3.0.0
- **前端技术**：HTML5 + CSS3 + JavaScript
- **Markdown 渲染**：marked.js
- **部署支持**：支持本地部署和 Docker 容器化部署

## 功能说明

1. **选择类别**：点击类别按钮（民谣、古风、华语流行、R&B），只能单选
2. **输入主题描述**：在文本框中输入你的歌词创作主题
3. **生成提示词**：点击生成按钮，系统会将你的主题插入到对应的提示词模板中
4. **查看结果**：生成的提示词会以 Markdown 格式在展示框中渲染

## 部署方式

### 本地部署

#### 1. 环境准备
- Python 3.6+
- pip 包管理器

#### 2. 安装依赖
```bash
pip install -r requirements.txt
```

#### 3. 启动服务
```bash
python app.py
```

#### 4. 访问应用
打开浏览器访问 http://localhost:5000

### Docker 部署

#### 1. 构建镜像
```bash
docker build -t lyricpromptgen .
```

#### 2. 运行容器
```bash
docker run -p 5000:5000 lyricpromptgen
```

#### 3. 访问应用
打开浏览器访问 http://localhost:5000

### 生产环境部署（推荐使用 Gunicorn）

#### 1. 安装生产环境依赖
```bash
pip install -r requirements.txt
```

#### 2. 使用 Gunicorn 启动服务
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 项目结构

```
LyricPromptGen/
├── LyricPrompts/              # 歌词提示词文件
│   ├── FolkMusic_LyricPrompt_民谣.md
│   ├── GuFeng_LyricPrompt_古风.md
│   ├── MandarinPop_LyricPrompt_华语流行.md
│   └── R&B_LyricPrompt_R&B.md
├── app.py                     # Flask 后端服务
├── static/                    # 静态文件
│   ├── style.css             # 样式文件
│   └── script.js             # 前端逻辑
├── templates/                 # HTML 模板
│   └── index.html            # 主页面
├── requirements.txt           # Python 依赖
└── README.md                  # 项目说明
```

## 使用示例

1. 选择音乐风格（如：华语流行）
2. 输入创作主题（如：一个关于毕业季的青春故事）
3. 点击"生成提示词"按钮
4. 查看生成的专业歌词创作提示词

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过 GitHub Issues 联系项目维护者。