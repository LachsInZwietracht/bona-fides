import { NextResponse } from 'next/server'
import { getLatestArticles } from '@/lib/blog'

export async function GET() {
  try {
    const latestArticles = getLatestArticles(6)
    return NextResponse.json(latestArticles)
  } catch (error) {
    console.error('Error fetching latest articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch latest articles' },
      { status: 500 }
    )
  }
}