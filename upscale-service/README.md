---
title: Khagatara Upscale Service
emoji: 🔭
colorFrom: indigo
colorTo: purple
sdk: docker
pinned: false
---

# Khagatara Upscale Service

RealESRGAN-powered image upscaling API for [Khagatara](https://www.khagatara.com).

## API Endpoints

- `GET /health` — health check
- `POST /upscale` — upscale an image

## POST /upscale Parameters

| Field | Values | Default |
|-------|--------|---------|
| file | image file | required |
| mode | `realesrgan_x2`, `realesrgan_x4` | `realesrgan_x4` |
| target_resolution | `hd`, `2k`, `4k`, `8k` | `4k` |
