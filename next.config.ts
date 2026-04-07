import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Activa el MCP server en /_next/mcp (Next.js 16+)
  experimental: {
    mcpServer: true,
  },
  // Ignorar errores TS del código legacy del template en build de prototipo
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
