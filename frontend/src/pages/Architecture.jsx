


import CodeBlock from "../components/CodeBlock";

export default function Architecture() {
  return (
    <div className="space-y-10">

      <h1 className="text-4xl font-bold text-green-400">
        🏗 System Architecture
      </h1>

      <p className="text-gray-400">
        This project uses a modern full-stack DevOps architecture with
        React (Vite), FastAPI, Docker, Nginx reverse proxy, CI/CD,
        and Oracle Cloud Free Tier infrastructure.
      </p>

      {/* High-Level Architecture Diagram */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🔷 High-Level Deployment Flow
        </h2>

        <CodeBlock
          language="text"
          code={`Kali Linux (Local Development)
        ↓
Docker Build (Frontend + Backend)
        ↓
Push Code to GitHub
        ↓
GitHub Actions CI/CD
        ↓
Oracle Cloud Ubuntu VM
        ↓
Docker Compose
        ↓
Nginx Reverse Proxy
        ↓
FastAPI Backend (Port 8000)
        ↓
React Frontend (Port 80)
        ↓
HTTPS via Let's Encrypt
        ↓
DuckDNS Domain`}
        />
      </div>

      {/* Container Architecture */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🐳 Container Architecture
        </h2>

        <CodeBlock
          language="text"
          code={`                   ┌─────────────────────┐
                   │     Oracle Cloud VM   │
                   │  (Ubuntu Free Tier)   │
                   └───────────┬───────────┘
                               │
                        Docker Engine
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
 ┌───────────────┐     ┌───────────────┐      ┌───────────────┐
 │    Nginx      │     │   FastAPI     │      │    React      │
 │ Reverse Proxy │ --> │ Backend :8000 │      │ Frontend :80  │
 │ Ports 80/443  │     └───────────────┘      └───────────────┘
 └───────────────┘
`}
        />
      </div>

      {/* Network Routing */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🌐 Network Routing Logic
        </h2>

        <CodeBlock
          language="nginx"
          code={`server {
    listen 80;

    location / {
        proxy_pass http://frontend:80;
    }

    location /api {
        proxy_pass http://backend:8000;
    }
}`}
        />
      </div>

      {/* CI/CD Pipeline */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🔁 CI/CD Pipeline
        </h2>

        <CodeBlock
          language="yaml"
          code={`on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - ssh into Oracle VM
      - docker compose down
      - docker compose up -d --build`}
        />
      </div>

      {/* Security Layer */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">
          🔐 Security Layers
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>HTTPS via Let's Encrypt</li>
          <li>Nginx Reverse Proxy Isolation</li>
          <li>Docker Container Isolation</li>
          <li>Firewall Rules on Oracle Cloud</li>
          <li>SSH Key-based Authentication</li>
        </ul>
      </div>

    </div>
  );
}