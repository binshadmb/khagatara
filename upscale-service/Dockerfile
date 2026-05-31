FROM python:3.11-slim

# System dependencies
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir setuptools==69.5.1 wheel && \
          pip install --no-cache-dir -r requirements.txt
# Copy app files
COPY upscale_service.py .
COPY download_weights.py .

# Create weights directory
RUN mkdir -p weights

# Download weights at BUILD time (not runtime)
# This means weights are baked into the image — no re-downloading ever
RUN python download_weights.py

# HuggingFace Spaces runs on port 7860
ENV PORT=7860

EXPOSE 7860

CMD ["uvicorn", "upscale_service:app", "--host", "0.0.0.0", "--port", "7860"]
