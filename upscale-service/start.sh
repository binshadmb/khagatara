#!/bin/bash
python download_weights.py
uvicorn upscale_service:app --host 0.0.0.0 --port 8000