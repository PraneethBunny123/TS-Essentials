export {}

type ReadPermissions = 'no-read' | 'read'
type WritePermissions = 'no-write' | 'write'

type FilePermissions = `${ReadPermissions}-${WritePermissions}`