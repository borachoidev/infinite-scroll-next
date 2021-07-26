import axios from 'axios'

const URI = 'https://staging-api.yonple.com/recruit'
const TOKEN = '689322'

export type PostType = 'a' | 'b'

export interface PostData {
  id: string
  title: string // 게시물 제목
  content: string // 게시물 내용
  type: PostType // a or b
  createdAt: string // 게시물 생성일 (의미없음)
}

export const fetchList = async ({
  postType,
  pageNumber,
  query,
}: {
  postType: PostType
  pageNumber?: number
  query?: string
}) => {
  const { data } = await axios.get<PostData[]>(
    `${URI}/${TOKEN}/${postType}-posts?page=${pageNumber ?? 0}&search=${query ?? ''}`,
  )
  return data
}

export const fetchDetail = async ({ postType, id }: { postType: PostType; id: string }) => {
  const { data } = await axios.get<PostData>(`${URI}/${TOKEN}/${postType}-posts/${id}`)
  return data
}
