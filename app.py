from flask import Flask, render_template, jsonify, request
import os

app = Flask(__name__)

# 配置 LyricPrompts 文件夹路径
LYRIC_PROMPTS_DIR = os.path.join(os.path.dirname(__file__), 'LyricPrompts')


def get_lyric_files():
    """扫描 LyricPrompts 文件夹，返回文件名和类别映射"""
    files = []
    if os.path.exists(LYRIC_PROMPTS_DIR):
        for filename in os.listdir(LYRIC_PROMPTS_DIR):
            if filename.endswith('.md'):
                # 从文件名提取类别（按 "_" 分割，取最后一部分，去掉 .md）
                parts = filename.replace('.md', '').split('_')
                category = parts[-1] if parts else filename
                files.append({
                    'filename': filename,
                    'category': category
                })
    return files


@app.route('/')
def index():
    """渲染主页面"""
    return render_template('index.html')


@app.route('/api/categories')
def get_categories():
    """获取所有类别列表"""
    files = get_lyric_files()
    return jsonify(files)


@app.route('/api/generate', methods=['POST'])
def generate():
    """生成提示词"""
    data = request.json
    filename = data.get('filename')
    user_input = data.get('user_input', '')

    if not filename:
        return jsonify({'error': '请选择类别'}), 400

    if not user_input.strip():
        return jsonify({'error': '请输入主题描述'}), 400

    file_path = os.path.join(LYRIC_PROMPTS_DIR, filename)

    if not os.path.exists(file_path):
        return jsonify({'error': '文件不存在'}), 404

    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换 [请在此处填入你的主题描述，] 为用户输入
    content = content.replace('[请在此处填入你的主题描述，]', user_input)

    return jsonify({'content': content})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
