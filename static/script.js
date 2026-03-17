let selectedFile = null;

// 页面加载时获取类别列表
document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

async function fetchCategories() {
    const container = document.getElementById('category-buttons');

    try {
        const response = await fetch('/api/categories');
        const files = await response.json();

        if (files.length === 0) {
            container.innerHTML = '<span class="error">未找到任何提示词文件</span>';
            return;
        }

        container.innerHTML = '';
        files.forEach(file => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = file.category;
            btn.onclick = () => selectCategory(btn, file);
            container.appendChild(btn);
        });
    } catch (error) {
        container.innerHTML = '<span class="error">加载失败，请确保后端服务已启动</span>';
    }
}

function selectCategory(btn, file) {
    // 移除其他按钮的选中状态
    document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('selected');
    });

    // 选中当前按钮
    btn.classList.add('selected');
    selectedFile = file;
}

document.getElementById('generate-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    const resultContainer = document.getElementById('result-container');

    // 验证输入
    if (!selectedFile) {
        resultContainer.innerHTML = '<div class="error">请先选择一个类别</div>';
        return;
    }

    if (!userInput) {
        resultContainer.innerHTML = '<div class="error">请输入主题描述</div>';
        return;
    }

    // 显示加载状态
    resultContainer.innerHTML = '<div class="loading">生成中...</div>';

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                filename: selectedFile.filename,
                user_input: userInput
            })
        });

        const data = await response.json();

        if (data.error) {
            resultContainer.innerHTML = `<div class="error">${data.error}</div>`;
        } else {
            // 使用 marked.js 渲染 Markdown
            resultContainer.innerHTML = `<div class="markdown-content">${marked.parse(data.content)}</div>`;
        }
    } catch (error) {
        resultContainer.innerHTML = '<div class="error">生成失败，请重试</div>';
    }
});
