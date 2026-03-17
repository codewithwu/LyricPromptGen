# Docker部署说明

## 项目概述
LyricPromptGen 是一个基于Flask的Python Web应用，用于生成歌词提示词。此文档说明如何使用Docker部署该项目。

## 部署步骤

### 2. 启动服务
```bash
docker-compose up -d
```

### 3. 验证服务
访问 http://localhost:5000 检查应用是否正常运行。

### 4. 查看日志
```bash
docker-compose logs -f
```

### 5. 停止服务
```bash
docker-compose down
```

## 目录结构
```
LyricPromptGen/
├── Dockerfile              # Docker镜像构建配置
├── docker-compose.yml      # Docker Compose服务编排
├── app.py                 # Flask应用主文件
├── requirements.txt       # Python依赖
├── static/                # 静态文件目录
├── templates/             # 模板文件目录
└── LyricPrompts/          # 歌词提示词模板目录
```