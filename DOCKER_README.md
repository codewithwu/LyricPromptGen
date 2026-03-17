# Docker部署说明

## 项目概述
LyricPromptGen 是一个基于Flask的Python Web应用，用于生成歌词提示词。此文档说明如何使用Docker部署该项目。

## 部署步骤

### 1. 构建Docker镜像
```bash
docker-compose build
```

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

## 配置说明

### Dockerfile
- 使用多阶段构建优化镜像大小
- 基于Python 3.13-slim镜像
- 使用Gunicorn作为生产级WSGI服务器
- 创建非root用户运行应用，提高安全性
- 暴露5000端口

### docker-compose.yml
- 服务名称：web
- 端口映射：5000:5000
- 卷挂载（只读模式）：
  - LyricPrompts目录
  - static目录
  - templates目录
- 健康检查确保服务可用性
- 重启策略：unless-stopped

## 注意事项
1. 确保项目根目录包含所有必要的文件
2. 卷挂载设置为只读模式，保护容器内的文件系统
3. 使用非root用户运行应用，提高安全性
4. 配置了健康检查确保服务可用性

## 故障排除
如果遇到问题，请检查：
1. Docker和Docker Compose是否已安装
2. 端口5000是否被其他服务占用
3. 查看docker-compose日志获取详细信息

## 升级
要升级应用，只需更新代码并重新构建镜像：
```bash
docker-compose build
docker-compose up -d
```