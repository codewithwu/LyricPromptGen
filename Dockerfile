FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim

WORKDIR /app

# 安装所有依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 创建非root用户
RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app

# 复制应用代码
COPY --chown=appuser:appuser . .

# 切换到非root用户
USER appuser

EXPOSE 5000

ENV FLASK_ENV=production
ENV FLASK_APP=app.py

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]