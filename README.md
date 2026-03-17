# LyricPromptGen
只需一句话，就可以生成专业的歌词提示词。

启动步骤
安装依赖


pip install -r requirements.txt
启动服务


python app.py
访问应用

打开浏览器访问 http://localhost:5000

文件结构

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
└── requirements.txt           # Python 依赖
功能说明
选择类别：点击类别按钮（民谣、古风、华语流行、R&B），只能单选
输入主题描述：在文本框中输入你的歌词创作主题
生成提示词：点击生成按钮，系统会将你的主题插入到对应的提示词模板中
查看结果：生成的提示词会以 Markdown 格式在展示框中渲染
需要我帮你启动服务并测试一下吗？