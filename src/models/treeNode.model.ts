export interface TreeNode {
  id: string,
  name: string,
  children?: { [key: string]: any }[]
}
